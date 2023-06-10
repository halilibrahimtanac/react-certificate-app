import { useEffect, useState } from "react";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import "../styles/styles.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { storage, firestore } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import CertificateList from "./CertificateList";
import Positioner from "./Positioners";
import Menu from "./Menu";

export const validator = (person) => {
  if (Object.values(person).includes("") || person.managers.length === 0) {
    alert("There is empty area!!!");
    return false;
  } else if (person.managers.length > 0) {
    for (const manager of person.managers) {
      if (manager.name === "" || !manager.signature) {
        alert("Please fill in all manager fields and upload a signature file.");
        return false;
      }
    }
  }
  return true;
};

export default function Home() {
  const [certificateBackground, setCertificateBackground] = useState();
  const [award, setAward] = useState();
  const [certificateTitles, setCertificateTitles] = useState({
    title: "CERTIFICATE",
    altTitle: "Of Recognition",
    awardTitle: "This Certificate Is Awarded To",
  });
  const [textPositions, setTextPositions] = useState({
    title: "0",
    altTitle: "0",
    content: "0",
    receipent: "0",
    awardTitle: "0",
    footer: "0",
  });

  const [textHorizontalPositions, setTextHorizontalPositions] = useState({
    title: "0",
    altTitle: "0",
    content: "0",
    receipent: "0",
    awardTitle: "0",
    footer: "0",
  });

  const [textColor, setTextColor] = useState({
    title: "#e9b345",
    altTitle: "#e9b345",
    content: "grey",
    receipent: "chocolate",
    awardTitle: "#e9b345",
    footer: "burlywood",
  });

  const [textSizes, setTextSizes] = useState({
    title: "62px",
    altTitle: "38px",
    content: "17px",
    receipent: "60px",
    awardTitle: "30px",
    footer: "0",
  });
  const [saveClicked, setSaveClicked] = useState(false);

  const [clickedBtn, setClickedBtn] = useState("New Certificate");
  const [person, setPerson] = useState({
    name: "",
    community: "",
    date: "",
    managers: [],
    description: `in recognition of their remarkable contributions to [Example Community] on [Example Date]. Your tireless efforts and 
    commitment to [Example Community] have made a significant impact, and we are grateful for your service.`,
  });

  useEffect(() => {
    if (saveClicked) {
      setTimeout(() => {
        saveFile();
        setSaveClicked(false);
        setPerson({
          name: "",
          community: "",
          date: "",
          managers: [],
        });
      }, 1500);
    }
  }, [person, saveClicked]);

  const [certificatesList, setCertificatesList] = useState([]);

  useEffect(() => {
    const certificatesRef = collection(firestore, "certificates-infos");
    const q = query(certificatesRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const certificates = [];
      snapshot.forEach((doc) => {
        const certificateData = doc.data();
        certificates.push(certificateData);
      });
      console.log(certificates);
      setCertificatesList(certificates);
    });

    return () => unsubscribe();
  }, []);

  const setCertificateHandler = (data) => {
    setPerson({
      name: data.name,
      community: data.community,
      date: data.date,
      managers: data.managers,
      description: data.description,
    });
    if (data.award) setAward({ logo: data.award });
    setCertificateBackground({ url: data.certificateBackground });
    setTextPositions({ ...data.textPositions });
    setTextHorizontalPositions({ ...data.textHorizontalPositions });
    setTextColor({ ...data.textColor });
    setTextSizes({ ...data.textSizes });
    setCertificateTitles({ ...data.certificateTitles });
  };

  const addNewPerson = async (data) => {
    let createdCertificate = {
      ...person,
      certificateTitles,
      textColor,
      textPositions,
      textHorizontalPositions,
      textSizes,
    };
    let tempPerson = { ...person };
    const uploadPromises = person.managers.map(async (m) => {
      const fileName = m.signature.name + v4();
      const storageRef = ref(storage, `images/${fileName}`);

      const snapshot = await uploadBytes(storageRef, m.signature);
      console.log("picture uploaded");

      const url = await getDownloadURL(ref(storage, `images/${fileName}`));
      return url;
    });

    Promise.all(uploadPromises)
      .then(async (urls) => {
        urls.forEach((url, i) => {
          createdCertificate.managers[i].signature = url;
        });

        if (certificateBackground && award) {
          const backgroundName = certificateBackground.file.name + v4();
          const storageReferance = ref(storage, `images/${backgroundName}`);
          const snapshot = await uploadBytes(
            storageReferance,
            certificateBackground.file
          );
          const url = await getDownloadURL(storageReferance);
          createdCertificate.certificateBackground = url;

          const awardName = award.file.name + v4();
          const awardReferance = ref(storage, `images/${awardName}`);
          const awardSnapshot = await uploadBytes(awardReferance, award.file);
          const awardUrl = await getDownloadURL(awardReferance);
          createdCertificate.award = awardUrl;
        }

        // Code to execute after all asynchronous operations are finished
        console.log("All asynchronous operations completed.");
        const docRef = addDoc(collection(firestore, "certificates-infos"), {
          ...createdCertificate,
        }).then((r) => {
          setPerson({
            name: "",
            community: "",
            date: "",
            managers: [],
          });
          alert("Certificate Saved...");
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("An error occurred:", error);
      });
  };

  const saveFile = () => {
    if (!validator(person)) {
      return;
    }
    html2canvas(document.getElementById("certificateContainer"), {
      useCORS: true,
      scale: 2,
    }).then(function (canvas) {
      var imgData = canvas.toDataURL("image/png", 1.0);
      var pageWidth = 950; // Set the desired width in pixels
      var pageHeight = 734; // Set the desired height in pixels

      var doc = new jsPDF({
        orientation: "l",
        unit: "px",
        format: [pageWidth, pageHeight],
      });

      doc.addImage(imgData, "PNG", 0, 0, pageWidth, pageHeight);
      doc.save(`${person.name.replaceAll(" ", "-")}.pdf`);
    });
  };

  return (
    <div className="container">
      <div
        id="certificateContainer"
        className="certificate-container"
        style={{
          backgroundImage: `url(${certificateBackground?.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header
          textSizes={textSizes}
          textPositions={textPositions}
          textHorizontalPositions={textHorizontalPositions}
          textColor={textColor}
          person={person}
          certificateTitles={certificateTitles}
        />

        <Footer
          managers={[...person.managers]}
          award={award?.logo}
          footerSize={textSizes.footer}
          footerVertical={textPositions.footer}
          footerHorizontal={textHorizontalPositions.footer}
          textColor={textColor}
        />
      </div>

      <div className="menu-option-container">
        <Menu clickedBtn={clickedBtn} setClickedBtn={setClickedBtn} />

        <div className="option-container">
          <div style={{ display: clickedBtn !== "Positioners" && "none" }}>
            <Positioner
              textSizes={textSizes}
              setTextSizes={setTextSizes}
              textPositions={textPositions}
              setTextPositions={setTextPositions}
              textHorizontalPositions={textHorizontalPositions}
              setTextHorizontalPositions={setTextHorizontalPositions}
              textColor={textColor}
              setTextColor={setTextColor}
              certificateTitles={certificateTitles}
              setCertificateTitles={setCertificateTitles}
            />
          </div>

          <div style={{ display: clickedBtn !== "New Certificate" && "none" }}>
            <Form
              setCertificateBackground={setCertificateBackground}
              setAward={setAward}
              person={person}
              setPerson={setPerson}
              addNewPerson={addNewPerson}
              saveFile={saveFile}
              award={award}
              certificateBackground={certificateBackground}
            />
          </div>

          <div style={{ display: clickedBtn !== "Certificate List" && "none" }}>
            <CertificateList
              setSaveClicked={setSaveClicked}
              setPerson={setPerson}
              certificatesList={certificatesList}
              setCertificateHandler={setCertificateHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

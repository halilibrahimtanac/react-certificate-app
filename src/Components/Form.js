import "../styles/styles.css";
import { validator } from "./Home";

export const convertToEnglish = (turkishText) => {
  const turkishChars = {
    ç: "c",
    ğ: "g",
    ı: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "C",
    Ğ: "G",
    İ: "I",
    Ö: "O",
    Ş: "S",
    Ü: "U",
  };

  // Replace Turkish characters with English characters
  const englishText = turkishText.replace(
    /[çğıöşüÇĞİÖŞÜ]/g,
    (match) => turkishChars[match]
  );

  return englishText;
};

export default function Form({
  award,
  certificateBackground,
  setAward,
  setCertificateBackground,
  addNewPerson,
  person,
  setPerson,
  saveFile,
}) {
  const managerCountHandler = (e) => {
    if (person.managers.length === 0) {
      setPerson({
        ...person,
        managers: Array.from(
          { length: parseInt(e.target.value) },
          (_, index) => ({ name: "", signature: undefined })
        ),
      });
    } else if (person.managers.length !== parseInt(e.target.value)) {
      let selectedCount = parseInt(e.target.value);
      let updatedManagers = [...person.managers];
      if (selectedCount > person.managers.length) {
        updatedManagers.push({ name: "", signature: undefined });
      } else if (selectedCount < person.managers.length) {
        updatedManagers.pop();
      }
      setPerson({ ...person, managers: updatedManagers });
    }
  };
  const managerChangeHandler = (name, val, idx) => {
    const updatedManagers = [...person.managers];
    const updatedVal = { ...updatedManagers[idx] };
    updatedVal[name] = val;
    updatedManagers[idx] = updatedVal;
    setPerson({ ...person, managers: updatedManagers });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!award || !certificateBackground) {
      alert("Certificate background or award logo hasn't been set yet!!!");
      return false;
    }
    if (validator(person)) {
      console.log("Validated!!!");
      addNewPerson(person);
    }
  };

  const setBackground = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setCertificateBackground({ file: file, url: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const setAwardLogo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAward({ file: file, logo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label>Set Certificate Background</label>
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
            onChange={(e) => setBackground(e)}
          />
        </div>

        <div>
          <label>Set Award Logo</label>
          <input type="file" accept=".png" onChange={(e) => setAwardLogo(e)} />
        </div>

        <div className="input-element">
          <label className="label">Awarded Person Name</label>
          <input
            className="textbox"
            maxLength="35"
            type="text"
            name="name"
            value={person.name}
            onChange={(e) =>
              setPerson({
                ...person,
                [e.target.name]: convertToEnglish(e.target.value),
              })
            }
            placeholder="Name..."
          />
        </div>

        <div className="input-element">
          <label className="label">Community</label>
          <input
            className="textbox"
            maxLength="35"
            type="text"
            name="community"
            value={person.community}
            onChange={(e) =>
              setPerson({
                ...person,
                [e.target.name]: convertToEnglish(e.target.value),
              })
            }
            placeholder="Community..."
          />
        </div>

        <div className="input-element">
          <label className="label">Award Date</label>
          <input
            className="textbox"
            type="date"
            name="date"
            value={person.date}
            onChange={(e) =>
              setPerson({ ...person, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Managers</label>
          <select className="textbox" onChange={(e) => managerCountHandler(e)}>
            <option disabled selected value></option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {person.managers.map((m, i) => (
          <div className="input-element manager-gap">
            <div className="input-element">
              <label>Manager Name</label>
              <input
                className="textbox"
                maxLength="35"
                type="text"
                name="name"
                value={person.managers[i].name}
                onChange={(e) =>
                  managerChangeHandler(
                    e.target.name,
                    convertToEnglish(e.target.value),
                    i
                  )
                }
              />
            </div>

            <div className="input-element">
              <label>Signature</label>
              <input
                type="file"
                name="signature"
                onChange={(e) =>
                  managerChangeHandler(e.target.name, e.target.files[0], i)
                }
              />
            </div>
          </div>
        ))}

        <div className="input-element">
          <label>Description</label>
          <textarea
            rows="4"
            value={person.description}
            onChange={(e) =>
              setPerson({ ...person, description: e.target.value })
            }
          ></textarea>
        </div>

        <div className="btn-div">
          <button className="submit-btn" type="submit">
            Save
          </button>
        </div>
      </form>
      <button
        className="submit-btn"
        style={{ marginTop: "15px" }}
        onClick={saveFile}
      >
        Download as PDF
      </button>
    </>
  );
}

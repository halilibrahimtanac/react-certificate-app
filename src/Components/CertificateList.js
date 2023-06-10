import React from "react";
import "../styles/styles.css";

const CertificateList = ({
  certificatesList,
  setPerson,
  setSaveClicked,
  setCertificateHandler,
}) => {
  const saveCertificate = (item) => {
    setCertificateHandler(item);
    setSaveClicked(true);
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Community</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {certificatesList.map((item, index) => (
          <tr onClick={() => setCertificateHandler(item)} key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.community}</td>
            <td>{item.date}</td>
            <td>
              <button
                onClick={() => saveCertificate(item)}
                className="download-btn"
              >
                <img
                  alt=""
                  className="download-logo"
                  src={"https://cdn-icons-png.flaticon.com/512/0/532.png"}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CertificateList;

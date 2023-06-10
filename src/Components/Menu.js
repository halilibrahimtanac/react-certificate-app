import "../styles/styles.css";

export default function Menu({ clickedBtn, setClickedBtn }) {
  return (
    <div className="top-menu">
      <button
        className={
          "menu-btn " + (clickedBtn === "New Certificate" && "bottom-border")
        }
        onClick={() => setClickedBtn("New Certificate")}
      >
        New Certificate
      </button>

      <button
        className={
          "menu-btn " + (clickedBtn === "Positioners" && "bottom-border")
        }
        onClick={() => setClickedBtn("Positioners")}
      >
        Positioners
      </button>

      <button
        className={
          "menu-btn " + (clickedBtn === "Certificate List" && "bottom-border")
        }
        onClick={() => setClickedBtn("Certificate List")}
      >
        Certificate List
      </button>
    </div>
  );
}

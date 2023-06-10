import "../styles/styles.css";

export default function Footer(props) {
  const pictureHandler = (index) => {
    if (
      props.managers[index] &&
      typeof props.managers[index].signature === "object"
    ) {
      return URL.createObjectURL(props.managers[index]?.signature);
    } else if (props.managers[index]) {
      return props.managers[index].signature;
    }
    return "";
  };
  return (
    <div
      className="footer"
      style={{
        left: `${props.footerHorizontal}`,
        top: `${props.footerVertical}`,
      }}
    >
      <div
        className="signature-div"
        style={{
          width: 150 + parseInt(props.footerSize) + "px",
          left: `${-1 * parseInt(props.footerSize)}px`,
        }}
      >
        {pictureHandler(0) !== "" && (
          <img
            className="signature-logo"
            src={pictureHandler(0)}
            style={{
              width: 75 + parseInt(props.footerSize / 2) + "px",
              height: 70 + parseInt(props.footerSize / 2) + "px",
            }}
          />
        )}
        <label className="manager-name">{props.managers[0]?.name}</label>
      </div>

      <img
        className="award-logo"
        src={props.award}
        style={{
          width: 160 + parseInt(props.footerSize) + "px",
          height: 160 + parseInt(props.footerSize) + "px",
        }}
      />

      <div
        className="signature-div"
        style={{
          width: 150 + parseInt(props.footerSize) + "px",
          right: `${-1 * parseInt(props.footerSize)}px`,
        }}
      >
        {props.managers[1] && (
          <>
            <img
              className="signature-logo"
              src={pictureHandler(1)}
              style={{
                width: 75 + parseInt(props.footerSize / 2) + "px",
                height: 70 + parseInt(props.footerSize / 2) + "px",
              }}
            />
            <label className="manager-name">{props.managers[1]?.name}</label>
          </>
        )}
      </div>
    </div>
  );
}

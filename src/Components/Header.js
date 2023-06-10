import "../styles/styles.css";

export default function Header(props) {
  return (
    <>
      <label
        className="title"
        style={{
          top: props.textPositions.title,
          left: props.textHorizontalPositions.title,
          color: props.textColor.title,
          fontSize: props.textSizes.title,
        }}
      >
        {props.certificateTitles.title}
      </label>
      <label
        className="recognition"
        style={{
          top: props.textPositions.altTitle,
          left: props.textHorizontalPositions.altTitle,
          color: props.textColor.altTitle,
          fontSize: props.textSizes.altTitle,
        }}
      >
        {props.certificateTitles.altTitle}
      </label>
      <label
        className="award-title"
        style={{
          top: props.textPositions.awardTitle,
          left: props.textHorizontalPositions.awardTitle,
          color: props.textColor.awardTitle,
          fontSize: props.textSizes.awardTitle,
        }}
      >
        {props.certificateTitles.awardTitle}
      </label>
      <label
        className="receipent-name"
        style={{
          top: props.textPositions.receipent,
          left: props.textHorizontalPositions.receipent,
          color: props.textColor.receipent,
          fontSize: props.textSizes.receipent,
        }}
      >
        {props.person.name}
      </label>
      <label
        className="content"
        style={{
          top: props.textPositions.content,
          left: props.textHorizontalPositions.content,
          color: props.textColor.content,
          borderTop: `1px solid ${props.textColor.content}`,
          fontSize: props.textSizes.content,
        }}
      >
        {props.person.description}
      </label>
    </>
  );
}

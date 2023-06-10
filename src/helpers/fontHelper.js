export const handleChange = (e) => {
  fileHandler(e.target.files[0]);
  return e.target.files[0].name.split(".")[0].replace(/[^a-zA-Z0-9]/g, "");
};

export const fileHandler = (file) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fontUrl = event.target.result;
    console.log("fonturl: ", fontUrl);
    const fontName = file.name.split(".")[0].replace(/[^a-zA-Z0-9]/g, "");
    applyFont(fontUrl, fontName);
  };
  reader.readAsDataURL(file);
};

const applyFont = (fontUrl, fontName) => {
  const fontFace = `@font-face {
      font-family: "${fontName}",
      src: url(${fontUrl}) format("woff");
    }`;
  const style = document.createElement("style");
  style.innerHTML = fontFace;
  document.head.appendChild(style);
};

import { useEffect, useState } from "react";
import { handleChange } from "../helpers/fontHelper";
import { convertToEnglish } from "./Form";

export default function Positioner(props) {
  const [defaultColor, setDefaultColor] = useState();
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState("");

  useEffect(() => {
    setDefaultColor(props.textColor);
  }, []);

  return (
    <div className="positioner-container">
      {/* <div className="positioner">
        <div>
          <input
            type="file"
            accept=".ttf, .otf"
            onChange={(e) => setFonts([...fonts, handleChange(e)])}
          />

          <select onChange={(e) => setSelectedFont(e.target.value)}>
            {fonts.map((f) => (
              <option value={f}>{f}</option>
            ))}
          </select>
        </div>
      </div> */}

      <div className="positioner">
        <div className="input-element">
          <label
            className="label"
            style={{
              fontFamily: selectedFont !== "" ? `"${selectedFont}"` : "Poppins",
            }}
          >
            Title Vertical
          </label>
          <input
            type="number"
            name="title"
            value={props.textPositions.title.slice(
              0,
              props.textSizes.title.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Title Size</label>
          <input
            type="number"
            name="title"
            value={props.textSizes.title.slice(
              0,
              props.textSizes.title.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Title Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="title"
            value={props.textHorizontalPositions.title.slice(
              0,
              props.textHorizontalPositions.title.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Title Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="title"
              value={props.textColor.title}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  title: defaultColor.title,
                })
              }
            >
              <img
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>

        <div className="input-element">
          <label className="label">Title Text</label>
          <input
            type="text"
            name="title"
            id="innerText"
            value={props.certificateTitles.title}
            onChange={(e) =>
              props.setCertificateTitles({
                ...props.certificateTitles,
                [e.target.name]: convertToEnglish(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="positioner" style={{ top: "130px" }}>
        <div className="input-element">
          <label className="label">Alt Title Position</label>
          <input
            type="number"
            name="altTitle"
            value={props.textPositions.altTitle.slice(
              0,
              props.textPositions.altTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Alt Title Size</label>
          <input
            type="number"
            name="altTitle"
            value={props.textSizes.altTitle.slice(
              0,
              props.textSizes.altTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Alt Title Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="altTitle"
            value={props.textHorizontalPositions.altTitle.slice(
              0,
              props.textHorizontalPositions.altTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Alt Title Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="altTitle"
              value={props.textColor.altTitle}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  altTitle: defaultColor.altTitle,
                })
              }
            >
              <img
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>

        <div className="input-element">
          <label className="label">Alt Title Text</label>
          <input
            type="text"
            name="altTitle"
            id="innerText"
            value={props.certificateTitles.altTitle}
            onChange={(e) =>
              props.setCertificateTitles({
                ...props.certificateTitles,
                [e.target.name]: convertToEnglish(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="positioner">
        <div className="input-element">
          <label className="label">Recognition Position</label>
          <input
            type="number"
            name="awardTitle"
            value={props.textPositions.awardTitle.slice(
              0,
              props.textPositions.awardTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Recognition Size</label>
          <input
            type="number"
            name="awardTitle"
            value={props.textSizes.awardTitle.slice(
              0,
              props.textSizes.awardTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Recognition Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="awardTitle"
            value={props.textHorizontalPositions.awardTitle.slice(
              0,
              props.textHorizontalPositions.awardTitle.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Recognition Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="awardTitle"
              value={props.textColor.awardTitle}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  awardTitle: defaultColor.awardTitle,
                })
              }
            >
              <img
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>

        <div className="input-element">
          <label className="label">Recognition Text</label>
          <input
            type="text"
            name="awardTitle"
            id="innerText"
            value={props.certificateTitles.awardTitle}
            onChange={(e) =>
              props.setCertificateTitles({
                ...props.certificateTitles,
                [e.target.name]: convertToEnglish(e.target.value),
              })
            }
          />
        </div>
      </div>

      <div className="positioner">
        <div className="input-element">
          <label className="label">Receipent Position</label>
          <input
            type="number"
            name="receipent"
            value={props.textPositions.receipent.slice(
              0,
              props.textPositions.receipent.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Receipent Size</label>
          <input
            type="number"
            name="receipent"
            value={props.textSizes.receipent.slice(
              0,
              props.textSizes.receipent.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Receipent Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="receipent"
            value={props.textHorizontalPositions.receipent.slice(
              0,
              props.textHorizontalPositions.receipent.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Receipent Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="receipent"
              value={props.textColor.receipent}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  receipent: defaultColor.receipent,
                })
              }
            >
              <img
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="positioner">
        <div className="input-element">
          <label className="label">Content Position</label>
          <input
            type="number"
            name="content"
            value={props.textPositions.content.slice(
              0,
              props.textPositions.content.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Content Size</label>
          <input
            type="number"
            name="content"
            value={props.textSizes.content.slice(
              0,
              props.textSizes.content.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Content Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="content"
            value={props.textHorizontalPositions.content.slice(
              0,
              props.textHorizontalPositions.content.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Content Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="content"
              value={props.textColor.content}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  content: defaultColor.content,
                })
              }
            >
              <img
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="positioner">
        <div className="input-element">
          <label className="label">Footer Position</label>
          <input
            type="number"
            name="footer"
            value={props.textPositions.footer.slice(
              0,
              props.textPositions.footer.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextPositions({
                ...props.textPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Footer Size</label>
          <input
            type="number"
            name="footer"
            value={props.textSizes.footer.slice(
              0,
              props.textSizes.footer.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextSizes({
                ...props.textSizes,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Footer Horizontal</label>
          <input
            id="horizontal"
            type="number"
            name="footer"
            value={props.textHorizontalPositions.footer.slice(
              0,
              props.textHorizontalPositions.footer.indexOf("p")
            )}
            onChange={(e) =>
              props.setTextHorizontalPositions({
                ...props.textHorizontalPositions,
                [e.target.name]: e.target.value + "px",
              })
            }
          />
        </div>

        <div className="input-element">
          <label className="label">Footer Color</label>
          <div className="color-btn-div">
            <input
              id="horizontal"
              type="color"
              name="footer"
              value={props.textColor.footer}
              onChange={(e) =>
                props.setTextColor({
                  ...props.textColor,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <button
              onClick={() =>
                props.setTextColor({
                  ...props.textColor,
                  footer: defaultColor.footer,
                })
              }
            >
              <img
                alt=""
                className="reset-logo"
                src="https://cdn-icons-png.flaticon.com/512/2618/2618245.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

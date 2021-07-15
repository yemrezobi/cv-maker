import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { SectionContext } from "../contexts/SectionContext";
import { CvContext } from "../contexts/CvContext";

function StyleEditor(){
    const [cvStyle, setCvStyle] = useContext(CvContext);
    const [sectionStyle, setSectionStyle] = useContext(SectionContext);
    const [sectionFont, setSectionFont] = useState(sectionStyle.fontFamily);
    const [sectionBorderStyle, setSectionBorderStyle] = useState(sectionStyle.borderStyle);
    const [sectionBorderColor, setSectionBorderColor] = useState(sectionStyle.borderColor);
    const [sectionBorderWidth, setSectionBorderWidth] = useState(sectionStyle.borderWidth.slice(0, -2));
    const [sectionMarginVertical, setSectionMarginVertical] = useState(sectionStyle.marginTop.slice(0, -2));
    const [sectionMarginHorizontal, setSectionMarginHorizontal] = useState(sectionStyle.marginLeft.slice(0, -2));
    const [cvBackgroundColor, setCvBackgroundColor] = useState(cvStyle.backgroundColor);
    const [sectionBackgroundColor, setSectionBackgroundColor] = useState(sectionStyle.backgroundColor);
    const [sectionBackgroundTransparent, setSectionBackgroundTransparent] = useState(false);
    const ref = useRef();

    const handleCvBackgroundColor = (event) => {
        setCvBackgroundColor(event.target.value);
        setCvStyle({
            ...cvStyle,
            backgroundColor: event.target.value
        });
    }

    const handleSectionBackgroundColor = (event) => {
        setSectionBackgroundColor(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            backgroundColor: event.target.value
        });
    }

    const handleSectionFont = (event) => {
        setSectionFont(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            fontFamily: event.target.value
        });
    }

    const handleSectionBorderStyle = (event) => {
        setSectionBorderStyle(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            borderStyle: event.target.value
        });
    }

    const handleSectionBorderColor = (event) => {
        setSectionBorderColor(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            borderColor: event.target.value
        });
    }

    const handleSectionBorderWidth = (event) => {
        if(sectionMarginVertical === "0"){                  // Update margins to collapse borders
            setSectionBorderWidth(event.target.value);
            setSectionStyle({
                ...sectionStyle,
                borderWidth: event.target.value+"px",
                marginTop: -event.target.value+"px",
                marginBottom: -event.target.value+"px"
            });
        } else {
            setSectionBorderWidth(event.target.value);
            setSectionStyle({
                ...sectionStyle,
                borderWidth: event.target.value+"px"
            });
        }
    }

    const handleSectionMarginVertical = (event) => {
        if(event.target.value === "0"){
            setSectionMarginVertical(event.target.value);
            setSectionStyle({
                ...sectionStyle,
                marginTop: -sectionBorderWidth+"px",
                marginBottom: -sectionBorderWidth+"px"
            });
        } else {
            setSectionMarginVertical(event.target.value);
            setSectionStyle({
                ...sectionStyle,
                marginTop: event.target.value+"px",
                marginBottom: event.target.value+"px"
            });
        }
    }

    const handleSectionMarginHorizontal = (event) => {
        setSectionMarginHorizontal(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            marginLeft: event.target.value+"px",
            marginRight: event.target.value+"px"
        });
    }

    const handleSectionBackgroundTransparent = (event) => {
        setSectionBackgroundTransparent(!sectionBackgroundTransparent);
        if(!sectionBackgroundTransparent){                  // The complement of the boolean is used because the state does not actually update until next render.
            setSectionStyle({
                ...sectionStyle,
                backgroundColor: "transparent"
            });
        } else {
            setSectionStyle({
                ...sectionStyle,
                backgroundColor: ref.current.value
            });
        }
    }

    return(
        <div className="edit-style box">
            <div className="edit-style-item">
                <label htmlFor="cvBackgroundColor">Background Color: </label>
                <input type="color" name="cvBackgroundColor" value={cvBackgroundColor} onChange={handleCvBackgroundColor}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionBackgroundColor">Section Background Color: </label>
                <input type="color" name="sectionBackgroundColor" value={sectionBackgroundColor} onChange={handleSectionBackgroundColor} disabled={sectionBackgroundTransparent} ref={ref}></input>
                <input type="checkbox" name="backgroundTransparent" value={sectionBackgroundTransparent} onChange={handleSectionBackgroundTransparent}></input>
                <label htmlFor="backgroundTransparent">Transparent Background</label>
            </div>
            <div className="edit-style-item">
                <div className="edit-style-item-text">Text Font:</div>
                <select value={sectionFont} onChange={handleSectionFont}>
                    <option value="Arial, Helvetica Neue, Helvetica, sans-serif">Arial</option>
                    <option value="Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif">Calibri</option>
                    <option value="Candara,Calibri,Segoe,Segoe UI,Optima,Arial,sans-serif">Candara</option>
                    <option value="Tahoma,Verdana,Segoe,sans-serif">Tahoma</option>
                    <option value="Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif">Trebuchet MS</option>
                    <option value="Verdana,Geneva,sans-serif">Verdana</option>
                    <option value="Georgia,Times,Times New Roman,serif">Georgia</option>
                    <option value="Palatino,Palatino Linotype,Palatino LT STD,Book Antiqua,Georgia,serif">Palatino</option>
                    <option value="TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif">Times New Roman</option>
                    <option value="Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace">Courier New</option>
                    <option value="Lucida Sans Typewriter,Lucida Console,monaco,Bitstream Vera Sans Mono,monospace">Lucida Sans Typewriter</option>
                </select>
            </div>
            <div className="edit-style-item">
                <div className="edit-style-item-text">Border Style:</div>
                <select value={sectionBorderStyle} onChange={handleSectionBorderStyle}>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="solid">Solid</option>
                </select>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionBorderColor">Border Color: </label>
                <input type="color" name="sectionBorderColor" value={sectionBorderColor} onChange={handleSectionBorderColor}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionBorderWidth">Border Width: </label>
                <input type="number" name="sectionBorderWidth" min="0" max="5" value={sectionBorderWidth} onChange={handleSectionBorderWidth}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionMarginVertical">Vertical Margin: </label>
                <input type="number" name="sectionMarginVertical" min="0" value={sectionMarginVertical} onChange={handleSectionMarginVertical}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionMarginHorizontal">Horizontal Margin: </label>
                <input type="number" name="sectionMarginHorizontal" min="0" value={sectionMarginHorizontal} onChange={handleSectionMarginHorizontal}></input>
            </div>
        </div>
    )
}

export default StyleEditor
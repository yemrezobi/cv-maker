import { useState } from "react";
import { useContext } from "react";
import { SectionContext } from "../contexts/SectionContext";

function StyleEditor(){
    const [sectionStyle, setSectionStyle] = useContext(SectionContext);
    const [sectionFont, setSectionFont] = useState(sectionStyle.fontFamily);
    const [sectionBorderStyle, setSectionBorderStyle] = useState(sectionStyle.borderStyle);
    const [sectionBorderWidth, setSectionBorderWidth] = useState(sectionStyle.borderWidth);
    const [sectionBackgroundColor, setSectionBackgroundColor] = useState(sectionStyle.backgroundColor);

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

    const handleSectionBorderWidth = (event) => {
        setSectionBorderWidth(event.target.value);
        setSectionStyle({
            ...sectionStyle,
            borderWidth: event.target.value
        });
    }

    return(
        <div className="edit-style box">
            <div className="edit-style-item">
                <div className="edit-style-item-text">Section background color:</div>
                <input type="color" value={sectionBackgroundColor} onChange={handleSectionBackgroundColor}></input>
            </div>
            <div className="edit-style-item">
                <div className="edit-style-item-text">Text font:</div>
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
                <div className="edit-style-item-text">Border style:</div>
                <select value={sectionBorderStyle} onChange={handleSectionBorderStyle}>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="solid">Solid</option>
                </select>
            </div>
        </div>
    )
}

export default StyleEditor
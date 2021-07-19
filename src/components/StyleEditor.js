import { useEffect, useState } from "react";
import { useContext } from "react";
import { SectionContext } from "../contexts/SectionContext";
import { CvContext } from "../contexts/CvContext";
import { LocalizationContext } from "../contexts/LocalizationContext"
import chroma from "chroma-js";

function StyleEditor(){
    const [cvStyle, setCvStyle] = useContext(CvContext);
    const [sectionStyle, setSectionStyle] = useContext(SectionContext);
    const [localizationContext, setLocalizationContext] = useContext(LocalizationContext);
    const [sectionFont, setSectionFont] = useState(sectionStyle.fontFamily);
    const [sectionBorderStyle, setSectionBorderStyle] = useState(sectionStyle.borderStyle);
    const [sectionBorderWidth, setSectionBorderWidth] = useState(sectionStyle.borderWidth.slice(0, -2));
    const [sectionMarginVertical, setSectionMarginVertical] = useState(sectionStyle.marginTop.slice(0, -2));
    const [sectionMarginHorizontal, setSectionMarginHorizontal] = useState(sectionStyle.marginLeft.slice(0, -2));
    const [cvBackgroundColor, setCvBackgroundColor] = useState(cvStyle.backgroundColor);
    const [sectionBackgroundTransparent, setSectionBackgroundTransparent] = useState(false);
    const [colorBase, setColorBase] = useState();
    const [colorLight, setColorLight] = useState();
    const [, setColorDark] = useState();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [localization, setLocalization] = useState(localizationContext.en);

    const handleCvBackgroundColor = (event) => {
        setCvBackgroundColor(event.target.value);
        setCvStyle({
            ...cvStyle,
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
        console.log(colorBase);
        console.log(colorLight);
        setSectionBackgroundTransparent(event.target.checked);
        if(event.target.checked){
            setSectionStyle({
                ...sectionStyle,
                backgroundColor: "transparent"
            });
        } else {
            setSectionStyle({
                ...sectionStyle,
                backgroundColor: colorLight
            });
        }
    }

    const updateColorPalette = (event) => {
        let base = chroma(event.target.value).hex();
        let light = chroma(base).brighten(1).hex();
        let dark = chroma(base).darken(1).hex();
        setColorLight(light);
        setColorBase(base);
        setColorDark(dark);

        setSectionStyle({
            ...sectionStyle,
            backgroundColor: sectionBackgroundTransparent ? "transparent" : light,
            borderColor: dark
        });
    }

    const randomizeColor = (event) => {
        let base = chroma.random().hex();
        let light = chroma(base).brighten(1).hex();
        let dark = chroma(base).darken(1).hex();
        setColorLight(light);
        setColorBase(base);
        setColorDark(dark);

        setSectionStyle({
            ...sectionStyle,
            backgroundColor: sectionBackgroundTransparent ? "transparent" : light,
            borderColor: dark
        });
    }

    const handleSelectedLanguage = (event) => {
        setSelectedLanguage(event.target.value);
        switch(event.target.value){
            case "en":
                setLocalizationContext({
                    ...localizationContext,
                    selectedLanguage: "en"
                })
                setLocalization(localizationContext.en);
                break;
            case "de":
                setLocalizationContext({
                    ...localizationContext,
                    selectedLanguage: "de"
                })
                setLocalization(localizationContext.de);
                break;
            case "tr":
                setLocalizationContext({
                    ...localizationContext,
                    selectedLanguage: "tr"
                })
                setLocalization(localizationContext.tr);
                break;
            default:
                setLocalizationContext({
                    ...localizationContext,
                    selectedLanguage: "en"
                })
                setLocalization(localizationContext.en);
                break;
        }
    }

    useEffect(() => {
        randomizeColor();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="edit-style box" style={{ marginTop: "-3px" }}>
            <div className="edit-style-item">
                <label htmlFor="selectedLanguage">{localization.styleEditor_language}: </label>
                <select name="selectedLanguage" value={selectedLanguage} onChange={handleSelectedLanguage}>
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                    <option value="tr">Türkçe</option>
                </select>
            </div>
            <div className="edit-style-item">
                <label htmlFor="cvBackgroundColor">{localization.styleEditor_backgroundColor}: </label>
                <input type="color" name="cvBackgroundColor" value={cvBackgroundColor} onChange={handleCvBackgroundColor}></input>
            </div>
            <div className="edit-style-item">
                <label>{localization.styleEditor_baseColor}: </label>
                <input type="color" value={colorBase} onChange={updateColorPalette}></input>
                <input type="checkbox" name="backgroundTransparent" checked={sectionBackgroundTransparent} onChange={handleSectionBackgroundTransparent}></input>
                <label htmlFor="backgroundTransparent">{localization.styleEditor_transparentBackground}</label>
            </div>
            <div className="edit-style-item">
                <button onClick={randomizeColor}>{localization.styleEditor_randomizeColor}</button>
            </div>
            <div className="edit-style-item">
                <div className="edit-style-item-text">{localization.styleEditor_textFont}:</div>
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
                <div className="edit-style-item-text">{localization.styleEditor_borderStyle}:</div>
                <select value={sectionBorderStyle} onChange={handleSectionBorderStyle}>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="solid">Solid</option>
                </select>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionBorderWidth">{localization.styleEditor_borderWidth}: </label>
                <input type="number" name="sectionBorderWidth" min="0" max="5" value={sectionBorderWidth} onChange={handleSectionBorderWidth}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionMarginVertical">{localization.styleEditor_verticalMargin}: </label>
                <input type="number" name="sectionMarginVertical" min="0" value={sectionMarginVertical} onChange={handleSectionMarginVertical}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="sectionMarginHorizontal">{localization.styleEditor_horizontalMargin}: </label>
                <input type="number" name="sectionMarginHorizontal" min="0" value={sectionMarginHorizontal} onChange={handleSectionMarginHorizontal}></input>
            </div>
        </div>
    );
    /* return(<div className="edit-style box">
        <button onClick={(event) => {console.log(localization.styleEditor_language)}}>Test</button>
    </div>); */
}

export default StyleEditor
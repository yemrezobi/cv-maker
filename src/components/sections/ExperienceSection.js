import Section from "../Section";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function ExperienceSection(props) {

    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

    useEffect(() => {
        switch (localizationContext.selectedLanguage) {
            case "en":
                setLocalization(localizationContext.en);
                break;
        
            case "de":
                setLocalization(localizationContext.de);
                break;

            case "tr":
                setLocalization(localizationContext.tr);
                break;

            default:
                setLocalization(localizationContext.en);
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localizationContext.selectedLanguage]);

    return (
        <Section id={props.id} type="experience">
            <h4>{localization.sections_experience_header}</h4>
            <div className="edit-style-item">
                <label className="field" htmlFor="company">{localization.sections_experience_company}</label>
                <br/>
                <span className="field" name="company">{props.data.company}</span>
            </div>
            <div className="edit-style-item">
                <label className="field" htmlFor="title">{localization.sections_experience_title}</label>
                <br/>
                <span className="field" name="title">{props.data.title}</span>
            </div>
            <div className="edit-style-item">
                <label className="field" htmlFor="yearOfStart">{localization.sections_experience_yearRange}</label>
                <br/>
                <span className="field date" name="yearOfStart">{props.data.yearOfStart} - </span>
                <span className="field date" name="yearOfEnd">{props.data.yearOfEnd}</span>
            </div>
            <div className="edit-style-item">
                <label className="field" htmlFor="description">{localization.sections_experience_description}</label>
                <br/>
                <span className="field" name="bio" style={{ whiteSpace: "pre-wrap" }}>{props.data.description}</span>
            </div>
        </Section>
    )
}

export default ExperienceSection;
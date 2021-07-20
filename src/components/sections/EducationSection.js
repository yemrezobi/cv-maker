import Section from "../Section";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function EducationSection(props) {

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
        <Section id={props.id} type="education">
                <h4>{localization.sections_education_header}</h4>
                <div className="edit-style-item">
                    <label className="field" htmlFor="courseName">{localization.sections_education_courseName}</label>
                    <br/>
                    <span className="field" name="courseName">{props.data.courseName}</span>
                </div>
                <div className="edit-style-item">
                    <label className="field" htmlFor="organisation">{localization.sections_education_organisation}</label>
                    <br/>
                    <span className="field" name="organisation">{props.data.organisation}</span>
                </div>
                <div className="edit-style-item">
                    <label className="field" htmlFor="city">{localization.sections_education_city}</label>
                    <br/>
                    <span className="field" name="city">{props.data.city}</span>
                </div>
                <div className="edit-style-item">
                    <label className="field" htmlFor="yearOfStart">{localization.sections_education_yearRange}</label>
                    <br/>
                    <span className="field date" name="yearOfStart">{props.data.yearOfStart} -</span>
                    <span className="field date" name="yearOfEnd">{props.data.yearOfEnd}</span>
                </div>
                <div className="edit-style-item">
                    <label className="field" htmlFor="description">{localization.sections_education_description}</label>
                    <br/>
                    <span className="field" name="description">{props.data.description}</span>
                </div>
        </Section>
    );
}

export default EducationSection;

import { useDispatch } from "react-redux";
import Section from "../Section";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function BioSection(props) {

    const dispatch = useDispatch();
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

    const handleRemove = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

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
        <Section id={props.id}>
            <div className="sectionselected">
                <h4 className="description" htmlFor="element_5">{localization.sections_bio_header}</h4>
                <div>
                    <textarea placeholder="about yourself..." id="Description" name="element_5" cols="45" rows="5" />
                </div>
                <hr className="split" />
            </div>
            <button className="remove" onClick={handleRemove}>
                Remove Me
            </button>
        </Section>
    )
}

export default BioSection;
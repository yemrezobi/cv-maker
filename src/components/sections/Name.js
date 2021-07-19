import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";


function Name(props) {


    const dispatch = useDispatch();
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

    const remove_name = (e) => {
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
            <h4>{localization.sections_name_header}</h4>
            <input id="nameField" type="text" min="0" max="100" step="5" />
            <br />
            <button className="remove" onClick={remove_name}>
                remove section
            </button>
        </Section>
    );
}
export default Name;

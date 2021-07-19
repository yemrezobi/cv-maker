import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";


function Contact(props) {


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
            <h4>{localization.sections_contact_header}</h4>
            <tr>
                <tr>
                    <td>
                        <label className="field" htmlFor="phone">{localization.sections_contact_phone}: </label><br />
                        <input
                            className="field"
                            name="phone"
                            placeholder="500 000 00 00"
                            id="phone" type="text" maxLength="50" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <label className="field" htmlFor="email">{localization.sections_contact_email}: </label><br />
                        <input
                            name="email"
                            className="field"
                            placeholder="cv-maker@cv-maker.com"
                            id="email" type="email" maxLength="50" />
                    </td>
                </tr>
            </tr>

            <br />
            <button className="remove" onClick={remove_name}>
                remove section
            </button>
        </Section>
    );
}
export default Contact;

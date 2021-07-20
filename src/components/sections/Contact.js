import Section from '../Section';
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";


function Contact(props) {

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
        <Section id={props.id}>
            <h4>{localization.sections_contact_header}</h4>
            <div className="edit-style-item">
                <label className="field" htmlFor="phone">{localization.sections_contact_phone}: </label>
                <span className="field" name="phone">{props.data.phone}</span>
            </div>
            <div className="edit-style-item">
                <label className="field" htmlFor="email">{localization.sections_contact_email}: </label>
                <span className="field" name="email">{props.data.email}</span>
            </div>
        </Section>
    );
}
export default Contact;

import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function ContactEditor(props) {
    const [phone, setPhone] = useState(props.data.phone !== undefined ? props.data.phone : "");
    const [email, setEmail] = useState(props.data.email !== undefined ? props.data.email : "");
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en)

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    useEffect(() => {
        props.onChange({
            ...props.data,
            phone: phone,
            email: email
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [phone, email])

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

    return(
        <div>
            <div className="edit-style-item">
                <label htmlFor="phone">{localization.sections_contact_phone}: </label>
                <input type="tel" name="phone" value={phone} onChange={handlePhone}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="email">{localization.sections_contact_email}: </label>
                <input type="email" name="email" value={email} onChange={handleEmail}></input>
            </div>
        </div>
    );
}

export default ContactEditor;

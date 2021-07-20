import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function EducationEditor(props) {
    const [name, setName] = useState(props.data.name !== undefined ? props.data.name : "");
    const [lastName, setlastName] = useState(props.data.lastName !== undefined ? props.data.lastName : "");
    const [phone, setPhone] = useState(props.data.phone !== undefined ? props.data.phone : "");
    const [email, setEmail] = useState(props.data.email !== undefined ? props.data.email : "");
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en)

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleLastName = (event) => {
        setlastName(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    useEffect(() => {
        props.onChange({
            ...props.data,
            name: name,
            lastName: lastName,
            phone: phone,
            email: email
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, lastName, phone, email])

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
        <div>
            <div className="edit-style-item">
                <label htmlFor="name">{localization.sections_references_firstName}: </label>
                <input type="text" name="name" value={name} onChange={handleName}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="lastName">{localization.sections_references_lastName}: </label>
                <input type="text" name="lastName" value={lastName} onChange={handleLastName}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="phone">{localization.sections_contact_phone}: </label>
                <input type="text" name="phone" value={phone} onChange={handlePhone}></input>
            </div>

            <div className="edit-style-item">
                <label htmlFor="email">{localization.sections_contact_email}: </label>
                <input name="email" value={email} onChange={handleEmail}></input>
            </div>
        </div>
    );
}

export default EducationEditor;

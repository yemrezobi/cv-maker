import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function NameEditor(props) {
    const [name, setName] = useState(props.data.name !== undefined ? props.data.name : "");
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en)

    const handleName = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        props.onChange({
            ...props.data,
            name: name
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

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
                <label htmlFor="name">{localization.sections_name_header}: </label>
                <input type="text" name="name" value={name} onChange={handleName}></input>
            </div>
        </div>
    );
}

export default NameEditor;

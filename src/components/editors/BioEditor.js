import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function BioEditor(props) {
    const [bio, setBio] = useState(props.data.bio !== undefined ? props.data.bio : "");
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en)

    const handleBio = (event) => {
        setBio(event.target.value);
    }

    useEffect(() => {
        props.onChange({
            ...props.data,
            bio: bio
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bio])

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
                <label htmlFor="bio" style={{ verticalAlign: "top" }}>{localization.sections_name_header}: </label>
                <textarea name="bio" value={bio} onChange={handleBio}></textarea>
            </div>
        </div>

    );
}

export default BioEditor;

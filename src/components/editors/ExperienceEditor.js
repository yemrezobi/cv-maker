import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function ExperienceEditor(props) {
    const [company, setCompany] = useState(props.data.company !== undefined ? props.data.company : "");
    const [title, setTitle] = useState(props.data.title !== undefined ? props.data.title : "");
    const [yearOfStart, setYearOfStart] = useState(props.data.yearOfStart !== undefined ? props.data.yearOfStart : "");
    const [yearOfEnd, setYearOfEnd] = useState(props.data.yearOfEnd !== undefined ? props.data.yearOfEnd : "");
    const [description, setDescription] = useState(props.data.description !== undefined ? props.data.description : "");
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

    const handleCompany = (event) => {
        setCompany(event.target.value);
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleYearOfStart = (event) => {
        setYearOfStart(event.target.value);
    }

    const handleYearOfEnd = (event) => {
        setYearOfEnd(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    useEffect(() => {
        props.onChange({
            ...props.data,
            company: company,
            title: title,
            yearOfStart: yearOfStart,
            yearOfEnd: yearOfEnd,
            description: description
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [company, title, yearOfStart, yearOfEnd, description])

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
                <label htmlFor="company">{localization.sections_experience_company}: </label>
                <input type="text" name="company" value={company} onChange={handleCompany}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="title">{localization.sections_experience_title}: </label>
                <input type="text" name="title" value={title} onChange={handleTitle}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="yearOfStart">{localization.sections_experience_yearRange}: </label>
                <input className="date" type="text" name="yearOfStart" maxLength="4" value={yearOfStart} onChange={handleYearOfStart}></input>
                <input className="date" type="text" name="yearOfEnd" maxLength="4" value={yearOfEnd} onChange={handleYearOfEnd}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="description" style={{ verticalAlign: "top" }}>{localization.sections_experience_description}: </label>
                <textarea name="description" value={description} onChange={handleDescription}></textarea>
            </div>
        </div>
    );
}

export default ExperienceEditor;

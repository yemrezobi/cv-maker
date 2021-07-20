import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function EducationEditor(props) {
    const [courseName, setCourseName] = useState(props.data.courseName !== undefined ? props.data.courseName : "");
    const [organisation, setOrganisation] = useState(props.data.organisation !== undefined ? props.data.organisation : "");
    const [city, setCity] = useState(props.data.city !== undefined ? props.data.city : "");
    const [yearOfStart, setYearOfStart] = useState(props.data.yearOfStart !== undefined ? props.data.yearOfStart : "");
    const [yearOfEnd, setYearOfEnd] = useState(props.data.yearOfEnd !== undefined ? props.data.yearOfEnd : "");
    const [description, setDescription] = useState(props.data.description !== undefined ? props.data.description : "");
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en)

    const handleCourseName = (event) => {
        setCourseName(event.target.value);
    }

    const handleOrganisation = (event) => {
        setOrganisation(event.target.value);
    }

    const handleCity = (event) => {
        setCity(event.target.value);
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
            courseName: courseName,
            organisation: organisation,
            city: city,
            yearOfStart: yearOfStart,
            yearOfEnd: yearOfEnd,
            description: description
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courseName, organisation, city, yearOfStart, yearOfEnd, description])

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
                <label htmlFor="courseName">{localization.sections_education_courseName}: </label>
                <input type="text" name="courseName" value={courseName} onChange={handleCourseName}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="organisation">{localization.sections_education_organisation}: </label>
                <input type="text" name="organisation" value={organisation} onChange={handleOrganisation}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="city">{localization.sections_education_city}: </label>
                <input type="text" name="city" value={city} onChange={handleCity}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="yearOfStart">{localization.sections_education_yearRange}: </label>
                <input className="date" type="text" name="yearOfStart" maxLength="4" value={yearOfStart} onChange={handleYearOfStart}></input>
                <input className="date" type="text" name="yearOfEnd" maxLength="4" value={yearOfEnd} onChange={handleYearOfEnd}></input>
            </div>
            <div className="edit-style-item">
                <label htmlFor="description" style={{ verticalAlign: "top" }}>{localization.sections_education_description}: </label>
                <textarea name="description" value={description} onChange={handleDescription}></textarea>
            </div>
        </div>
    );
}

export default EducationEditor;

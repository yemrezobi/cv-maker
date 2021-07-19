import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";

function EducationSection(props) {
    const dispatch = useDispatch();
    const [localizationContext, ] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

    const remove_education = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    const [inputList, setInputList] = useState([{ coursetName: "", organisation: "", city: "", yearofstart: "", yearoftheend: "", description: "" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { coursetName: "", organisation: "", city: "", yearofstart: "", yearoftheend: "", description: "" }]);

    };

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
                <h4>{localization.sections_education_header}</h4>
                {inputList.map((x, i) => {
                    return (
                        <table className="section">
                            <tr id="li_1">
                                <label className="field" htmlFor="coursetName">{localization.sections_education_courseName}</label>
                                <div>
                                    <input
                                        className="field"
                                        name="coursetName"
                                        placeholder="Course Name"
                                        value={x.coursetName}
                                        onChange={e => handleInputChange(e, i)}
                                        id="element_1" type="text" maxLength="50" />
                                </div>
                            </tr>
                            <tr id="li_2">
                                <label className="field" htmlFor="organisation">{localization.sections_education_organisation}</label>
                                <div>
                                    <input name="organisation"
                                        className="field"
                                        placeholder="Course organisation"
                                        value={x.organisation}
                                        onChange={e => handleInputChange(e, i)}
                                        id="element_2" type="text" maxLength="50" />
                                </div>
                            </tr>
                            <tr id="li_3">
                                <label className="field" htmlFor="city">{localization.sections_education_city}</label>
                                <div>
                                    <input
                                        className="field"
                                        name="city"
                                        placeholder="Course city"
                                        value={x.city}
                                        onChange={e => handleInputChange(e, i)}
                                        id="element_3" type="text" maxLength="50" />
                                </div>
                            </tr>
                            <tr id="li_4">
                                <label className="field">{localization.sections_education_yearRange}</label>
                            </tr>
                            <tr>
                                <div className="field">
                                    <input
                                        className="field"
                                        name="yearofstart"
                                        placeholder="Start Year"
                                        value={x.yearofstart}
                                        onChange={e => handleInputChange(e, i)}
                                        className="Date" id="element_4" type="text" maxLength="4" />
                                    <input
                                        className="field"
                                        name="yearoftheend"
                                        placeholder="End Year"
                                        value={x.yearoftheend}
                                        onChange={e => handleInputChange(e, i)}
                                        className="Date" id="element_6" type="text" maxLength="4" />
                                </div>
                            </tr>
                            <tr id="li_5">
                                <label className="field" htmlFor="element_5">{localization.sections_education_description}</label>
                                <div>
                                    <textarea
                                        className="field"
                                        name="description"
                                        placeholder="Enter Course description"
                                        value={x.description}
                                        onChange={e => handleInputChange(e, i)}
                                        id="Description" cols="40" rows="5" />
                                </div>
                                <div className="field">
                                    {inputList.length !== 1 &&
                                        <button
                                            className="remove"
                                            onClick={() => handleRemoveClick(i)}>Remove Education</button>}
                                    {inputList.length - 1 === i && <button className="remove" onClick={handleAddClick}>Add More</button>}
                                </div>
                                <hr className="split" />
                            </tr>
                        </table>
                    );
                })}

            </div>

            <button className="remove" onClick={remove_education}>
                Remove Section
            </button>
        </Section >
    )
}

export default EducationSection;
//<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
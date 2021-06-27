import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";

function EducationSection(props) {
    const dispatch = useDispatch();

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


    return (
        <Section id={props.id}>
            <div className="sectionselected">
                <h4>Education</h4>
                {inputList.map((x, i) => {
                    return (
                        <table className="section">
                            <tr id="li_1">
                                <label className="field" htmlFor="coursetName">Education/course name </label>
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
                                <label className="field" htmlFor="organisation">Organisation </label>
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
                                <label className="field" htmlFor="city">City </label>
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
                                <label className="" htmlFor="yearofstart">Year of Start -  </label>
                                <label className="" htmlFor="yearoftheend">Year of End </label>
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
                                <label className="field" htmlFor="element_5">Description </label>
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
                                    {inputList.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}>Remove Education</button>}
                                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add More</button>}
                                </div>
                                <hr className="split" />
                            </tr>
                        </table>
                    );
                })}

            </div>

            <button onClick={remove_education}>
                Remove Section
            </button>
        </Section >
    )
}

export default EducationSection;
//<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
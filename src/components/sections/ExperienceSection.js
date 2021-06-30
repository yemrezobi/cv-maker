import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";

function ExperienceSection(props) {

    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });

    }
    const [inputList, setInputList] = useState([{ company: "", title: "", yearofstart: "", yearoftheend: "", description: "" }]);

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
        setInputList([...inputList, { company: "", title: "", yearofstart: "", yearoftheend: "", description: "" }]);

    };



    return (
        <Section id={props.id}>
            <div className="sectionselected">
                <h4>Experience</h4>
                {inputList.map((x, i) => {
                    return (
                        <table>
                            <tr id="li_1">
                                <label className="field" htmlFor="company">Company </label>
                                <div>
                                    <input
                                        className="field"
                                        name="company"
                                        placeholder="Company"
                                        value={x.company}
                                        onChange={e => handleInputChange(e, i)}
                                        id="company" type="text" maxLength="50" />
                                </div>
                            </tr>
                            <tr id="li_2">
                                <label className="field" htmlFor="title">Function title </label>
                                <div>
                                    <input
                                        className="field"
                                        name="title"
                                        placeholder="Function title"
                                        value={x.title}
                                        onChange={e => handleInputChange(e, i)}
                                        id="element_1" type="text" maxLength="50" />
                                </div>
                            </tr>
                            <tr id="li_4">
                                <label htmlFor="yearofstart">Year Of Start - </label>
                                <label htmlFor="yearoftheend">Year Of End </label>
                                <div>
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
                                <label className="field" htmlFor="description">Description </label>
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
                                        className="remove"
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {inputList.length - 1 === i && <button className="field" className="remove" onClick={handleAddClick}>Add More</button>}
                                </div>
                                <hr className="split" />
                            </tr>
                        </table>

                    );
                })}
            </div>

            <button className="remove" onClick={handleRemove}>
                Remove Section
            </button>
        </Section>
    )
}

export default ExperienceSection;
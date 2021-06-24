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
                        <ul>
                            <li id="li_1">
                                <label htmlFor="company">Company </label>
                                <div>
                                    <input name="company"
                                        placeholder="Company"
                                        value={x.company}
                                        onChange={e => handleInputChange(e, i)}
                                        id="company" type="text" maxLength="50" />
                                </div>
                            </li>
                            <li id="li_2">
                                <label htmlFor="title">Function title </label>
                                <div>
                                    <input name="title"
                                        placeholder="Function title"
                                        value={x.title}
                                        onChange={e => handleInputChange(e, i)}
                                        id="element_1" type="text" maxLength="50" />
                                </div>
                            </li>
                            <li id="li_4">
                                <label htmlFor="yearofstart">Year Of Start - </label>
                                <label htmlFor="yearoftheend">Year Of End </label>
                                <div>
                                    <input name="yearofstart"
                                        placeholder="Start Year"
                                        value={x.yearofstart}
                                        onChange={e => handleInputChange(e, i)}
                                        className="Date" id="element_4" type="text" maxLength="4" />
                                    <input
                                        name="yearoftheend"
                                        placeholder="End Year"
                                        value={x.yearoftheend}
                                        onChange={e => handleInputChange(e, i)}
                                        className="Date" id="element_6" type="text" maxLength="4" />
                                </div>
                            </li>
                            <li id="li_5">
                                <label htmlFor="description">Description </label>
                                <div>
                                    <textarea
                                        name="description"
                                        placeholder="Enter Course description"
                                        value={x.description}
                                        onChange={e => handleInputChange(e, i)}
                                        id="Description" cols="40" rows="5" />
                                </div>
                                <div className="btn-box">
                                    {inputList.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}>Remove Experience</button>}
                                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add More</button>}
                                </div>
                                <hr className="split" />
                            </li>
                        </ul>

                    );
                })}
            </div>

            <button onClick={handleRemove}>
                Remove Section
            </button>
        </Section>
    )
}

export default ExperienceSection;
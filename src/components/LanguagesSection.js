/* import ReactStars from "react-star-rating-component"; */
import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from './Section';


function LanguagesSection(props) {


    const dispatch = useDispatch();

    const remove_languages = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }


    const [inputList, setInputList] = useState([{ firstName: "", rating: "range" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };


    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };


    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { firstName: "", rating: "" }]);

    };

    const [count] = useState(_uniqueId('prefix-'));


    return (
        <Section id={props.id}>
            <h5 className="section">Languages</h5>
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        name="firstName"
                                        placeholder="Enter Language Name"
                                        value={x.firstName}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </td>
                                <td>
                                    <input type="range" min="0" max="100" defaultValue="50" step="5" onChange={e => handleInputChange(e, i)} />
                                </td>
                            </tr>
                        </table>

                        <div className="btn-box">
                            {inputList.length !== 1 && <button
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>Remove</button>}
                            {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                        </div>

                    </div>

                );
            })}
            <br />
            <button onClick={remove_languages}>
                Remove languages group
            </button>

        </Section>
    );
}

export default LanguagesSection;

//<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

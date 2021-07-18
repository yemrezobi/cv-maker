import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';



function HobbiesSection(props) {


    const dispatch = useDispatch();

    const remove_hobbies = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }
    const [inputList, setInputList] = useState([{ hobby: "" }]);

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
        setInputList([...inputList, { hobby: "" }]);

    };
    return (
        <Section id={props.id}>
            <h4>Hobbies</h4>
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        className="field"
                                        name="hobby"
                                        placeholder="Hobby Name"
                                        value={x.hobby}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="field">
                                        {inputList.length !== 1 && <button
                                            className="remove"
                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                        {inputList.length - 1 === i && <button className="remove" onClick={handleAddClick}>Add</button>}
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                );
            })}
            <br />
            <button className="remove" onClick={remove_hobbies}>
                Remove group
            </button>

        </Section>
    );
}
export default HobbiesSection;

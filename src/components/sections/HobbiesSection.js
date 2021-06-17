/* import ReactStars from "react-star-rating-component"; */
import _uniqueId from 'lodash/uniqueId';
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
            <h5 className="section">Skill</h5>
            <input className="skillsgroup" type="text" placeholder="Enter the name of the skills group" />
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        name="hobby"
                                        placeholder="Enter hobby Name"
                                        value={x.hobby}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </td>
                                <td>
                                    <div className="btn-box">
                                        {inputList.length !== 1 && <button
                                            className="mr10"
                                            onClick={() => handleRemoveClick(i)}>Remove</button>}
                                        {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                                    </div>
                                </td>
                            </tr>
                        </table>



                    </div>


                );
            })}
            <br />
            <button onClick={remove_hobbies}>
                Remove group
            </button>

        </Section>
    );
}
export default HobbiesSection;
//            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";



function HobbiesSection(props) {


    const dispatch = useDispatch();
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);

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
            <h4>{localization.sections_hobbies_header}</h4>
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        className="input"
                                        name="hobby"
                                        placeholder="Hobby Name"
                                        value={x.hobby}
                                        onChange={e => handleInputChange(e, i)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="input">
                                        {inputList.length !== 1 && <button
                                            className="remove"
                                            onClick={() => handleRemoveClick(i)}>-</button>}
                                        {inputList.length - 1 === i && <button className="remove" onClick={handleAddClick}>+</button>}
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

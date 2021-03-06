import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";
import { SectionContext } from "../../contexts/SectionContext";

function LanguagesSection(props) {

    const dispatch = useDispatch();
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);
    const [sectionStyle, setSectionStyle] = useContext(SectionContext);

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
            <h4 >{localization.sections_languages_header}</h4>
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        className="input"
                                        name="firstName"
                                        placeholder="Language Name"
                                        value={x.firstName}
                                        onChange={e => handleInputChange(e, i)}
                                        style={{backgroundColor: sectionStyle.backgroundColor}}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="field" type="range" min="0" max="100" defaultValue="50" step="5" onChange={e => handleInputChange(e, i)} />
                                </td>
                            </tr>
                        </table>

                        <div>
                            {inputList.length !== 1 && <button
                                style={{backgroundColor: sectionStyle.backgroundColor}}
                                className="mr10"
                                onClick={() => handleRemoveClick(i)}>-</button>}
                            {inputList.length - 1 === i && <button style={{backgroundColor: sectionStyle.backgroundColor}} onClick={handleAddClick}>+</button>}
                        </div>

                    </div>

                );
            })}
            <br />

        </Section>
    );
}

export default LanguagesSection;

//<div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

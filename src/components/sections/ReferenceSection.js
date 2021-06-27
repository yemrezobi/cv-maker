import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";



/*const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}
*/
function ReferenceSection(props) {

    const dispatch = useDispatch();

    const remove_reference = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    const [inputList, setInputList] = useState([{ name: "", Lname: "", phone: "", email: "" }]);

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
        setInputList([...inputList, { name: "", Lname: "", phone: "", email: "" }]);

    };

    return (
        <Section id={props.id}>
            <div className="sectionselected">
                <h4>Refrence</h4>
                {inputList.map((x, i) => {
                    return (

                        <table>
                            <tr>
                                <label className="field" htmlFor="name">Name : </label><br />
                                <input
                                    className="field"
                                    name="name"
                                    placeholder="Name"
                                    value={x.name}
                                    onChange={e => handleInputChange(e, i)}
                                    id="name" type="text" maxLength="50" />
                            </tr>
                            <br />
                            <tr>
                                <label className="field" htmlFor="Lname">Last Name : </label><br />
                                <input
                                    className="field"
                                    name="Lname"
                                    placeholder="Last Name"
                                    value={x.Lname}
                                    onChange={e => handleInputChange(e, i)}
                                    id="Lname" type="text" maxLength="50" />
                            </tr>
                            <br />
                            <tr>
                                <label className="field" htmlFor="phone">Phone : </label><br />
                                <input
                                    className="field"
                                    name="phone"
                                    placeholder="555555 5555"
                                    value={x.phone}
                                    onChange={e => handleInputChange(e, i)}
                                    id="phone" type="text" maxLength="50" />
                            </tr>
                            <br />
                            <tr>
                                <label className="field" htmlFor="email">Email : </label><br />
                                <input
                                    className="field"
                                    name="email"
                                    placeholder="Email"
                                    value={x.email}
                                    onChange={e => handleInputChange(e, i)}
                                    id="email" type="text" maxLength="50" />
                                <div className="field">
                                    {inputList.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add More</button>}
                                </div>
                                <hr className="split" />
                            </tr>
                        </table>
                    );

                })}
            </div>
            <button onClick={remove_reference}>
                Remove Section
            </button>
        </Section>
    )
}

export default ReferenceSection;
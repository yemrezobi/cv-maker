import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";
import _uniqueId from 'lodash/uniqueId';

import HobbiesList from "./hobbiesCreate";


class HobbiesView extends React.Component {
    state = {
        hobbiesDetails: [
            {
                index: Math.random(),
                name: "",
            }
        ]
    };
    handleChange = e => {
        if (
            ["name"].includes(
                e.target.name
            )
        ) {
            let hobbiesDetails = [...this.state.hobbiesDetails];
            hobbiesDetails[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };
    addNewRow = e => {
        this.setState(prevState => ({
            hobbiesDetails: [
                ...prevState.hobbiesDetails,
                {
                    index: Math.random(),
                    name: "",
                }
            ]
        }));
    };

    deteteRow = index => {
        this.setState({
            hobbiesDetails: this.state.hobbiesDetails.filter(
                (s, sindex) => index !== sindex
            )
        });
    };

    clickOnDelete(record) {
        this.setState({
            hobbiesDetails: this.state.hobbiesDetails.filter(r => r !== record)
        });
    }
    render() {
        let { hobbiesDetails } = this.state;
        return (
            <Section >
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div style={{ marginTop: 20 }}>
                        <div />
                        <div>
                            <h2> Enter Book Details</h2>
                            <div>
                                <div className="row">
                                    <HobbiesList
                                        add={this.addNewRow}
                                        delete={this.clickOnDelete.bind(this)}
                                        hobbiesDetails={hobbiesDetails}
                                    />
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>
                </form>
                <div style={{ marginTop: 20 }}>{JSON.stringify(hobbiesDetails)}</div>
            </Section>
        );
    }
}
export default HobbiesView;









/*
function HobbiesSection(props) {
    const dispatch = useDispatch();

    const remove_hobbies = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    const [inputList, setInputList] = useState([{ hobby: "" }]);

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
        setInputList([...inputList, { hobby: "" }]);
    };


    return (
        <Section id={props.id}>
            <h5 className="section">Hobbies</h5>
            <input className="skillsgroup" type="text" placeholder="Enter the name of the Hobbies group" />
            {inputList.map((x, i) => {
                return (
                    <div className="skill">
                        <table>
                            <tr>
                                <td>
                                    <input
                                        name="hobby"
                                        placeholder="Enter Hobby Name"
                                        value={x.firstName}
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
            <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>

        </Section>
    )
}

export default HobbiesSection;*/
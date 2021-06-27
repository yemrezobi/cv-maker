import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';


function Contact(props) {


    const dispatch = useDispatch();

    const remove_name = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }
    return (
        <Section id={props.id}>
            <h4>Contact Me</h4>
            <tr>
                <tr>
                    <td>
                        <label className="field" htmlFor="phone">Phone : </label><br />
                        <input
                            className="field"
                            name="phone"
                            placeholder="500 000 00 00"
                            id="phone" type="text" maxLength="50" />
                    </td>
                </tr>
                <br />
                <tr>
                    <td>
                        <label className="field" htmlFor="email">Email : </label><br />
                        <input
                            name="email"
                            className="field"
                            placeholder="cv-maker@cv-maker.com"
                            id="email" type="email" maxLength="50" />
                    </td>
                </tr>
            </tr>

            <br />
            <button onClick={remove_name}>
                remove section
            </button>
        </Section>
    );
}
export default Contact;

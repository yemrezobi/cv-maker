import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Section from '../Section';


function Name(props) {


    const dispatch = useDispatch();

    const remove_name = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }
    return (
        <Section id={props.id}>
            <h4>Name</h4>
            <input id="nameField" type="text" min="0" max="100" step="5" />
            <br />
            <button className="remove" onClick={remove_name}>
                remove section
            </button>
        </Section>
    );
}
export default Name;

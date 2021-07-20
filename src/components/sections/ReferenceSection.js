import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";



/*const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}
*/
function ReferenceSection(props) {

    const dispatch = useDispatch();
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);




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
        <Section id={props.id} type="reference">
            <div className="sectionselected">
                <h4>{localization.sections_references_header}</h4>
                <table>
                    <tr className="edit-style-item">
                        <label className="field" htmlFor="name">{localization.sections_references_firstName}: </label><br />
                        <span className="field" name="name">{props.data.name}</span>
                    </tr>
                    <br />
                    <tr>
                        <label className="field" htmlFor="lastName">{localization.sections_references_lastName}: </label><br />
                        <span className="field" name="lastName">{props.data.lastName}</span>
                    </tr>
                    <br />
                    <tr>
                        <label className="field" htmlFor="phone">{localization.sections_references_phone}: </label><br />
                        <span className="field" name="phone">{props.data.phone}</span>
                    </tr>
                    <br />
                    <tr>
                        <label className="field" htmlFor="email">{localization.sections_references_email}: </label><br />
                        <span className="field" name="email">{props.data.email}</span>
                    </tr>
                </table>
            </div>

        </Section>
    )
}

export default ReferenceSection;

//<hr className="split" />

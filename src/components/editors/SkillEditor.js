/*import { useDispatch } from "react-redux";
import Section from "../Section";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LocalizationContext } from "../../contexts/LocalizationContext";



/*const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}
*/
/*
function SkillEditor(props) {

    const dispatch = useDispatch();
    const [localizationContext,] = useContext(LocalizationContext);
    const [localization, setLocalization] = useState(localizationContext.en);
    const [skill, setSkill] = useState(props.data.skill !== undefined ? props.data.skill : "");
    const [rating, setRating] = useState(props.data.rating !== undefined ? props.data.rating : "");
    const [skillgroup, setSkillgroup] = useState(props.data.skillgroup !== undefined ? props.data.skillgroup : "");


    const [inputList, setInputList] = useState([{ skill: "", rating: "range" }]);


    const handleSkill = (event) => {
        setSkill(event.target.value);
    }

    const handleSkillgroup = (event) => {
        setSkillgroup(event.target.value);
    }

    const handleRating = (event) => {
        setRating(event.target.value);
    }



    useEffect(() => {
        props.onChange({
            ...props.data,
            skillgroup: skillgroup,
            skill: skill,
            rating: rating
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skillgroup, skill, rating])


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
        <div>
            <label htmlFor="skillgroup">{localization.sections_skills_header}: </label>
            <input type="text" name="skillgroup" value={skillgroup} onChange={handleSkillgroup}></input>

            <div>
                <div className="edit-style-item">
                    <label htmlFor="skill">{localization.sections_skills_header}: </label>
                    <input type="text" name="skill" value={skill} onChange={handleSkill}></input>
                </div>
                <div className="edit-style-item">
                    <label htmlFor="rating">{localization.sections_experience_header}: </label>
                    <input type="range" name="rating" value={rating} onChange={handleRating}></input>
                </div>
            </div>

        </div>


    )
}

export default SkillEditor;

//<hr className="split" />

{
    inputList.map((x, i) => {
        return (


                                   );
    })
}

*/
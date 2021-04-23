import { useState } from "react"
import { useDispatch } from "react-redux";
import EducationSection from "./EducationSection"
import ReferenceSection from "./ReferenceSection"
import ExperienceSection from "./ExperienceSection"
import SkillsGroupSection from "./SkillsGroupSection"
import Skill from "./Skill"


function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const [ref_count, setRefCount] = useState(0);
    const [experience_count, setExperienceCount] = useState(0);
    const [skills_group_count, setSkillGroupsCount] = useState(0);

    const dispatch = useDispatch();

    const add_education = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <EducationSection key={"e" + count} id={"e" + count} />
        });
        setCount(count + 1);
    }
    const add_reference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ReferenceSection key={"r" + ref_count} id={"r" + ref_count} />
        });
        setRefCount(ref_count + 1);
    }
    const add_experience = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ExperienceSection key={"x" + experience_count} id={"x" + experience_count} />
        });
        setExperienceCount(experience_count + 1);
    }
    const add_skills_group = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Skill key={"g" + skills_group_count} id={"g" + skills_group_count} />
        });
        setSkillGroupsCount(skills_group_count + 1);
    }
    return (
        <div className="select-section box">

            <button onClick={add_education}>
                Add new education
            </button>
            <button onClick={add_reference}>
                Add new reference
            </button>
            <button onClick={add_experience}>
                Add new Experience
            </button>
            <br />
            <button onClick={add_skills_group}>
                Add new Skills Group
            </button>

        </div>

    );
}

export default SectionSelector
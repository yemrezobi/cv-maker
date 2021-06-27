import { useState } from "react"
import { useDispatch } from "react-redux";
import EducationSection from "./sections/EducationSection"
import ReferenceSection from "./sections/ReferenceSection"
import ExperienceSection from "./sections/ExperienceSection"
import Skill from "./sections/Skill"
import SectionTest from "./sections/SectionTest"

function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const addEducation = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <EducationSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }

    const addTest = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <SectionTest key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }
    const addReference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ReferenceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }
    const addExperience = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ExperienceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }
    const addSkillsGroup = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Skill key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }
    return (
        <div className="select-section box">

            <button onClick={addEducation}>
                Add new education
            </button>
            <button onClick={addReference}>
                Add new reference
            </button>
            <button onClick={addExperience}>
                Add new Experience
            </button>
            <br />
            <button onClick={addSkillsGroup}>
                Add new Skills Group
            </button>
            <button onClick={addTest}>
                Add Test Section
            </button>

        </div>

    );
}

export default SectionSelector
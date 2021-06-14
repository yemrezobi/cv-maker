import { useState } from "react"
import { useDispatch } from "react-redux";
import EducationSection from "./sections/EducationSection"
import ReferenceSection from "./sections/ReferenceSection"
import ExperienceSection from "./sections/ExperienceSection"
import Skill from "./sections/Skill"
import HobbiesSection from "./sections/HobbiesSection"
import SectionTest from "./sections/SectionTest"
import LanguagesSection from "./LanguagesSection"

function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const addEducation = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <EducationSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addTest = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <SectionTest key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addReference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ReferenceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addExperience = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ExperienceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addSkillsGroup = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Skill key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addHobbies = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <HobbiesSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addLanguages = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <LanguagesSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    return (
        <div className="select-section box">
            <table>
                <tr>
                    <td>
                        <button className="sectionBut" onClick={addEducation}>
                            Add new education
                        </button>
                    </td>
                    <td>
                        <button className="sectionBut" onClick={addReference}>
                            Add new reference
                        </button>
                    </td>
                    <td>
                        <button className="sectionBut" onClick={addExperience} >
                            Add new Experience
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="sectionBut" onClick={addSkillsGroup}>
                            Add new Skills Group
                        </button>
                    </td>
                    <td>
                        <button className="sectionBut" onClick={addTest}>
                            Add Test Section
                        </button>
                    </td>
                    <td>
                        <button className="sectionBut" onClick={addHobbies}>
                            Add Hobbies Section
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="sectionBut" onClick={addLanguages}>
                            Add Languages Section
                        </button>
                    </td>
                </tr>
            </table>
        </div>

    );
}

export default SectionSelector




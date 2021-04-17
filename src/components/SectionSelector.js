import { useState } from "react"
import { useDispatch } from "react-redux";
import Section from "./Section"
import Reference from "./Reference"
import Experience from "./Experience"



function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const [ref_count, setRefCount] = useState(0);
    const [experience_count, setExperienceCount] = useState(0);

    const dispatch = useDispatch();

    const add_education = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Section key={"e" + count} id={"e" + count} />
        });
        setCount(count + 1);
    }
    const add_reference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Reference key={"r" + ref_count} id={"r" + ref_count} />
        });
        setRefCount(ref_count + 1);
    }
    const add_experience = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Experience key={"x" + experience_count} id={"x" + experience_count} />
        });
        setExperienceCount(experience_count + 1);
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
        </div>
    );
}

export default SectionSelector
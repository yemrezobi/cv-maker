import { useState } from "react"
import { useDispatch } from "react-redux";
import Section from "./Section"
import Reference from "./Reference"


function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const add_education = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Section key={count} id={count} />
        });
        setCount(count + 1);
    }
    const add_reference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Reference key={count} id={count} />
        });
        setCount(count + 1);
    }

    return (
        <div className="select-section box">
            <button onClick={add_education}>
                Add new education
            </button>
            <button onClick={add_reference}>
                Add new reference
            </button>
        </div>
    );
}

export default SectionSelector
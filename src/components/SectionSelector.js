import { useState } from "react"
import { useDispatch } from "react-redux";
import SectionTest from "./sections/SectionTest"

function SectionSelector(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const addTest = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <SectionTest key={count} id={count} />,
            panel: "main"
        });
        setCount(count+1);
    }

    return (
        <div className="select-section box">
            <button onClick={addTest}>
                Add Test Section
            </button>
        </div>

    );
}

export default SectionSelector
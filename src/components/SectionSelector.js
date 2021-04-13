import { useState } from "react"
import { useDispatch } from "react-redux";
import Section from "./Section"

function SectionSelector(props){
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Section key={count} id={count}/>
        });
        setCount(count + 1);
    }

    return(
        <div className="select-section box">
            <button onClick={handleClick}>
                Add Section
            </button>
        </div>
    );   
}

export default SectionSelector
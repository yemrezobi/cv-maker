import { useDispatch } from "react-redux";
import Section from "../Section";

function SectionTest(props) {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return(
        <Section>
            <h4>Section {props.id}</h4>
            <button onClick={handleClick}>
                Remove Me
            </button>
        </Section>
    );
}

export default SectionTest;
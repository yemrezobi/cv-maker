import { useDispatch } from "react-redux";
import Section from "../Section";

function BioSection(props) {

    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }



    return (
        <Section id={props.id}>
            <div className="sectionselected">
                <label className="description" htmlFor="element_5">Profile </label>
                <div>
                    <textarea placeholder="about yourself..." id="Description" name="element_5" cols="45" rows="5" />
                </div>
                <hr className="split" />
            </div>

            <button onClick={handleRemove}>
                Remove Me
            </button>
        </Section>
    )
}

export default BioSection;
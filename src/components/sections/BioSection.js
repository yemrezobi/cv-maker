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
                <h4 className="description" htmlFor="element_5">About me </h4>
                <div>
                    <textarea placeholder="about yourself..." id="Description" name="element_5" cols="45" rows="5" />
                </div>
                <hr className="split" />
            </div>
            <button className="remove" onClick={handleRemove}>
                Remove Me
            </button>
        </Section>
    )
}

export default BioSection;
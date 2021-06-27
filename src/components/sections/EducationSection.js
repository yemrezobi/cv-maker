import { useDispatch } from "react-redux";
import Section from "../Section";

function EducationSection(props) {
    const dispatch = useDispatch();

    const handleRemove = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return (
        <Section id={props.id}>
            <h4>Section {props.id}</h4>
            <div className="sectionselected">
                <form action={"AddEducation"}>
                    <h4>Add New Education</h4>
                    <ul>
                        <li id="li_1">
                            <label className="description" htmlFor="element_1">Education/course name </label>
                            <div>
                                <input id="element_1" name="element_1" type="text" maxLength="50" />
                            </div>
                        </li>
                        <li id="li_2">
                            <label className="description" htmlFor="element_2">Organization </label>
                            <div>
                                <input id="element_2" name="element_2" type="text" maxLength="50" />
                            </div>
                        </li>
                        <li id="li_3">
                            <label className="description" htmlFor="element_3">City </label>
                            <div>
                                <input id="element_3" name="element_3" type="text" maxLength="50" />
                            </div>
                        </li>
                        <li id="li_4">
                            <label className="description" htmlFor="element_4">Year Of Start - </label>
                            <label className="description" htmlFor="element_6">Year Of End </label>
                            <div>
                                <input className="Date" id="element_4" name="element_4" type="text" maxLength="4" />
                                <input className="Date" id="element_6" name="element_6" type="text" maxLength="4" />
                            </div>
                        </li>
                        <li id="li_5">
                            <label className="description" htmlFor="element_5">Description </label>
                            <div>
                                <textarea id="Description" name="element_5" cols="45" rows="5" />
                            </div>
                        </li>
                    </ul>
                </form>
                <hr className="split" />
            </div>
            <button onClick={handleRemove}>
                Remove Me
            </button>
        </Section>
    )
}

export default EducationSection;
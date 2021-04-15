import { useDispatch } from "react-redux";

function Section(props) {
    const dispatch = useDispatch();

    const remove_education = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return (
        <div className="section">
            <span>section {props.id}</span>
            <div class="sectionselected">
                <form action={"AddEducation"}>
                    <h4>Add New Education</h4>
                    <ul>
                        <li id="li_1">
                            <label class="description" for="element_1">Education/course name </label>
                            <div>
                                <input id="element_1" name="element_1" type="text" maxlength="50" />
                            </div>
                        </li>
                        <li id="li_2">
                            <label class="description" for="element_2">Organization </label>
                            <div>
                                <input id="element_2" name="element_2" type="text" maxlength="50" />
                            </div>
                        </li>
                        <li id="li_3">
                            <label class="description" for="element_3">City </label>
                            <div>
                                <input id="element_3" name="element_3" type="text" maxlength="50" />
                            </div>
                        </li>
                        <li id="li_4">
                            <label class="description" for="element_4">Year Of Start - </label>
                            <label class="description" for="element_6">Year Of End </label>
                            <div>
                                <input type="date" class="Date" id="element_4" name="element_4" type="text" maxlength="4" />
                                <input class="Date" id="element_6" name="element_6" type="text" maxlength="4" />
                            </div>
                        </li>
                        <li id="li_5">
                            <label class="description" for="element_5">Description </label>
                            <div>
                                <textarea id="Description" name="element_5" />
                            </div>
                        </li>
                    </ul>
                </form>
                <hr className="split" />

            </div>
            <button onClick={remove_education}>
                Remove Me
            </button>

        </div>
    )
}

export default Section;
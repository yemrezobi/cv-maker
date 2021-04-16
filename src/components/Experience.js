import { useDispatch } from "react-redux";


/*const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}
*/
function Experience(props) {
    const dispatch = useDispatch();

    const remove_experience = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return (
        <div className="section">
            <span>section {props.id}</span>
            <div className="sectionselected">
                <form action={"AddReference"}>
                    <h4>Add New Experience</h4>
                    <ul>
                        <li id="li_1">
                            <label className="description" htmlFor="element_1">Company </label>
                            <div>
                                <input id="element_1" name="element_1" type="text" maxLength="255" />
                            </div>
                        </li>
                        <li id="li_2">
                            <label className="description" htmlFor="element_2">Function title </label>
                            <div>
                                <input id="element_2" name="element_2" type="text" maxLength="255" />
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
            <button onClick={remove_experience}>
                Remove Me
            </button>
        </div>
    )
}

export default Experience;
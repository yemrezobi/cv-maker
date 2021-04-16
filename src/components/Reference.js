import { useDispatch } from "react-redux";


/*const normalizePhoneNumber = (value) => {
    return value.replace(/\s/g, "").replace(/s/g, "").match(/.{1,6}/g)?.join(" ").substr(0, 11) || ""
}
*/
function Reference(props) {
    const dispatch = useDispatch();

    const remove_reference = (e) => {
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
                    <h4>Add New Refrence</h4>
                    <ul>
                        <li>
                            <label htmlFor="name">Name : </label><br />
                            <input type="text" name="name" id="" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="Lname">Last Name : </label><br />
                            <input type="text" name="Lname" id="" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="phone">Phone : </label><br />
                            <input type="text" className="phone" name="phone" placeholder="555555 5555" id="phone" />
                        </li>
                        <br />
                        <li>
                            <label htmlFor="email">Email : </label><br />
                            <input type="email" name="email" id="" />
                        </li>
                    </ul>
                </form>
                <hr className="split" />
            </div>
            <button onClick={remove_reference}>
                Remove Me
            </button>
        </div>
    )
}

export default Reference;
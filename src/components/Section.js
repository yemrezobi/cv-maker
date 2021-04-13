import { useDispatch } from "react-redux";

function Section(props){
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            id: props.id
        });
    }

    return(
        <div className="section">
            <span>section {props.id}</span>
            <button onClick={handleClick}>
                Remove Me
            </button>
        </div>
    )
}

export default Section;
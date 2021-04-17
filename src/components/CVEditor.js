import { useSelector } from "react-redux";

function CVEditor(props) {
    const sections = useSelector(state => state.sections);

    return (
        <div className="cv-editor box">
            {sections}
        </div>
    );
}

export default CVEditor
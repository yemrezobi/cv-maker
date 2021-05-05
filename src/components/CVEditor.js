import { useSelector } from "react-redux";

function CVEditor(props){
    const content = useSelector(state => state.sections.content);
    const navbar = useSelector(state => state.sections.navbar)

    return(
        <div className="cv-editor box">
            <div className="cv-navbar">
                {navbar}
            </div>
            <div className="cv-content">
                {content}
            </div>
        </div>
    );
}

export default CVEditor
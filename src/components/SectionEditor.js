import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BioEditor from "./editors/BioEditor";
import ContactEditor from "./editors/ContactEditor";
import EducationEditor from "./editors/EducationEditor";
import ExperienceEditor from "./editors/ExperienceEditor";
//import HobbiesEditor from "./editors/HobbiesEditor";
//import LanguagesEditor from "./editors/LanguagesEditor";
import NameEditor from "./editors/NameEditor";
import ReferenceEditor from "./editors/ReferenceEditor.js";
import SkillEditor from "./editors/SkillEditor";

function SectionEditor(props) {
    const selectedSection = useSelector(state => state.sections.selectedSection);
    const dispatch = useDispatch();

    const onChange = (data) => {
        dispatch({
            type: "EDIT_SELECTED",
            data: data
        });
    }

    const handleRemove = () => {
        dispatch({
            type: "REMOVE_SELECTED_SECTION"
        });
    }

    const render = () => {
        if (selectedSection.props.data === undefined)
            return;
        switch (selectedSection.props.data.type) {

            case "bio":
                return (
                    <BioEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            case "contact":
                return (
                    <ContactEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            case "education":
                return (
                    <EducationEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            case "experience":
                return (
                    <ExperienceEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            /*  case "hobbies":
                  return (
                      <HobbiesEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                  );
  
              case "languages":
                  return (
                      <LanguagesEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                  );
  */
            case "name":
                return (
                    <NameEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            case "reference":
                return (
                    <ReferenceEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );

            /*case "skills":
                return (
                    <SkillEditor key={selectedSection.props.id} onChange={onChange} data={selectedSection.props.data} />
                );
*/
            default:
                return;
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(selectedSection.props.id)]);

    return (
        <div className="edit-section box">
            {render()}
            <button className="edit-section-remove-button" onClick={handleRemove} disabled={selectedSection.props.data === undefined}>Remove Section</button>
        </div>

    );
}

export default SectionEditor;
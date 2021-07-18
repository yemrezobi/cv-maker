import { useDispatch } from "react-redux";
import Tempalte1 from './Templates/Template1';
import Tempalte2 from './Templates/Template2';
import Tempalte3 from './Templates/Template3';
import Template2test from './Templates/Template2test';
import BioSection from "./sections/BioSection";
import Name from "./sections/Name";
import tm1 from './Icons/tm1.png';
import Skill from "./sections/Skill";
import HobbiesSection from "./sections/HobbiesSection";
import CVEditor from "./CVEditor";


function TemplateSelector(props) {

    const dispatch = useDispatch();

    const replaceTemplate = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            section: <Tempalte1 />,
            panel: "main"

        });
    };

    const handleClick1 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section: <Tempalte1 />,
            panel: "main"

        });

    }

    const handleClick2 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_TEMPLATE",
            mainSections: Template2test.mainSections,
            sideSections: Template2test.sideSections
        });
    }

    const handleClick3 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section: <Tempalte3 />,
            panel: "main"
        });
    }

    return (
        <div className="select-section box">
            <button onClick={handleClick1}>
                <img className="templateIcon" src={tm1}></img>
            </button>
            <button onClick={handleClick2}>
                <img className="templateIcon" src={tm1}></img>
            </button>
            <button onClick={handleClick3}>
                <img className="templateIcon" src={tm1}></img>
            </button>


        </div>
    );
}

export default TemplateSelector
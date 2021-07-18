import { useDispatch } from "react-redux";
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template2test from './templates/Template2test';

import tm1 from './icons/tm1.png';

function TemplateSelector(props) {

    const dispatch = useDispatch();

    const replaceTemplate = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            section:  <Template1/> ,
            panel : "main"
    
        });
    };

    const handleClick1 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section:  <Template1/> ,
            panel : "main"

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
            section:<Template3/> ,
            panel : "main"
        });
    }

    return (
        <div className="select-section box">
            <button onClick={handleClick1}>
                <img className="templateIcon" src={tm1} alt="template1"></img>
            </button>
            <button onClick={handleClick2}>
                <img className="templateIcon" src={tm1} alt="template1"></img>     
           </button>
           <button onClick={handleClick3}>
                <img className="templateIcon" src={tm1} alt="template1"></img>     
           </button>


        </div>
    );
}

export default TemplateSelector
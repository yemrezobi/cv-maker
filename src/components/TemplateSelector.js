import { useDispatch } from "react-redux";

import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';
import Template6 from './Template6';

import t1 from './t1.PNG'
import t2 from './t2.PNG'
import t3 from './t3.PNG'
import t4 from './t4.PNG'
import t5 from './t5.PNG'
import t6 from './t6.PNG'



import { SectionContext } from "../contexts/SectionContext";
import {useContext} from "react"

function TemplateSelector(props) {

    const dispatch = useDispatch();

    const replaceTemplate = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            panel : "main"
    
        });
    };

    


    const [sectionStyle, setSectionStyle] = useContext(SectionContext);

    const handleClick = (e) => {
            setSectionStyle({
            ...sectionStyle,
            background: "#fcdcf9",
            fontFamily:"Lucida Handwriting",
            fontSize : "20px",
            color : "#8f0381",
            textAlign: "center",
            opacity: 'None',
            
            });
        replaceTemplate();
        dispatch({
            type: "ADD_TEMPLATE",
            mainSections: Template1.mainSections,
            sideSections: Template1.sideSections
            
        });
    }



    const handleClick2 = (e) => {
        setSectionStyle({
        ...sectionStyle,
        background: "#f7f6c6",
        color : "#363401",
        fontFamily:"tahoma",
        fontSize : "20px",
        textAlign: "left",
        opacity: 'None',


        });
    replaceTemplate();
    dispatch({
        type: "ADD_TEMPLATE",
        mainSections: Template2.mainSections,
        sideSections: Template2.sideSections
        
    });
}


const handleClick3 = (e) => {
    setSectionStyle({
        ...sectionStyle,
        background: "#ffffff",
        color : "#000000",
        fontFamily:"tahoma",
        fontSize : "18px",
        textAlign: "left",
        backgroundSize: "100%",
        backgroundSize : "100%",
        

        });
    replaceTemplate();
    dispatch({
        type: "ADD_TEMPLATE",
        mainSections: Template3.mainSections,
        sideSections: Template3.sideSections
        
    });
}




const handleClick4 = (e) => {
    setSectionStyle({
        ...sectionStyle,
        background: "#639288",
        color : "#000000",
        fontFamily:"Times News Roman",
        fontSize : "14px",
        textAlign: "left",
        opacity: 'None',
        

        });
    replaceTemplate();
    dispatch({
        type: "ADD_TEMPLATE",
        mainSections: Template4.mainSections,
        sideSections: Template4.sideSections
        
    });
}


const handleClick5 = (e) => {
    setSectionStyle({
        ...sectionStyle,
        background: "#d4d1eb",
        color : "#000000",
        fontFamily:"Fantasy",
        fontSize : "22px",
        textAlign: "cntre",
        opacity: 'None',
        

        });
    replaceTemplate();
    dispatch({
        type: "ADD_TEMPLATE",
        mainSections: Template5.mainSections,
        sideSections: Template5.sideSections
        
    });
}



const handleClick6 = (e) => {
    setSectionStyle({
        ...sectionStyle,
        background: "#d1ebe8",
        color : "#000000",
        fontFamily:"Monospace",
        fontSize : "20px",
        textAlign: "centre",
        opacity: 'None',
        

        });
    replaceTemplate();
    dispatch({
        type: "ADD_TEMPLATE",
        mainSections: Template6.mainSections,
        sideSections: Template6.sideSections
        
    });
}






  

    return (
        <div className="select-section box">
            
            <button onClick={handleClick6}>
                <img className="templateIcon" src = {t1} alt="template1"></img>     
           </button>


           <button onClick={handleClick2}>
                <img className="templateIcon" src = {t2} alt="template2"></img>     
           </button>

           <button onClick={handleClick3}>
                <img className="templateIcon" src = {t3} alt="template3"></img>     
           </button>

           <button onClick={handleClick4}>
                <img className="templateIcon" src = {t4} alt="template4"></img>     
           </button>


           <button onClick={handleClick5}>
                <img className="templateIcon" src = {t5} alt="template5"></img>     
           </button>


           <button onClick={handleClick}>
                <img className="templateIcon" src = {t6} alt="template6"></img>     
           </button>


        </div>
    );
}

export default TemplateSelector
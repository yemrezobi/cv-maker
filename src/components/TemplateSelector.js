import { useDispatch } from "react-redux";
import Tampalte1 from './Templates/Tamplate1';
import Tampalte2 from './Templates/Tamplate2';
import Tampalte3 from './Templates/Tamplate3';

import tm1 from './Icons/tm1.png';

function TemplateSelector(props){

    const dispatch = useDispatch();

    const replaceTemplate = (e) => {
        dispatch({
            type: "REMOVE_SECTION",
            section:  <Tampalte1/> ,
            panel : "main"
    
        });
    };
    

    const handleClick1 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section:  <Tampalte1/> ,
            panel : "main"

        });
        
    }

    const handleClick2 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section:<Tampalte2/> ,
            panel : "main"
        });
    }

    const handleClick3 = (e) => {
        replaceTemplate();
        dispatch({
            type: "ADD_SECTION",
            section:<Tampalte3/> ,
            panel : "main"
        });
    }

    return(
        <div className="select-section box">
            <button onClick={handleClick1}>
                <img className="templateIcon" src = {tm1}></img>
            </button>
            <button onClick={handleClick2}>
                <img className="templateIcon" src = {tm1}></img>     
           </button>
           <button onClick={handleClick3}>
                <img className="templateIcon" src = {tm1}></img>     
           </button>


        </div>
    );   
}

export default TemplateSelector
import { createContext } from "react";
import { useState } from "react";


export const CvContext = createContext();

function CvProvider(props) {

    const [cvStyle, setCvStyle] = useState({
        backgroundColor: "#FFFFFF"
    });

    return(
    <CvContext.Provider value={[cvStyle, setCvStyle]}>
        {props.children}
    </CvContext.Provider>
    );
}

export { CvProvider };

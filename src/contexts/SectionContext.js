import { createContext } from "react";
import { useState } from "react";


export const SectionContext = createContext();

function SectionProvider(props) {

    const [sectionStyle, setSectionStyle] = useState({
        backgroundColor: "#32a852",
        fontFamily: "Arial, Helvetica Neue, Helvetica, sans-serif",
        borderStyle: "solid",
        borderWidth: "1px"
    });

    return(
    <SectionContext.Provider value={[sectionStyle, setSectionStyle]}>
        {props.children}
    </SectionContext.Provider>
    );
}

export { SectionProvider };

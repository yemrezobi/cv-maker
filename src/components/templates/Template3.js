import BioSection from "../sections/BioSection"
import Contact from "../sections/Contact"
import LanguagesSection from "../sections/LanguagesSection"
import Name from "../sections/Name"
import Pic from "../sections/Pic"

var Template3 = {
    mainSections: [

        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <Name key={51} id={51} data={{ type: "name" }} />,       
        <LanguagesSection key={52} id={52} data={{ type: "languages" }} />,
        <BioSection key={53} id={53} data={{ type: "bio" }} />,
        <Contact key={54} id={54} data={{ type: "contact" }} />,


      
        
    ],
    sideSections: []
}

export default Template3
import BioSection from "../sections/BioSection"
import Contact from "../sections/Contact"
import EducationSection from "../sections/EducationSection"
import Pic from "../sections/Pic"
import ReferenceSection from "../sections/ReferenceSection"

var Template2 = {
    mainSections: [

        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <ReferenceSection key={51} id={51} data={{ type: "reference" }} />,
        <BioSection key={52} id={52} data={{ type: "bio" }} />,
        <EducationSection key={53} id={53} data={{ type: "education" }} />,        
        <Contact key={54} id={54} data={{ type: "contact" }} />,
      
        
    ],
    sideSections: []
}

export default Template2
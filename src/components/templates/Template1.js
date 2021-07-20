import BioSection from "../sections/BioSection"
import Contact from "../sections/Contact"
import EducationSection from "../sections/EducationSection"
import HobbiesSection from "../sections/HobbiesSection"
import LanguagesSection from "../sections/LanguagesSection"
import Pic from "../sections/Pic"

var Template1 = {
    mainSections: [
        
        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <BioSection key={51} id={51} data={{ type: "bio" }} />,
        <EducationSection key={52} id={52} data={{ type: "education" }} />,
        <LanguagesSection key={53} id={53} data={{ type: "languages" }} />,
        <HobbiesSection key={54} id={54} data={{ type: "hobbies" }} />,
        <Contact key={55} id={55} data={{ type: "contact" }} />,
      
        
    ],
    sideSections: []
}

export default Template1
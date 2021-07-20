import BioSection from "../sections/BioSection"
import EducationSection from "../sections/EducationSection"
import ExperienceSection from "../sections/ExperienceSection"
import HobbiesSection from "../sections/HobbiesSection"
import LanguagesSection from "../sections/LanguagesSection"
import Name from "../sections/Name"
import Pic from "../sections/Pic"
import ReferenceSection from "../sections/ReferenceSection"
import Skill from "../sections/Skill"

var Template4 = {
    mainSections: [

        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <BioSection key={51} id={51} data={{ type: "bio" }} />,  
        <Name key={52} id={52} data={{ type: "name" }} />,   
        <EducationSection key={53} id={53} data={{ type: "education" }} />,
        <ExperienceSection key={54} id={54} data={{ type: "experience" }} />,
        <LanguagesSection key={55} id={55} data={{ type: "languages" }} />,     
        <HobbiesSection key={56} id={56} data={{ type: "hobbies" }} />,
        <ReferenceSection key={57} id={57} data={{ type: "references" }} />,
        <Skill key={58} id={58} data={{ type: "skills" }} />,
      
        
    ],
    sideSections: []
}

export default Template4
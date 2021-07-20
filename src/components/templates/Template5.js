import EducationSection from "../sections/EducationSection"
import ExperienceSection from "../sections/ExperienceSection"
import HobbiesSection from "../sections/HobbiesSection"
import LanguagesSection from "../sections/LanguagesSection"
import Name from "../sections/Name"
import Pic from "../sections/Pic"
import Skill from "../sections/Skill"

var Template5 = {
    mainSections: [

        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <Name key={51} id={51} data={{ type: "name" }} />,      
        <LanguagesSection key={52} id={52} data={{ type: "languages" }} />,     
        <EducationSection key={53} id={53} data={{ type: "education" }} />,
        <ExperienceSection key={54} id={54} data={{ type: "experience" }} />,
        <HobbiesSection key={55} id={55} data={{ type: "hobbies" }} />,
        <Skill key={56} id={56} data={{ type: "skills" }} />,
      
        
    ],
    sideSections: []
}

export default Template5
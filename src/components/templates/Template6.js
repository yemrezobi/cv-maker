import EducationSection from "../sections/EducationSection"
import LanguagesSection from "../sections/LanguagesSection"
import Name from "../sections/Name"
import Pic from "../sections/Pic"
import Skill from "../sections/Skill"

var Template6 = {
    mainSections: [

        <Pic key={50} id={50} data={{ type: "pic" }} />,
        <Name key={51} id={51} data={{ type: "name" }} />,   
        <EducationSection key={52} id={52} data={{ type: "education" }} />,
        <LanguagesSection key={53} id={53} data={{ type: "languages" }} />,     
        <Skill key={54} id={54} data={{ type: "skills" }} />,
      
        
    ],
    sideSections: []
}

export default Template6
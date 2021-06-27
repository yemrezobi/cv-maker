
import { SectionProvider } from '../../contexts/SectionContext'
import EducationSection from "../sections/EducationSection"
import ReferenceSection from "../sections/ReferenceSection"
import ExperienceSection from "../sections/ExperienceSection"
import Skill from "../sections/Skill"
import HobbiesSection from "../sections/HobbiesSection"
import SectionTest from "../sections/SectionTest"
import LanguagesSection from "../LanguagesSection"
import BioSection from "../sections/BioSection";
import Name from "../sections/Name";
import Contact from "../sections/Contact";
import { useDispatch } from "react-redux";
import Section from "../Section";
import SectionSelector from '../SectionSelector'

function Tempalte2() {

    return (
        <div>
            <Name />
            <BioSection />
            <Skill />
            <HobbiesSection />
            <Contact />
            <ExperienceSection />
        </div>
    );
}

export default Tempalte2;
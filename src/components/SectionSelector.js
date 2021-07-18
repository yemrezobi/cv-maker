import { useState } from "react";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import { useEffect } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";
import EducationSection from "./sections/EducationSection";
import ReferenceSection from "./sections/ReferenceSection";
import ExperienceSection from "./sections/ExperienceSection";
import Skill from "./sections/Skill";
import HobbiesSection from "./sections/HobbiesSection";
import SectionTest from "./sections/SectionTest";
import LanguagesSection from "./LanguagesSection";
import BioSection from "./sections/BioSection";
import Name from "./sections/Name";
import Contact from "./sections/Contact";
import Pic from "./sections/Pic";

function SectionSelector(props) {
    const [localizationContext, ] = useContext(LocalizationContext);
    const [count, setCount] = useState(0);
    const [localization, setLocalization] = useState(localizationContext.en);
    const dispatch = useDispatch();

    const addEducation = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <EducationSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addTest = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <SectionTest key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addReference = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ReferenceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addExperience = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <ExperienceSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addSkillsGroup = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Skill key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addHobbies = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <HobbiesSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addLanguages = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <LanguagesSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addBio = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <BioSection key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addName = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Name key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    const addContact = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Contact key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }

    const addPic = (e) => {
        dispatch({
            type: "ADD_SECTION",
            section: <Pic key={count} id={count} />,
            panel: "main"
        });
        setCount(count + 1);
    }
    useEffect(() => {
        switch (localizationContext.selectedLanguage) {
            case "en":
                setLocalization(localizationContext.en);
                break;
        
            case "de":
                setLocalization(localizationContext.de);
                break;

            case "tr":
                setLocalization(localizationContext.tr);
                break;

            default:
                setLocalization(localizationContext.en);
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localizationContext.selectedLanguage]);

    return (
        <div className="select-section box">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button className="sectionBut" onClick={addEducation}>
                                {localization.sectionSelector_addEducation}
                            </button>
                        </td>
                        <td>
                            <button className="sectionBut" onClick={addReference}>
                                {localization.sectionSelector_addReferences}
                            </button>
                        </td>
                        <td>
                            <button className="sectionBut" onClick={addExperience} >
                                {localization.sectionSelector_addExperience}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="sectionBut" onClick={addSkillsGroup}>
                                {localization.sectionSelector_addSkills}
                            </button>
                        </td>
                        <td>
                            <button className="sectionBut" onClick={addTest}>
                                Add Test Section
                            </button>
                        </td>
                        <td>
                            <button className="sectionBut" onClick={addHobbies}>
                                {localization.sectionSelector_addHobbies}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className="sectionBut" onClick={addLanguages}>
                                {localization.sectionSelector_addLanguages}
                            </button>
                        </td>
                        <td>
                            <button className="sectionBut" onClick={addBio}>
                                {localization.sectionSelector_addBio}
                            </button>
                        </td>
                        <td>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default SectionSelector





import { SectionProvider } from '../../contexts/SectionContext'
import EducationSection from "../sections/EducationSection"
import ReferenceSection from "../sections/ReferenceSection"
import ExperienceSection from "../sections/ExperienceSection"
import Skill from "../sections/Skill"
import HobbiesSection from "../sections/HobbiesSection"
import SectionTest from "../sections/SectionTest"
import LanguagesSection from "../sections/LanguagesSection"
import BioSection from "../sections/BioSection";
import Name from "../sections/Name";
import Contact from "../sections/Contact";
import { useDispatch } from "react-redux";
import Section from "../Section";
import SectionSelector from '../SectionSelector'
import { useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import React from "react"

function Tempalte2() {
    const ref = useRef();
    const mainPanel = useSelector(state => state.sections.mainPanel);
    const sidePanel = useSelector(state => state.sections.sidePanel);
    const side = useSelector(state => state.sections.side);
    const dispatch = useDispatch();
    const dragOver = (e) => {
        e.preventDefault();
    }
    useEffect(() => {
        if (sidePanel.length === 0) {
            dispatch({
                type: "CHANGE_SIDE",
                side: null
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(sidePanel)])

    /* return (
        <React.Fragment >

            <Name />
            <BioSection />
            <ExperienceSection />
            <HobbiesSection />
            <Contact />
            <Skill />

        </React.Fragment>
    ); */

    return (
        [
            <Name />,
            <BioSection />,
            <ExperienceSection />,
            <HobbiesSection />,
            <Contact />,
            <Skill />]
    );
}

export default Tempalte2;
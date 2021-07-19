import { createContext } from "react";
import { useState } from "react";


export const LocalizationContext = createContext();

function LocalizationProvider(props) {

    const [localization, setLocalization] = useState({
        selectedLanguage: "en",
        en: {
            styleEditor_backgroundColor: "Document Background Color",
            styleEditor_baseColor: "Section Base Color",
            styleEditor_transparentBackground: "Transparent Background",
            styleEditor_randomizeColor: "Randomize Color",
            styleEditor_textFont: "Text Font",
            styleEditor_borderStyle: "Border Style",
            styleEditor_borderWidth: "Border Width",
            styleEditor_verticalMargin: "Vertical Margin",
            styleEditor_horizontalMargin: "Horizontal Margin",
            styleEditor_language: "Language",
            cvEditor_print: "Print this out!",
            sectionSelector_addEducation: "Add Education",
            sectionSelector_addReferences: "Add References",
            sectionSelector_addExperience: "Add Experience",
            sectionSelector_addSkills: "Add Skills Group",
            sectionSelector_addHobbies: "Add Hobbies",
            sectionSelector_addLanguages: "Add Languages",
            sectionSelector_addBio: "Add Bio",
            sectionSelector_addPic: "Add Picture",
            sectionSelector_addContact: "Add Contact",
            sectionSelector_addName: "Add Name"
        },
        de: {
            styleEditor_backgroundColor: "Dokument Hintergrund Farbe",
            styleEditor_baseColor: "Basis Teilfarbe",
            styleEditor_transparentBackground: "Transparent Hintergrund",
            styleEditor_randomizeColor: "Farbe Randomisieren",
            styleEditor_textFont: "Text Schriftart",
            styleEditor_borderStyle: "Grenzstil",
            styleEditor_borderWidth: "Grenzbreite",
            styleEditor_verticalMargin: "Senkrecht Rand",
            styleEditor_horizontalMargin: "Waagerecht Rand",
            styleEditor_language: "Sprache",
            cvEditor_print: "Ausdrucken!",
            sectionSelector_addEducation: "Ausbildung Hinzufügen",
            sectionSelector_addReferences: "Referenz Hinzufügen",
            sectionSelector_addExperience: "Erfahrung Hinzufügen",
            sectionSelector_addSkills: "Fähigkeiten Hinzufügen",
            sectionSelector_addHobbies: "Hobbys Hinzufügen",
            sectionSelector_addLanguages: "Sprachen Hinzufügen",
            sectionSelector_addBio: "Bio Hinzufügen",
            sectionSelector_addPic: "Bild Hinzufügen",
            sectionSelector_addContact: "Kontakt Hinzufügen",
            sectionSelector_addName: "Name Hinzufügen"
        },
        tr: {
            styleEditor_backgroundColor: "Belge Arka Plan Rengi",
            styleEditor_baseColor: "Bölüm Temel Rengi",
            styleEditor_transparentBackground: "",
            styleEditor_randomizeColor: "Şeffaf Arka Plan",
            styleEditor_textFont: "Yazı Tipi",
            styleEditor_borderStyle: "Kenar Stili",
            styleEditor_borderWidth: "Kenar Genişliği",
            styleEditor_verticalMargin: "Dikey Kenar Boşluğu",
            styleEditor_horizontalMargin: "Yatay Kenar Boşluğu",
            styleEditor_language: "Dil",
            cvEditor_print: "Yazdır!",
            sectionSelector_addEducation: "Eğitim Ekle",
            sectionSelector_addReferences: "Referans Ekle",
            sectionSelector_addExperience: "Deneyim Ekle",
            sectionSelector_addSkills: "Beceri Ekle",
            sectionSelector_addHobbies: "Hobi Ekle",
            sectionSelector_addLanguages: "Dil Ekle",
            sectionSelector_addBio: "Biyografi Ekle",
            sectionSelector_addPic: "Resim Ekle",
            sectionSelector_addContact: "İletişim Ekle",
            sectionSelector_addName: "İsim Ekle"
        }
    });

    return(
    <LocalizationContext.Provider value={[localization, setLocalization]}>
        {props.children}
    </LocalizationContext.Provider>
    );
}

export { LocalizationProvider };

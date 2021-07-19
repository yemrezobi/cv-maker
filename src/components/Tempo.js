import { SectionContext } from "../contexts/SectionContext";
import { useContext } from "react";



function Tempo(){
const [sectionStyle, setSectionStyle] = useContext(SectionContext);


setSectionStyle({
  ...sectionStyle,
  backgroundColor: 'red',
  fontFamily: 'arial',
  fontColor: 'blue'
});
}

export default Tempo
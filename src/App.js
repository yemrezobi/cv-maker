import SectionEditor from './components/SectionEditor'
import StyleEditor from './components/StyleEditor'
import CVEditor from './components/CVEditor'
import SectionSelector from './components/SectionSelector'
import TemplateSelector from './components/TemplateSelector'

function App() {
    return (
        <div className="container">
            <div className="side-content">
                <SectionEditor/>
                <StyleEditor/>
            </div>
            <CVEditor/>
            <div className="side-content">
                <SectionSelector/>
                <TemplateSelector/>
            </div>
        </div>
    );
}

export default App;

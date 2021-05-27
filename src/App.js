import SectionEditor from './components/SectionEditor'
import StyleEditor from './components/StyleEditor'
import CVEditor from './components/CVEditor'
import SectionSelector from './components/SectionSelector'
import TemplateSelector from './components/TemplateSelector'
import { SectionProvider } from './contexts/SectionContext'

function App() {
    return (
        <SectionProvider>
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
        </SectionProvider>
    );
}

export default App;

import SectionEditor from './components/SectionEditor'
import StyleEditor from './components/StyleEditor'
import CVEditor from './components/CVEditor'
import SectionSelector from './components/SectionSelector'
import TemplateSelector from './components/TemplateSelector'
import { SectionProvider } from './contexts/SectionContext'
import { CvProvider } from './contexts/CvContext'
import { LocalizationProvider } from './contexts/LocalizationContext'

function App() {
    return (
        <LocalizationProvider>
            <CvProvider>
                <SectionProvider>
                    <div className="container">
                        <div className="side-content">
                            <SectionEditor />
                            <StyleEditor />
                        </div>
                        <CVEditor />
                        <div className="side-content">
                            <SectionSelector />
                            <TemplateSelector />
                        </div>
                    </div>
                </SectionProvider>
            </CvProvider>
        </LocalizationProvider>
    );
}

export default App;

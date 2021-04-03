import SectionEditor from './components/SectionEditor'
import TextEditor from './components/TextEditor'
import CVEditor from './components/CVEditor'
import SectionSelector from './components/SectionSelector'
import TemplateSelector from './components/TemplateSelector'

function App() {
  return (
      <div className="container">
        <div className="side-content">
          <SectionEditor/>
          <TextEditor/>
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

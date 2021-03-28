import SectionEditor from './components/SectionEditor'
import TextEditor from './components/TextEditor'
import CVEditor from './components/CVEditor'
import SectionSelector from './components/SectionSelector'
import TemplateSelector from './components/TemplateSelector'

function App() {
  return (
    <div class="container">
      <div class="side-content">
        <SectionEditor />
        <TextEditor />
      </div>
      <CVEditor />
      <div class="side-content">
        <SectionSelector />
        <TemplateSelector />
      </div>
    </div>
  );
}

export default App;

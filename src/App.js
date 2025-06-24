import './App.css';
import AuthorSection from './components/AuthorSection';
import IntroSection from './components/IntroSection';
import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <div className="App">
      <div id="main">
        <AuthorSection />
        <IntroSection />
        <ProjectsList />
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CustomCursor from './components/CustomCursor';
import CaseStudyDetail from './pages/CaseStudyDetail';
function App() {
  return (
    <>
    <CustomCursor />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </>
  );
}

export default App;

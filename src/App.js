import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CustomCursor from './components/CustomCursor';
import ActiveFarmersCaseStudy from './pages/case_studies/ActiveFarmersCaseStudy';
import HerPride from './pages/case_studies/HerPride';
import ScrollToTop from './components/ScrollTop';
import CaseStudiesList from './components/CaseStudiesList';
function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/case-study" element={<CaseStudiesList />} />
          <Route path="/case-study/afc" element={<ActiveFarmersCaseStudy />} />
          <Route path="/case-study/her-pride" element={<HerPride />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

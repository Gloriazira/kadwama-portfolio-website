import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CustomCursor from './components/CustomCursor';
function App() {
  return (
    <>
    <CustomCursor />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

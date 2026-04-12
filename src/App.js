import './App.css';
import { Route, Routes } from 'react-router-dom';


//PAGES


//COMPONENTS
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTransition from './components/PageTransition';
import Redirect from './components/redirect.jsx';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <PageTransition />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactcard' element={<ContactCard />} />
        <Route path='/dist/redirect.html' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
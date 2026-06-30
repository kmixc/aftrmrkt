import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from './Pages/Home';
import Films from './Pages/Films';
import Spotlight from './Pages/Spotlight';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

//COMPONENTS
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import PageTransition from './Components/PageTransition';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <PageTransition>
            {(loc) => (
              <>
                <Routes location={loc}>
                  <Route path='/' element={<Home />} />
                  <Route path='/films' element={<Films />} />
                  <Route path='/spotlight' element={<Spotlight />} />
                  <Route path='/gallery' element={<Gallery />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            )}
          </PageTransition>
        </Nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
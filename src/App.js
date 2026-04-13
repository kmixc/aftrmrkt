import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

//COMPONENTS
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Cursor from './Components/Cursor';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Nav>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Nav>
    </div>
  );
}

export default App;
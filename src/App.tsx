import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurProjects from './pages/OurProjects';
import OurGallery from './pages/OurGallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import AdminPanel from './pages/AdminPanel';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/gallery" element={<OurGallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

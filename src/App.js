import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Car from './pages/Car/Car';
import CarsList from './pages/CarsList/CarsList'
import Footer from './components/Footer/Footer';
import UserProfile from './pages/UserProfile/UserProfile';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cars/:carId" element={<Car />} />
          <Route path="/carsList" element={<CarsList />} />
          <Route path="/carsList/:type" element={<CarsList />} />
          <Route path="/user/:page" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

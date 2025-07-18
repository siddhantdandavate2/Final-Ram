import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import usePageLoader from './hooks/usePageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import Information from './pages/Information';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

function App() {
  const loading = usePageLoader();

  return (
    <div className="min-h-screen flex flex-col relative">
      <Loader loading={loading} />
      <ScrollToTop />
      <div className={`transition-all duration-300 ease-in-out ${
        loading ? 'opacity-50 pointer-events-none' : 'opacity-100'
      }`}>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/information" element={<Information />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
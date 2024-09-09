import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EducationPage from './pages/EducationPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import GlobalStyle from '../styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <EducationPage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;

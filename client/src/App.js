import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimony from './components/Testimony';

// below is our styling
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Testimony/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
}

export default App;

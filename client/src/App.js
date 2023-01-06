import styled from 'styled-components';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

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
    </Container>
  );
}

export default App;

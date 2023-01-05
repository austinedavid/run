import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';

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
    </Container>
  );
}

export default App;

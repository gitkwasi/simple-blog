import {Container} from 'react-bootstrap'
import BlogEntry from './components/BlogEntry'

function App() {
  return (
    <div className="App">
      <Container className='mt-5' >
        <h1 style={{textAlign:"center"}}> Welcome to the Blog!</h1>
        <BlogEntry/>
      </Container>

    </div>
  );
}

export default App;


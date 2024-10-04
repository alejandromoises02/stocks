import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Action from './views/action';
import NotFound from './views/notFound';
import { Container } from './views/styles';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/action" element={<Action />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

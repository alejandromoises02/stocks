import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Action from './views/action';
import NotFound from './views/notFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action/:id" element={<Action />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

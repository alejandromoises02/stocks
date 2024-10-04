import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Action from './views/action';
import NotFound from './views/notFound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<Action />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

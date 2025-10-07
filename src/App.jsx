import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx';
import Navbar from './components/navigation/Navbar.jsx';
import FullScreenNav from './components/navigation/FullScreenNav.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;



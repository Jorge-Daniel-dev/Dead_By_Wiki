import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../Index'; // Tu página principal
import CreateKiller from './createKiller'; 
import CreateSurvivor from './createSurvivor'; 
import CreatePerk from './CreatePerk';
import AllKillers from './AllKillers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* La ruta raíz "/" muestra tu Index */}
        <Route path="/" element={<Index />} />
        {/* Estas rutas muestran tus formularios */}
        <Route path="/crear-killer" element={<CreateKiller />} />
        <Route path="/crear-superviviente" element={<CreateSurvivor />} />
        <Route path='/CreatePerk' element={<CreatePerk/>}/>
        <Route path='/AllKillers' element={<AllKillers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
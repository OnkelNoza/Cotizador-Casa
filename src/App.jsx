import { Routes, Route } from 'react-router';
import Cotizacion from './paginas/Cotizaciones';
import MainLayout from './componentes/MainLayout';
import Historial from './paginas/Historial'; 

function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element= {<Cotizacion />} />
          <Route path='Historial' element={<Historial />} />
        </Route>  
      </Routes>

  );
}

export default App

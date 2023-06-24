
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import ProductDetail from './components/ProductDetail';
import Home from './pages/Home';

import Shirt from './pages/Shirt';
import Tshirt from './pages/Tshirt';
import Jeans from './pages/Jeans';

import Shorts from './pages/Shorts';
import Kurta from './pages/Kurta';
import JacketDetail from './pages/JacketDetail';
import ShirtDetail from './pages/ShirtDetail';
import TshirtDetail from './pages/TshirtDetail';
import JeansDetail from './pages/JeansDetail';
import KurtaDetail from './pages/KurtaDetail';
import Jackets from './pages/Jackets';



function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/detail' element={<ProductDetail/>} exact />
        
          <Route path='/shirt' element={<Shirt/>} />
          <Route path='/shirt/:id' element={<ShirtDetail/>} exact />
          <Route path='/tshirt' element={<Tshirt/>} />
          <Route path='/tshirt/:id' element={<TshirtDetail/>} exact />
          <Route path='/jeans' element={<Jeans/>} />
          <Route path='/jeans/:id' element={<JeansDetail/>} exact />
          <Route path='/jacket' element={<Jackets/>} />
          <Route path='/jacket/:id' element={<JacketDetail/>} exact />
          <Route path='/shorts' element={<Shorts/>} />
          <Route path='/kurta' element={<Kurta/>} />
          <Route path='/kurta/:id' element={<KurtaDetail/>} exact />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;

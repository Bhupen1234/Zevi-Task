

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import { Home } from '@mui/icons-material';
 


function App() {
   

  return (
    <div className="App">
      <Routes>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/' element={<HomePage/>}/>

      </Routes>
 


    </div>
  );
}

export default App;

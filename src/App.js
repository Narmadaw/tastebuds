import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';
import CategoryPage from './pages/CategoryPage/CategoryPage';



function App() {
  
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/:category' element={ <CategoryPage />}/>
      </Routes>
      
    
    </BrowserRouter>
    
    
    
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Header from './components/Header/Header';



function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/:category' element={ <CategoryPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

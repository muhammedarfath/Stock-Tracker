import './App.css';
import Home from './Home/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StockTracker from './StockTracker/StockTracker';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/stocktracker' Component={StockTracker}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

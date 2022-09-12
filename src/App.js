import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';

// page
import Home from './page/Home';
import Basket from './page/Basket';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

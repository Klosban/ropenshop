import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

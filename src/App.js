import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchases from './Pages/Purchase/Purchases';
import Navbar from './Pages/Shared/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="portfolio" element={<Portfolio></Portfolio>} />
        <Route path="purchase" element={<Purchases></Purchases>} />

      </Routes>
    </div>
  );
}

export default App;

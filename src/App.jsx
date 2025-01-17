import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Product from './Components/Product';
import Logos from './Components/Logos';
import Footer from './Components/Footer';
import Generator from './Components/Generator';
import ExplorePalette from './Components/ExplorePalette';
import Visualize from './Components/visualize';
import 'antd/dist/reset.css';
import Categories from './Components/Categories';

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation(); // Get the current route

  return (
    <>
      <Navbar />
      <Routes>
        {/* Define routes for different pages */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Product />
              <Logos />
            </>
          }
        />
        <Route path="/generator" element={<Generator />} />
        <Route path="/explore" element={<ExplorePalette />} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
      {/* Render Footer only if not on the '/generator' or '/explore' routes */}
      {location.pathname === '/' &&   <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

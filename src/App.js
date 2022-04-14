import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SorterInfo from './pages/SorterInfo';
import BFInfo from './pages/BFInfo';
import MMForecast from './pages/MMForecast';
import MSort from './pages/MSort';
import RegTable from './pages/RegTable';
import FarmInfo from './pages/FarmInfo';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* page 1 */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* page 2 */}
          <Route path="/sorterinfo" element={<SorterInfo />} />
          {/* page 3 */}
          <Route path="/bfinfo" element={<BFInfo />} />
          {/* page 4 */}
          <Route path="/mmforecast" element={<MMForecast />} />
          {/* page 5 */}
          <Route path="/msort" element={<MSort />} />
          {/* page 6 */}
          <Route path="/regtable" element={<RegTable />} />
          {/* page 7 */}
          <Route path="/farminfo" element={<FarmInfo />} />
          {/* page 8 */}
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

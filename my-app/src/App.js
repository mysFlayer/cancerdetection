import './App.css';
import Main from './components/Form';
import SuccessPage from './components/Success';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<Main />}/>
        <Route path = "/success" element={<SuccessPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

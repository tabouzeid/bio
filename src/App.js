import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import WorkPage from './components/WorkPage'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/TodoPage';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;

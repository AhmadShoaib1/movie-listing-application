import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import StoryList from './components/StoryList';
import StoryDetails from './components/StoryDetail';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/ask-stories" element={<StoryList category="askstories" />} />
        <Route path="/best-stories" element={<StoryList category="beststories" />} />
        <Route path="/job-stories" element={<StoryList category="jobstories" />} />
        <Route path="/new-stories" element={<StoryList category="newstories" />} />
        <Route path="/show-stories" element={<StoryList category="showstories" />} />
        <Route path="/top-stories" element={<StoryList category="topstories" />} />
        <Route path="/leaders" element={<LeaderSearch />} />
        <Route path="/story/:id" element={<StoryDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App

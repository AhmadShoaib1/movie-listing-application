import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import StoryList from './components/StoryList';
import StoryDetails from './components/StoryDetail';
import LeaderSearch from './components/LeaderSearch';

const queryClient = new QueryClient();

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar />
      <div className="bg-red-200 p-6 shadow-xl rounded-2xl m-4 text-black text-lg">
  ✅ Tailwind is finally working.
</div>

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
    </QueryClientProvider>
    
  );
}

export default App

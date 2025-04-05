import { useState } from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        <button className="hover:underline">Trending</button>
        <button className="hover:underline">Top Rated</button>
        <button className="hover:underline">Action</button>
        <button className="hover:underline">Animation</button>
        <button className="hover:underline">Comedy</button>
      </nav>
      <div className="p-6">
        <h1 className="text-2xl font-bold">🎬 Movie Listings Starter Ready!</h1>
      </div>
    </div>
  );
}

export default App;

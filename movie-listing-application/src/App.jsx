import { useState } from "react";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import MovieList from "./components/MovieList";
import { Routes, Route, NavLink } from "react-router-dom";

const queryClient = new QueryClient();
const categories = {
  trending: "trending/all/week",
  topRated: "movie/top_rated",
  action: "discover/movie?with_genres=28",
  animation: "discover/movie?with_genres=16",
  comedy: "discover/movie?with_genres=35",
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <nav className="bg-gray-900 text-white p-4 flex gap-4">
        {Object.keys(categories).map((key) => (
          <NavLink
            key={key}
            to={`/${key}`}
            className={({ isActive }) =>
              isActive ? 'underline text-blue-300' : 'hover:underline'
            }
          >
            {key.replace('_', ' ').toUpperCase()}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route
          path="/"
          element={<MovieList type="trending" endpoint={categories.trending} />}
        />
        {Object.entries(categories).map(([key, endpoint]) => (
          <Route
            key={key}
            path={`/${key}`}
            element={<MovieList type={key} endpoint={endpoint} />}
          />
        ))}
      </Routes>
    </QueryClientProvider>
  )
}

export default App

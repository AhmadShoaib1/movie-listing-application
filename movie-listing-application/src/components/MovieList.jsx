import { useQuery } from '@tanstack/react-query'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

function MovieList({ type, endpoint }) {
  const joinChar = endpoint.includes('?') ? '&' : '?'
  const url = `${BASE_URL}/${endpoint}${joinChar}api_key=${API_KEY}&language=en-US`

  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: async () => {
      const res = await fetch(url)
      const json = await res.json()
      console.log(`[${type.toUpperCase()}] Fetch:`, url)
      console.log(`[${type.toUpperCase()}] Response:`, json)
      return json.results?.slice(0, 10)
    },
  })

  if (isLoading) return <p className="p-4">Loading...</p>
  if (error) return <p className="text-red-500 p-4">Error loading movies.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
      {data.map((movie) => (
        <div key={movie.id} className="bg-white shadow-md rounded-xl overflow-hidden">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://via.placeholder.com/500x750?text=No+Image'
            }
            alt={movie.title || movie.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-3">
            <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
            <p className="text-sm text-gray-600">{movie.release_date || 'N/A'}</p>
            <p className="text-sm text-gray-700 line-clamp-3">
              {movie.overview || 'No description available.'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieList

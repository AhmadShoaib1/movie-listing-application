import { useState, useEffect } from "react";

const knownUsers = ["pg", "dang", "sama", "tptacek", "jl"];

const LeaderSearch = () => {
  const [userId, setUserId] = useState("");
  const [leaderInfo, setLeaderInfo] = useState(null);
  const [error, setError] = useState("");

  const fetchLeaderData = async (id) => {
    try {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`);
      const data = await res.json();
      if (!data) {
        setError("User not found.");
        setLeaderInfo(null);
      } else {
        setLeaderInfo(data);
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch user data.");
      setLeaderInfo(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId.trim() !== "") {
      fetchLeaderData(userId.trim());
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Leader Search</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full p-2 border rounded-md"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select a known user</option>
          {knownUsers.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {leaderInfo && (
        <div className="mt-6 border p-4 rounded shadow bg-white">
          <h3 className="text-xl font-semibold mb-2">{leaderInfo.id}</h3>
          <p>Karma: {leaderInfo.karma}</p>
          <p>Created: {new Date(leaderInfo.created * 1000).toLocaleString()}</p>
          <p className="mt-2 font-medium">Submitted Items:</p>
          <ul className="list-disc list-inside text-sm text-blue-700">
            {leaderInfo.submitted.slice(0, 5).map((id) => (
              <li key={id}>
                <a
                  href={`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Item {id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeaderSearch;

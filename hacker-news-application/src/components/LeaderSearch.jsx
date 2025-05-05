import { useState } from 'react';

// Hardcoded leader data
const leaders = [
  {
    id: "jl",
    name: "John L.",
    karma: 5000,
    created: 1293891200, // Unix timestamp for the account creation date
    about: "John is a software developer and Hacker News contributor.",
    submitted: [1, 2, 3, 4, 5]
  },
  {
    id: "pg",
    name: "Paul G.",
    karma: 2500,
    created: 1320766400,
    about: "Paul is a data scientist who loves contributing to open-source.",
    submitted: [6, 7, 8, 9]
  },
  {
    id: "ab",
    name: "Alice B.",
    karma: 3000,
    created: 1428240000,
    about: "Alice is a tech enthusiast and a regular contributor on Hacker News.",
    submitted: [10, 11, 12, 13, 14]
  },
];

function LeaderSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeader, setSelectedLeader] = useState(null);

  // Filter leaders based on search term
  const filteredLeaders = leaders.filter((leader) =>
    leader.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle leader selection
  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader);
  };

  return (
    <div>
      <h1>Leader Search</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a leader"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      />
      
      {/* Display filtered leader list */}
      {filteredLeaders.length > 0 ? (
        <ul>
          {filteredLeaders.map((leader) => (
            <li
              key={leader.id}
              onClick={() => handleLeaderClick(leader)}
              className="cursor-pointer hover:text-blue-500"
            >
              {leader.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No leaders found.</p>
      )}

      {/* Display selected leader's details */}
      {selectedLeader && (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold">{selectedLeader.name}</h2>
          <p><strong>Id:</strong> {selectedLeader.id}</p>
          <p><strong>Karma:</strong> {selectedLeader.karma}</p>
          <p><strong>About:</strong> {selectedLeader.about}</p>
          <p><strong>Created:</strong> {new Date(selectedLeader.created * 1000).toLocaleDateString()}</p>
          <p><strong>Submitted:</strong></p>
          <ul>
            {selectedLeader.submitted.slice(0, 5).map((id) => (
              <li key={id}>
                <a href={`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`} target="_blank" rel="noopener noreferrer">
                  {`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LeaderSearch;

import { Link } from "react-router-dom";

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around">
        <li><Link to="/ask-stories">Ask Stories</Link></li>
        <li><Link to="/best-stories">Best Stories</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;


import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const favoriteCount = useSelector(state => state.movies.favorites.length);

  return (
    <nav className="bg-gray-900 p-7 flex justify-between items-center">
      <div className="text-white text-3xl font-bold">Movie App</div>
      <div>
        {location.pathname === '/' && (
          <Link to="/favorites" className="bg-blue-500 text-white px-5 py-2 rounded relative">
            Favorites
            {favoriteCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {favoriteCount}
              </span>
            )}
          </Link>
        )}
        {location.pathname === '/favorites' && (
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Back to Movies
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;



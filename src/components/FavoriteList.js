
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFavorite } from '../store/moviesSlice';
import { FaArrowUp } from 'react-icons/fa';

function FavouriteList() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.movies.favorites);
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  const handleFavorite = (movie) => {
    dispatch(removeFavorite(movie));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAbsoluteImageUrl = (url) => {
    const absoluteUrl = url.startsWith('http') ? url : `${process.env.REACT_APP_BASE_URL}/${url}`;
    console.log('Image URL:', absoluteUrl);
    return absoluteUrl;
  };

  return (
    <div className="relative bg-gray-800 min-h-screen p-4 flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-2xl font-bold">Favourite Movies</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to Movies
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map(movie => (
            <div
              key={movie.id}
              className="card bg-gray-700 p-4 rounded shadow-lg transform transition hover:scale-105 cursor-pointer flex flex-col justify-between"
              onClick={() => handleCardClick(movie.imdb_url)}
            >
              <img src={getAbsoluteImageUrl(movie.image)} alt={movie.movie} className="w-full h-36 object-cover rounded-t" />
              <div className="mt-2 text-white flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold">{movie.movie}</h3>
                  <p>Rating: {movie.rating}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavorite(movie);
                  }}
                  className="mt-2 px-4 py-2 rounded bg-red-500 text-white self-end"
                >
                  Unfavorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-7 rounded-full shadow-xl"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default FavouriteList;

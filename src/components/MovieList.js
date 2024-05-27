
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, addFavorite, removeFavorite } from '../store/moviesSlice';
import { FaArrowUp } from 'react-icons/fa';

function MovieList() {
  const dispatch = useDispatch();
  const { movies, favorites, status, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleFavorite = (movie) => {
    if (favorites.find(fav => fav.id === movie.id)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAbsoluteImageUrl = (url) => {
    const absoluteUrl = url.startsWith('http') ? url : `${process.env.REACT_APP_BASE_URL}/${url}`;
    console.log('Image URL:', absoluteUrl);
    return absoluteUrl;
  };

  if (status === 'loading') {
    return <div className="text-white">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative bg-gray-800 min-h-screen p-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map(movie => (
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
                className={`mt-2 px-4 py-2 rounded ${favorites.find(fav => fav.id === movie.id) ? 'bg-red-500' : 'bg-green-500'} text-white self-end`}
              >
                {favorites.find(fav => fav.id === movie.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
        ))}
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

export default MovieList;




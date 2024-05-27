// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieList from './components/MovieList';
// import FavoriteList from './components/FavoriteList';

// function App() {
//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<MovieList />} />
//           <Route path="/favorites" element={<FavoriteList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieList from './components/MovieList';
// import FavoriteList from './components/FavoriteList';

// function App() {
//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<MovieList />} />
//           <Route path="/favorites" element={<FavoriteList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MovieList from './components/MovieList';
// import FavoriteList from './components/FavoriteList';

// function App() {
//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <Routes>
//           <Route path="/" element={<MovieList />} />
//           <Route path="/favorites" element={<FavoriteList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';

import Navbar from './components/Navbar';
import FavoriteList from './components/FavoriteList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<FavoriteList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



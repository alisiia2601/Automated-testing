import React, { useState } from "react";

const MovieRating = ({ name }) => {
  console.log("movie rating name:", name);
  const [movie1Rating, setMovie1Rating] = useState(0);
  const [movie2Rating, setMovie2Rating] = useState(0);
  const [movie3Rating, setMovie3Rating] = useState(0);

  const rateMovie = (movieNumber, newRating) => {
    switch (movieNumber) {
      case 1:
        setMovie1Rating(newRating);
        break;
      case 2:
        setMovie2Rating(newRating);
        break;
      case 3:
        setMovie3Rating(newRating);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {name && <p>Welcome {name}!</p>}
      <div>
        <div>
          <h3>Movie 1</h3>
          {/* Placeholder Movie 1 UI elements */}
          <img src="movie1-poster.jpg" alt="Movie 1 Poster" />
          <label>
            Rate Movie 1:
            <input
              type="number"
              value={movie1Rating}
              onChange={(e) => rateMovie(1, parseInt(e.target.value, 10))}
              min="0"
              max="5"
            />
          </label>
          <p>Rating: {movie1Rating}</p>
        </div>

        <div>
          <h3>Movie 2</h3>
          {/* Placeholder Movie 2 UI elements */}
          <img src="movie2-poster.jpg" alt="Movie 2 Poster" />
          <label>
            Rate Movie 2:
            <input
              type="number"
              value={movie2Rating}
              onChange={(e) => rateMovie(2, parseInt(e.target.value, 10))}
              min="0"
              max="5"
            />
          </label>
          <p>Rating: {movie2Rating}</p>
        </div>

        <div>
          <h3>Movie 3</h3>
          {/* Placeholder Movie 3 UI elements */}
          <img src="movie3-poster.jpg" alt="Movie 3 Poster" />
          <label>
            Rate Movie 3:
            <input
              type="number"
              value={movie3Rating}
              onChange={(e) => rateMovie(3, parseInt(e.target.value, 10))}
              min="0"
              max="5"
            />
          </label>
          <p>Rating: {movie3Rating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieRating;

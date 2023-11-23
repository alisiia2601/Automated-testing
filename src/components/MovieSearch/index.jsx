import React, { useState } from "react";

const MovieSearch = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(searchTerm);
    console.log("movie search term:", searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search for a movie:
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter movie title"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default MovieSearch;

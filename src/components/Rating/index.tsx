import React from 'react';

interface CalculateAverageRatingProps {
  inceptionRating: number;
  matrixRating: number;
  interstellarRating: number;
}

const CalculateAverageRating: React.FC<CalculateAverageRatingProps> = ({
  inceptionRating,
  matrixRating,
  interstellarRating,
}) => {
  const averageRating = (inceptionRating + matrixRating + interstellarRating) / 3;

  return (
    <div>
      {averageRating > 0 && <h2>Average Rating: {averageRating.toFixed(2)}</h2>}
      {averageRating === 5 && <p>All movies have a perfect score!</p>}
    </div>
  );
};

export default CalculateAverageRating;

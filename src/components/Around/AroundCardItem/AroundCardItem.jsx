import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import * as S from './AroundCardItem.style';

const AroundCardItem = ({ movie }) => {
  return (
    <S.GridItem key={movie.id}>
      <Link to={`/detail/${movie.id}`}>
        <S.Card backdropPath={movie.backdropPath} />
        <S.Content>
          <span>{movie.title}</span>
          <StarRatings
            rating={movie.rating / 2}
            starRatedColor="#ffda33"
            numberOfStars={5}
            starDimension="30px"
            startSpacing="2px"
          />
        </S.Content>
      </Link>
    </S.GridItem>
  );
};

AroundCardItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    backdropPath: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default AroundCardItem;

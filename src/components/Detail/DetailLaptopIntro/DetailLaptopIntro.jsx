import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import mediumZoom from 'medium-zoom';
import {
  Background,
  LikeIcon,
  DislikeIcon,
} from 'components/Detail/DetailIntro/DetailIntro.style';
import { Section } from 'components/Detail/Detail.style';
import { Wrapper } from 'styles/variables';
import * as S from './DetailLaptopIntro.style';

const DetailLaptopIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isLike, setIsLike] = useState(
    localStorage.getItem(result.id) !== null,
  );
  const zoom = mediumZoom({ background: 'rgba(0,0,0,0.8)', margin: 30 });
  const {
    id,
    title,
    posterPath,
    backdropPath,
    releaseDate,
    rating,
    genres,
    runtime,
    tagline,
    overview,
  } = result;

  const onClickLike = () => {
    const newLike = localStorage.getItem(id) === null;
    if (newLike) {
      localStorage.setItem(
        id,
        JSON.stringify({
          id,
          title,
          posterPath,
        }),
      );
    } else {
      localStorage.removeItem(id);
    }

    setIsLike(newLike);
  };
  return (
    <>
      <Background backdropPath={backdropPath} />
      <Section>
        <Wrapper>
          <S.Container>
            <S.Poster
              src={posterPath}
              alt="포스터"
              ref={img => zoom.attach(img)}
            />
            <S.Intro>
              <S.Title>
                <h1>{title}</h1>
                <S.Year>({releaseDate}</S.Year>
                <S.Like type="button" onClick={onClickLike}>
                  <span>{isLike ? '좋아요 취소' : '좋아요'}</span>
                  {isLike ? <DislikeIcon /> : <LikeIcon />}
                </S.Like>
              </S.Title>
              <S.Info>
                <StarRatings
                  rating={rating / 2}
                  starRatedColor="#ffda33"
                  numberOfStart={5}
                  starDimension="30px"
                  startSpacting="2px"
                />
                <span>{genres}</span>
                <span>{runtime}</span>
              </S.Info>
              <S.Divider />
              <S.Tagline>{tagline}</S.Tagline>
              <S.Overview>{overview}</S.Overview>
            </S.Intro>
          </S.Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailLaptopIntro;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/variables';
import * as S from './DetailIntro.style';
import { Section, Container } from '../Detail.style';
import '../DetailImages/swiper.css';

const DetailIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isLike, setIsLike] = useState(
    localStorage.getItem(result.id) !== null,
  );
  const onClickLike = () => {
    const newLike = localStorage.getItem(result.id) === null;
    const { id, title, posterPath } = result;
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
      localStorage.removeItem(result.id);
    }
    setIsLike(newLike);
  };
  const {
    backdropPath,
    posterPath,
    title,
    releaseDate,
    rating,
    genres,
    runtime,
    tagline,
    overview,
  } = result;
  return (
    <>
      <S.Background backdropPath={backdropPath}>
        <Section>
          <Wrapper>
            <Container>
              <S.Poster src={posterPath} alt="포스터" />
              <h1>{title}</h1>
              <S.Year>({releaseDate})</S.Year>
              <S.Info>
                <span>★ {rating}</span>
                <span>{genres}</span>
                <span>{runtime}</span>
              </S.Info>
              <S.Like type="button" onClick={onClickLike}>
                <span>{isLike ? '좋아요 취소' : '좋아요'}</span>
                {isLike ? <S.DislikeIcon /> : <S.LikeIcon />}
              </S.Like>
              <S.Divider />
              <S.OverviewTitle>줄거리</S.OverviewTitle>
              {tagline && <h3>{tagline}</h3>}
              <S.OverviewContent>{overview}</S.OverviewContent>
            </Container>
          </Wrapper>
        </Section>
      </S.Background>
    </>
  );
};

export default DetailIntro;

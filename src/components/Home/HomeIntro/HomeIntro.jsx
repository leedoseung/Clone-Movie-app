import React from 'react';
import { Wrapper } from 'styles/variables';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from './HomeIntro.style';

const HomeIntro = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            <S.Title>오늘의 영화</S.Title>
            <S.Desc>{result.tagline}</S.Desc>
            <S.Name>{result.title}</S.Name>
            <S.MoreButton>
              <Link to={`/detail/${result.id}`}>더보기</Link>
            </S.MoreButton>
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
    </>
  );
};

export default HomeIntro;

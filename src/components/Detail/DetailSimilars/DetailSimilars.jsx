import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import { Link } from 'react-router-dom';
import { Section, Container, Title } from '../Detail.style';
import * as S from './DetailSimilars.style';

const DetailSimilars = () => {
  const { result } = useSelector(state => state.detail);

  const params = {
    sildesPerView: 2,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        sildesPerView: 3,
      },
      1200: {
        sildesPerView: 4,
      },
    },
  };

  const { similars } = result;

  return (
    <>
      <Section>
        <Wrapper>
          <Container>
            {similars && similars.length ? (
              <Title>이런 영화는 어때요?</Title>
            ) : null}
            <Swiper {...params}>
              {similars &&
                similars.map(similar => (
                  <Link key={similar.id} to={`/detail/${similar.id}`}>
                    <div>
                      <S.PosterImg src={similar.posterPath} alr="포스터" />
                      <S.PosterTitle>{similar.title}</S.PosterTitle>
                    </div>
                  </Link>
                ))}
              />
            </Swiper>
          </Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailSimilars;

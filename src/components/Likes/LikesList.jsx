import React, { useReducer } from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './LikesList.style';

const getAllLikes = () => {
  const likes = [];
  for (const [k, v] of Object.entries(localStorage)) {
    if (!Number.isSafeInteger(Number(k))) continue;
    likes.push(JSON.parse(v));
  }
  return likes;
};

const LikesList = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const likes = getAllLikes();

  const onClickRemove = e => {
    const { id } = e.target.dataset;
    localStorage.removeItem(id);
    forceUpdate();
  };

  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Title>좋아하는 영화들</S.Title>
          <S.ItemList>
            {likes.length ? (
              likes.map(item => (
                <S.Item key={item.id}>
                  <S.ItemLink to={`detail/${item.id}`}>
                    <img src={item.posterPath} alt="포스터" />
                    <S.MovieTitle>{item.title}</S.MovieTitle>
                  </S.ItemLink>
                  <S.RemoveButton
                    data-id={item.id}
                    onClick={onClickRemove}
                    type="button"
                  >
                    좋아요 취소
                  </S.RemoveButton>
                </S.Item>
              ))
            ) : (
              <p>좋아하는 영화가 없습니다.</p>
            )}
          </S.ItemList>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default LikesList;

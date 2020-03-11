import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { close } from 'store/modules/overlay';
import * as S from './Overlay.style';

const Overlay = () => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(close());
  };
  return (
    <S.Overlay open={isOpen}>
      <S.UL>
        <S.LI>
          <Link to="/around" onClick={handleClick}>
            둘러보기
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/around" onClick={handleClick}>
            좋아요
          </Link>
        </S.LI>
        <S.LI>
          <Link to="/around" onClick={handleClick}>
            소개
          </Link>
        </S.LI>
      </S.UL>
    </S.Overlay>
  );
};

export default Overlay;

import React from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import Overlay from 'components/Overlay/Overlay';
import * as S from './Header.style';
import OverlayButton from './OverlayButton/OverlayButton';

const Header = ({ color, bgColor, isSerching }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const history = useHistory();

  const onClickSearchCancle = () => {
    history.goBack();
  };

  return (
    <>
      <S.Header bgColor={bgColor}>
        <Wrapper>
          <S.Container color={color}>
            <S.LogoLinkContainer>
              <Link to="/">movie</Link>
            </S.LogoLinkContainer>
            <S.MenuContainer>
              {!isSerching ? (
                <S.SearchLinkContainer>
                  <Link to="/search">
                    <S.SearchIcon />
                  </Link>
                </S.SearchLinkContainer>
              ) : (
                <S.SearchCancle onClick={onClickSearchCancle} type="button">
                  검색취소
                </S.SearchCancle>
              )}
              {isTabletPortrait ? (
                <S.UL>
                  <S.LI>
                    <Link to="/around">둘러보기</Link>
                  </S.LI>
                  <S.LI>
                    <Link to="/likes">좋아요</Link>
                  </S.LI>
                  <S.LI>
                    <Link to="/about">소개</Link>
                  </S.LI>
                </S.UL>
              ) : (
                <OverlayButton color={color} />
              )}
            </S.MenuContainer>
          </S.Container>
          <Overlay />
        </Wrapper>
      </S.Header>
    </>
  );
};

Header.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
  isSerching: false,
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  isSerching: PropTypes.bool,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'styles/variables';
import * as S from './Footer.style';

const Footer = ({ color }) => {
  return (
    <S.Footer>
      <Wrapper>
        <S.Container>
          <S.Copyright color={color}>
            <S.Author>Made By Duvis</S.Author>
            <a href="https://github.com/leedoseung">
              <S.Github />
            </a>
          </S.Copyright>
        </S.Container>
      </Wrapper>
    </S.Footer>
  );
};

Footer.defaultProps = {
  color: 'white',
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;

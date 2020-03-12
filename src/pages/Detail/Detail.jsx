import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout, primaryColor, device } from 'styles/variables';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import * as S from './Detail.style';

const Detail = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = match.params;
  const isLaptop = useMediaQuery({ query: device.Laptops });

  return (
    <Layout>
      <Header color={primaryColor} bgColor="white"></Header>
      <main>
        <></>
      </main>
      <Footer color={primaryColor} />
    </Layout>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Detail;

import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout, primaryColor, device } from 'styles/variables';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import {
  DetailIntro,
  DetailCasts,
  DetailImages,
  DetailVideos,
  DetailSimilars,
  DetailLaptopIntro,
} from 'components/Detail/index';
import * as S from './Detail.style';
import { detailActions } from 'store/modules/detail';

const Detail = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = match.params;
  const isLoading = loadingState[detailActions.TYPE];
  const isLaptop = useMediaQuery({ query: device.Laptops });

  useEffect(() => {
    dispatch(detailActions.request({ id }));
  }, [dispatch, id]);
  return (
    <Layout>
      <Header color={primaryColor} bgColor="white"></Header>
      <main>
        {isLoading ? (
          <S.LoaderContainer>
            <Loader color={primaryColor}></Loader>
          </S.LoaderContainer>
        ) : (
          <>
            {isLaptop ? <DetailLaptopIntro /> : <DetailIntro />}
            <DetailCasts />
            <DetailImages />
            <DetailVideos />
            <DetailSimilars />
          </>
        )}
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

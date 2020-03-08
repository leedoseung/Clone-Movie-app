import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import HomeIntro from 'components/Home/HomeIntro/HomeIntro';
import { useSelector, useDispatch } from 'react-redux';
import { introActions } from 'store/modules/intro';

import { primaryColor, Layout } from 'styles/variables';
import * as S from './Home.style';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(introActions.request());
  }, [dispatch]);

  return !isLoading ? (
    <Layout>
      <Header />
      <S.Main>
        <HomeIntro />
      </S.Main>
      <S.Background backdropPath={result.backdropPath} />
      <Footer />
    </Layout>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor} />
    </S.LoaderContainer>
  );
};

export default Home;

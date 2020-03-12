import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, primaryColor } from 'styles/variables';
import Loader from 'components/Loader/Loader';
import AroundCardItem from '../AroundCardItem/AroundCardItem';
import { aroundActions } from 'store/modules/around';
import { AROUND_POPULAR } from 'utils/constants';
import * as S from './AroundCardList.style';

const AroundCardList = () => {
  const { aroundSuccess, result } = useSelector(state => state.around);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[aroundActions.TYPE];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aroundActions.request({ TYPE: AROUND_POPULAR }));
  }, [dispatch]);

  return !isLoading ? (
    <>
      <section>
        <Wrapper>
          <S.Grid>
            {aroundSuccess
              ? result.map(movie => <AroundCardItem movie={movie} />)
              : null}
            }
          </S.Grid>
        </Wrapper>
      </section>
    </>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor}></Loader>
    </S.LoaderContainer>
  );
};

export default AroundCardList;

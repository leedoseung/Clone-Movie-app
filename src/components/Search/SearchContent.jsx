import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'hooks/useDebounce';
import useComponentWillMount from 'hooks/useComponentWillMount';
import { Wrapper, primaryColor } from 'styles/variables';
import { searchActions } from 'store/modules/search';
import Loader from 'components/Loader/Loader';
import * as S from './SearchContent.style';

const SearchContent = () => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[searchActions.TYPE];
  const { searchSuccess, result } = useSelector(state => state.search);
  const debounceValue = useDebounce(searchValue, 700);
  const dispatch = useDispatch();

  const onChangeInput = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useComponentWillMount(() => {
    dispatch(searchActions.request({ movie: '' }));
  });

  useEffect(() => {
    dispatch(searchActions.request({ movie: debounceValue }));
  }, [dispatch, debounceValue]);

  const renderSearchResult = () => {
    if (isLoading) {
      return (
        <S.LoaderContainer>
          <Loader color={primaryColor} />
        </S.LoaderContainer>
      );
    }
    if (searchSuccess) {
      return (
        <S.Result>
          {result.map(movie => (
            <S.Item to={`/detail/${movie.id}`} key={movie.id}>
              {movie.title}
            </S.Item>
          ))}
        </S.Result>
      );
    }
    return null;
  };

  return (
    <>
      <S.Section>
        <Wrapper>
          <S.Container>
            <S.Input
              onChange={onChangeInput}
              type="text"
              placeholder="어떤 영화를 찾으시나요?"
              ref={inputRef}
            />
            {renderSearchResult()}
          </S.Container>
        </Wrapper>
      </S.Section>
    </>
  );
};

export default SearchContent;

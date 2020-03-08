import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import StyledOverlayButton from './OverlayButton.style';
import { open, close } from 'store/modules/overlay';

const OverlayButton = ({ color }) => {
  const { isOpen } = useSelector(state => state.overlay);
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    isOpen ? dispatch(close()) : dispatch(open());
  }, [dispatch, isOpen]);
  return (
    <StyledOverlayButton
      isOpen={isOpen}
      onClick={handleClick}
      color={color}
      type="button"
      aria-label="apsb"
    >
      <div />
      <div />
      <div />
    </StyledOverlayButton>
  );
};

OverlayButton.propTpes = {
  color: PropTypes.string.isRequired,
};

export default OverlayButton;

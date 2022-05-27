import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ label,placeholder, onClick, onData, isValid, type}) => {
  return (
    <input
        placeholder="string"
        onClick={onClick}
        type="string"
        onData="func"
        isValid="bool"

    >
      {label}
    </input>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import './button.css';
>>>>>>> e4a283e295370b80e09fc03e42abc28f002b5af5
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa

/**
 * Primary UI component for user interaction
 */
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa
export const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
<<<<<<< HEAD
=======
=======
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
>>>>>>> e4a283e295370b80e09fc03e42abc28f002b5af5
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
>>>>>>> e4a283e295370b80e09fc03e42abc28f002b5af5
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  backgroundColor: null,
  primary: false,
  size: 'medium',
>>>>>>> e4a283e295370b80e09fc03e42abc28f002b5af5
>>>>>>> 566fe5e53bda4d9ce5c01464e7ee73f5327408aa
  onClick: undefined,
};

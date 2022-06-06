import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({placeholder, onClick, type,onData}) => {
  function onInput(InputEvent){
    console.log("input.onInput", InputEvent);
    if(typeof onData ==="function"){
      onData(InputEvent.target.value)
    }
    }
    
  return (
    <input
        
        onClick={onClick}
        type={type}
        placeholder={placeholder}
        onInput={onInput}
    >
      
    </input>
  );
};

Input.propTypes = {
  /**
   * input contents
   */
  placeholder: PropTypes.string.isRequired,
  onData:PropTypes.func,
  isValid:PropTypes.bool,
  type:PropTypes.string
  /**
   * Optional click handler
   */
 
};

Input.defaultProps = {
  type: "text",
  onData:undefined,
  isValid:undefined,
};

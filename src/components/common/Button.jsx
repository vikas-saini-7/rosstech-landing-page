import React from 'react';

const buttonStyles = {
  normal: {
    backgroundColor: 'black',
    border: '1px solid transparent',
    color: 'white',
    padding: '14px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  outlined: {
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: '#333',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    borderRadius:'25px'
  },
};

const Button = ({ variant = 'normal', className, value }) => {
  const styles = buttonStyles[variant];

  return (
    <button className={`${className}`} style={styles}>{value}</button>
  );
};

export default Button;

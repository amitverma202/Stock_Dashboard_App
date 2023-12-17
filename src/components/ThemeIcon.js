import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import "C:/Users/Sahil Verma/OneDrive/Desktop/Amit React Code/stock-dashboard-app/src/App.css";

const ThemeIcon = ({ onToggle, isDarkMode }) => {
  return (
    <button className="theme-icon" onClick={onToggle}>
      <FontAwesomeIcon className="icon-change" icon={faAdjust} />
     
    </button>
  );
};

export default ThemeIcon;

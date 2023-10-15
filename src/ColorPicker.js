import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors, onColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
    onColorChange(color);
  };

  if (!colors || !colors.length) {
    return <div>No colors available.</div>;
  }

  return (
    <div className="color-picker">
      <button onClick={toggleColorList}>Pick a color</button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>You selected: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;


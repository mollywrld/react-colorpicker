import React, { useState } from 'react';
import ColorPicker from "./ColorPicker";


function App() {
  // const colors = ["red", "green", "blue", "yellow", "purple"];

  // return (
  //   <div>
  //     <h1>Color Picker</h1>
  //     <ColorPicker colors={colors} />
  //   </div>
  // );
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div style={{ backgroundColor: selectedColor || 'white', height: '100vh' }}>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} onColorChange={handleColorChange} />
    </div>
  );
};

export default App;  
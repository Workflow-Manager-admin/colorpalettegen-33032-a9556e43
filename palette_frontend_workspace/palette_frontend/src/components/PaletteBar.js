import React from 'react';
import ColorBlock from './ColorBlock';
import './PaletteBar.css';

// PUBLIC_INTERFACE
function PaletteBar({ palette }) {
  /**
   * Horizontal bar of 5 ColorBlock components.
   * 
   * Props:
   *   palette (array of {hex: string, locked: bool}): The color data for each block.
   * 
   * Returns JSX element.
   */
  return (
    <div className="palette-bar">
      {palette.map((color, idx) => (
        <ColorBlock key={idx} hex={color.hex} locked={color.locked} />
      ))}
    </div>
  );
}

export default PaletteBar;

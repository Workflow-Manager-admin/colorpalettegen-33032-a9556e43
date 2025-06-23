import React from 'react';
import './ColorBlock.css';

// PUBLIC_INTERFACE
function ColorBlock({ hex, locked }) {
  /**
   * A single color block displaying the color, hex code, lock, and copy icons.
   * 
   * Props:
   *   hex (string): The color hex code.
   *   locked (bool): Whether this color is locked.
   * 
   * Returns JSX element.
   */
  return (
    <div className="color-block" style={{ backgroundColor: hex }}>
      <div className="color-controls">
        {/* Lock Icon Placeholder */}
        <button className={`icon-btn lock-btn${locked ? ' locked' : ''}`} title={locked ? "Unlock color" : "Lock color"}>
          <span role="img" aria-label="lock">{locked ? '🔒' : '🔓'}</span>
        </button>
        {/* Copy Icon Placeholder */}
        <button className="icon-btn copy-btn" title="Copy hex">
          <span role="img" aria-label="copy">📋</span>
        </button>
      </div>
      <div className="color-hex">{hex}</div>
    </div>
  );
}

export default ColorBlock;

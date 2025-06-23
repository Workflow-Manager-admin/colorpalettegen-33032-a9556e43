import React, { useState, useCallback } from 'react';
import './App.css';
import PaletteBar from './components/PaletteBar';

/**
 * Utility to generate a random valid CSS hex color string.
 * Returns string like "#A1C4E8"
 */
function randomHexColor() {
  // PUBLIC_INTERFACE
  const hex = "#" + Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase();
  return hex;
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Root app for palette generator. Renders the palette-bar,
   * action buttons, and handles layout.
   * 
   * Returns JSX element.
   */
  // Returns a palette: [{hex:..., locked: false}, ...]
  const generatePalette = useCallback(() => {
    return Array.from({ length: 5 }, () => ({
      hex: randomHexColor(),
      locked: false,
    }));
  }, []);

  // State: palette array (5)
  const [palette, setPalette] = useState(generatePalette);

  const handleGeneratePalette = () => {
    setPalette(generatePalette());
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> PaletteGen
            </div>
            <button className="btn btn-large" style={{ minWidth: 110, pointerEvents: 'none', opacity: 0.5 }}>
              <span role="img" aria-label="user">👤</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero" style={{ gap: 36 }}>
            <div className="subtitle">Modern Color Palette Generator</div>
            <h1 className="title" style={{ marginBottom: 0 }}>Palette Creator</h1>
            <div className="description" style={{ marginBottom: 10, fontWeight: 400 }}>
              Generate, lock, copy and save color palettes instantly for your design inspiration.
            </div>
            {/* Palette Bar */}
            <PaletteBar palette={palette} />
            {/* Actions */}
            <div className="actions" style={{
              display: "flex",
              justifyContent: "center",
              gap: 18,
              flexWrap: "wrap"
            }}>
              <button
                className="btn btn-large"
                style={{ fontSize: '1.14rem', minWidth: 140 }}
                onClick={handleGeneratePalette}
              >
                <span role="img" aria-label="shuffle">🔀</span> Generate
              </button>
              <button className="btn btn-large" style={{ fontSize: '1.14rem', minWidth: 140, opacity: 0.5, pointerEvents: 'none' }}>
                <span role="img" aria-label="save">💾</span> Save Palette
              </button>
              {/* Future: <button className="btn" >Upload Image</button> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
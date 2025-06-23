import React from 'react';
import './App.css';
import PaletteBar from './components/PaletteBar';

// PUBLIC_INTERFACE
function App() {
  /**
   * Root app for palette generator. Renders the palette-bar,
   * action buttons, and handles layout.
   * 
   * Returns JSX element.
   */
  // Placeholder palette: 5 colors, none locked
  const initialPalette = [
    { hex: '#6366F1', locked: false },
    { hex: '#F59E42', locked: false },
    { hex: '#76E8C2', locked: false },
    { hex: '#E87A41', locked: false },
    { hex: '#64748B', locked: false }
  ];

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
          <div className="hero" style={{gap: 36}}>
            <div className="subtitle">Modern Color Palette Generator</div>
            <h1 className="title" style={{marginBottom: 0}}>Palette Creator</h1>
            <div className="description" style={{marginBottom: 10, fontWeight: 400 }}>
              Generate, lock, copy and save color palettes instantly for your design inspiration.
            </div>
            {/* Palette Bar */}
            <PaletteBar palette={initialPalette} />
            {/* Actions */}
            <div className="actions" style={{
              display: "flex",
              justifyContent: "center",
              gap: 18,
              flexWrap: "wrap"
            }}>
              <button className="btn btn-large" style={{fontSize:'1.14rem', minWidth:140}}>
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
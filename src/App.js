import React, { useState } from 'react';
import './App.css';

// Soft Summer color palette data
const softSummerColors = [
    // Grays and Neutrals
    { name: 'Icicle', hex: '#E8E6E0' },
    { name: 'Birch', hex: '#E7E1D9' },
    { name: 'Chateau Gray', hex: '#BFBDB7' },
    { name: 'Satellite', hex: '#A39F97' },
    { name: 'Iron', hex: '#776D65' },
    { name: 'Mirage Gray', hex: '#9A958E' },
    { name: 'Sedona Sage', hex: '#8F8779' },
    { name: 'Gray Quill', hex: '#9B9289' },
    { name: 'Thunderstorm', hex: '#807669' },
    { name: 'Raven', hex: '#403F3F' },

    // Pinks and Roses
    { name: 'English Rose', hex: '#DEC1C3' },
    { name: 'Quartz Pink', hex: '#E5C4C0' },
    { name: 'Flowering Ginger', hex: '#E4B8B5' },
    { name: 'State Rose', hex: '#C25D5E' },
    { name: 'Earth Red', hex: '#A94A4C' },
    { name: 'Carneo Pink', hex: '#E6B6B5' },
    { name: 'Wild Rose', hex: '#D7A3A4' },
    { name: 'Mesa Rose', hex: '#C08081' },
    { name: 'Hawthorn Rose', hex: '#A76D6D' },
    { name: 'Blackberry Wine', hex: '#702F3E' },

    // Blues and Purples
    { name: 'Icelandic Blue', hex: '#B8C0D0' },
    { name: 'Purple Impression', hex: '#9A9CB0' },
    { name: 'Lavender Violet', hex: '#8B8BA7' },
    { name: 'Heron', hex: '#627085' },
    { name: 'Mood Indigo', hex: '#3A4861' },

    // Aqua and Teals
    { name: 'Leisure Time', hex: '#9BC0C9' },
    { name: 'Porcelain', hex: '#89A9B8' },
    { name: 'Hydro', hex: '#5E8CA1' },
    { name: 'Arctic', hex: '#648C97' },
    { name: 'Atlantic Deep', hex: '#1F4E5F' },

    // Greens
    { name: 'Meadow', hex: '#8BA889' },
    { name: 'Beryl Green', hex: '#739E8C' },
    { name: 'Hunter Green', hex: '#355E4C' },
    { name: 'Garden Glade', hex: '#C5CBA7' },
    { name: 'Shadow Green', hex: '#BBC9A7' }
];

function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSearch = () => {
    if (selectedColor) {
      const searchTerms = `${selectedColor.name} color clothing ${selectedColor.hex}`;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerms)}`;
      window.open(searchUrl, '_blank');
    }
  };

  return (
    <div className="container">
      <header className="site-header">
        <h1>Soft Summer Color Palette</h1>
        <p className="subtitle">Discover your perfect muted, cool-toned colors</p>
        <div className="header-decoration"></div>
      </header>

      <main>
        <section className="intro-section">
          <p className="intro-text">
            Explore our curated collection of Soft Summer colors, perfect for creating a romantic, 
            bohemian aesthetic. Each color has been carefully selected to complement your natural 
            coloring and create harmonious outfits.
          </p>
        </section>

        <div className="color-grid">
          {softSummerColors.map((color, index) => (
            <div
              key={index}
              className={`color-card ${selectedColor === color ? 'selected' : ''}`}
              onClick={() => handleColorClick(color)}
            >
              <div className="color-preview" style={{ backgroundColor: color.hex }}>
                <div className="color-info">
                  <div className="color-name">{color.name}</div>
                  <div className="hex-code">{color.hex}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedColor && (
          <div className="search-container visible">
            <button className="search-button" onClick={handleSearch}>
              <span className="button-text">Find Clothing in This Color</span>
              <span className="button-icon">→</span>
            </button>
          </div>
        )}
      </main>

      <footer>
        <p>A curated collection of Soft Summer TCX colors</p>
      </footer>
    </div>
  );
}

export default App; 
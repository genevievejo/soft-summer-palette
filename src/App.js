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
        <h1>Soft Summer Color Palette Guide</h1>
        <p className="subtitle">Professional Color Analysis for Your Natural Beauty</p>
        <div className="header-decoration"></div>
      </header>

      <main>
        <article className="intro-section">
          <h2>Understanding Soft Summer Colors</h2>
          <p className="intro-text">
            The Soft Summer color palette is characterized by muted, cool-toned colors that perfectly complement individuals with soft summer coloring. If you have soft summer characteristics - gentle contrast, muted features, and cool undertones - these colors will enhance your natural beauty.
          </p>
          <div className="color-characteristics">
            <h3>Key Characteristics of Soft Summer Colors:</h3>
            <ul>
              <li>Muted and sophisticated tones</li>
              <li>Cool undertones with gentle warmth</li>
              <li>Medium to light-medium contrast levels</li>
              <li>Soft and dusty variations of classic colors</li>
            </ul>
          </div>
        </article>

        <section className="color-palette-section">
          <h2>Professional TCX Color Palette</h2>
          <p className="section-intro">
            Explore our curated collection of Soft Summer colors, featuring authentic TCX color codes used by fashion industry professionals. Click any color to find matching clothing items.
          </p>
          <div className="color-grid" role="grid" aria-label="Soft Summer color palette">
            {softSummerColors.map((color, index) => (
              <div
                key={index}
                role="gridcell"
                className={`color-card ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => handleColorClick(color)}
                aria-label={`${color.name} color: ${color.hex}`}
              >
                <div 
                  className="color-preview" 
                  style={{ backgroundColor: color.hex }}
                  aria-hidden="true"
                >
                  <div className="color-info">
                    <div className="color-name">{color.name}</div>
                    <div className="hex-code">{color.hex}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedColor && (
          <div className="search-container visible">
            <button 
              className="search-button" 
              onClick={handleSearch}
              aria-label={`Search for clothing in ${selectedColor.name} color`}
            >
              <span className="button-text">Find Clothing in This Color</span>
              <span className="button-icon" aria-hidden="true">→</span>
            </button>
          </div>
        )}

        <section className="color-tips">
          <h2>How to Use Your Soft Summer Colors</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Wardrobe Building</h3>
              <p>Create a cohesive wardrobe by selecting pieces in these harmonious colors. Focus on neutrals for base pieces and add muted accent colors for variety.</p>
            </div>
            <div className="tip-card">
              <h3>Makeup Choices</h3>
              <p>Choose makeup in soft, cool-toned shades that complement your natural coloring. Avoid high-contrast or warm-toned makeup.</p>
            </div>
            <div className="tip-card">
              <h3>Accessories</h3>
              <p>Select jewelry and accessories in soft silver tones or muted metals. Avoid bright gold or high-shine finishes.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>A comprehensive guide to Soft Summer seasonal color analysis</p>
        <p className="copyright">© {new Date().getFullYear()} Soft Summer Color Palette Guide</p>
      </footer>
    </div>
  );
}

export default App; 
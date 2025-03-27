// Soft Summer color palette data from TCX colors
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

// DOM Elements
const colorGrid = document.getElementById('colorGrid');
const searchContainer = document.getElementById('searchContainer');
const searchButton = document.getElementById('searchButton');

let selectedColor = null;

// Create color cards
function createColorGrid() {
    softSummerColors.forEach(color => {
        const colorCard = document.createElement('div');
        colorCard.className = 'color-card';
        colorCard.innerHTML = `
            <div class="color-preview" style="background-color: ${color.hex}">
                <div class="color-info">
                    <div class="color-name">${color.name}</div>
                    <div class="hex-code">${color.hex}</div>
                </div>
            </div>
        `;
        
        colorCard.addEventListener('click', () => selectColor(colorCard, color));
        colorGrid.appendChild(colorCard);
    });
}

// Handle color selection
function selectColor(colorCard, color) {
    // Remove previous selection
    if (selectedColor) {
        selectedColor.classList.remove('selected');
    }
    
    // Add new selection
    colorCard.classList.add('selected');
    selectedColor = colorCard;
    
    // Show search container
    searchContainer.classList.add('visible');
    
    // Update search button functionality
    searchButton.onclick = () => {
        const searchTerms = `${color.name} color clothing ${color.hex}`;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerms)}`;
        window.open(searchUrl, '_blank');
    };
}

// Initialize the color grid
createColorGrid(); 
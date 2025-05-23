# 🏝️ Catan Map Generator

A beautiful, interactive web application that generates random, balanced Settlers of Catan board layouts following official game rules. Built with React and designed for quick setup and fair gameplay.

![Catan Map Generator](https://img.shields.io/badge/React-18.x-blue?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

## 🎯 Features

### 🎲 **Smart Board Generation**
- **Randomized terrain placement** following standard Catan distribution (19 hexes)
- **Intelligent number token assignment** preventing adjacent 6s and 8s (red numbers)
- **Difficulty-based desert placement**:
  - **Easy**: Desert placed on edge positions only
  - **Medium**: Desert can be placed anywhere
  - **Hard**: Desert prefers center/strategic positions
- **Seeded randomization** for reproducible board layouts

### 🎨 **Beautiful User Interface**
- **Premium styling** with ocean-themed gradient backgrounds
- **Interactive hexagonal tiles** with smooth hover animations
- **3D visual effects** with shadows, highlights, and depth
- **Responsive design** optimized for mobile, tablet, and desktop
- **Clean resource legend** with color-coded terrain types

### ⚙️ **User Controls**
- **Difficulty selector** for desert placement strategy
- **Optional seed input** for reproducible map generation
- **One-click generation** with loading animations
- **Interactive tooltips** showing terrain types and numbers

## 🚀 Quick Start

### Prerequisites
- Node.js (14.x or higher)
- npm or yarn package manager

### Installation

1. **Clone or create the project**:
```bash
npx create-react-app catan-map-generator
cd catan-map-generator
```

2. **Install dependencies**:
```bash
npm install lucide-react
```

3. **Add Tailwind CSS (for basic styles)**:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

4. **Add Tailwind CDN to `public/index.html`** (alternative to PostCSS setup):
```html
<script src="https://cdn.tailwindcss.com"></script>
```

5. **Replace App.jsx** with the provided code

6. **Start the development server**:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
catan-map-generator/
├── public/
│   ├── index.html              # Main HTML template with Tailwind CDN
│   ├── favicon.ico             # App favicon
│   ├── logo192.png             # PWA icons
│   ├── logo512.png
│   ├── manifest.json           # PWA configuration
│   └── robots.txt              # SEO robots file
├── src/
│   ├── App.jsx                 # 🎯 MAIN APPLICATION COMPONENT
│   ├── index.js                # React DOM entry point
│   ├── index.css               # Basic CSS (Tailwind imports)
│   ├── App.css                 # Default React styles (optional)
│   ├── reportWebVitals.js      # Performance monitoring
│   └── setupTests.js           # Jest testing setup
├── node_modules/               # Dependencies (auto-generated)
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration (if using)
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 📄 File Descriptions

### Core Application Files

#### `src/App.jsx` - **Main Application Component** 🎯
The heart of the application containing:
- **React component logic** with hooks for state management
- **Complete Catan board generation algorithm** following official rules
- **All styling** (inline styles for maximum compatibility)
- **User interface components** (controls, board display, legend)
- **Event handlers** for user interactions
- **Responsive design** implementation

**Key Functions:**
- `generateRandomBoard()` - Core algorithm for creating valid Catan boards
- `generateNewBoard()` - Async wrapper with loading states
- `Hexagon()` - Individual hex tile component with interactions
- `BoardLayout()` - Arranges hexes in proper diamond formation

#### `src/index.js` - **React Entry Point**
- Renders the main App component into the DOM
- Includes React.StrictMode for development warnings
- Performance monitoring setup

#### `public/index.html` - **HTML Template**
- Contains the root div where React mounts
- Includes Tailwind CDN for styling (if not using PostCSS)
- Meta tags for responsive design and SEO

### Configuration Files

#### `package.json` - **Project Configuration**
- Lists all dependencies (React, Lucide React)
- Defines npm scripts (start, build, test)
- Project metadata and configuration

#### `tailwind.config.js` - **Tailwind Configuration**
- Tailwind CSS customization (if using PostCSS setup)
- Content paths for Tailwind to scan
- Theme extensions and custom utilities

#### `.gitignore` - **Git Ignore Rules**
- Excludes node_modules, build files, and environment variables
- Standard React application ignore patterns

### Optional Files

#### `src/index.css` - **Global Styles**
- Tailwind CSS imports (@tailwind base, components, utilities)
- Any global CSS overrides (minimal due to inline styling)

#### `postcss.config.js` - **PostCSS Configuration**
- Required if using Tailwind via PostCSS instead of CDN
- Autoprefixer configuration for cross-browser compatibility

## 🎮 How to Use

### Basic Usage
1. **Open the application** - A random board generates automatically
2. **Choose difficulty** - Select Easy, Medium, or Hard for desert placement
3. **Generate new boards** - Click "Generate New Board" for different layouts
4. **Use seeds** - Toggle "Seed" and enter a value for reproducible maps

### Understanding the Board
- **Terrain Colors**:
  - 🟢 **Dark Green** = Wood (Forest)
  - 🟢 **Light Green** = Sheep (Pasture)
  - 🟡 **Yellow** = Wheat (Grain)
  - 🔴 **Red** = Brick (Hills)
  - ⬜ **Gray** = Ore (Mountains)
  - 🟠 **Orange** = Desert
- **Number Tokens**: Red circles (6 & 8) are high-probability rolls
- **Hover Effects**: Hover over hexes to see terrain type and number

## 🔧 Development

### Architecture Overview
The application uses a **single-component architecture** with:
- **React Hooks** for state management (useState, useEffect)
- **Inline styling** for maximum compatibility and no external CSS dependencies
- **Functional programming** approach for board generation algorithms
- **Event-driven updates** for user interactions

### Key Algorithms

#### Board Generation Process
1. **Terrain Distribution**: Shuffles 19 terrain tiles following standard Catan ratios
2. **Desert Placement**: Places desert based on difficulty setting
3. **Number Assignment**: Distributes number tokens while preventing adjacent 6s/8s
4. **Validation**: Ensures board follows all official Catan rules

#### Randomization Strategy
- **Seeded Random**: Uses mathematical seed for reproducible results
- **Fisher-Yates Shuffle**: Ensures true randomness in tile distribution
- **Constraint Satisfaction**: Validates number placement rules

### Adding Features

#### To add new difficulty levels:
```javascript
// In generateRandomBoard function, modify getDesertPosition()
const getDesertPosition = () => {
  const positions = [/* position arrays */];
  
  if (difficulty === 'custom') {
    // Add your custom logic here
    availablePositions = customPositions;
  }
  // ...
};
```

#### To modify terrain distribution:
```javascript
// In generateRandomBoard function, modify terrainTiles array
const terrainTiles = [
  // Add or modify terrain types and quantities
  'forest', 'forest', 'forest', 'forest',
  // ...
];
```

#### To add new terrain types:
1. Add color to `terrainColors` object
2. Add name to `terrainNames` object
3. Include in terrain distribution array
4. Update legend display

### Styling Customization

#### Color Scheme
Modify the `terrainColors` object to change terrain colors:
```javascript
const terrainColors = {
  forest: '#your-color',    // Wood
  pasture: '#your-color',   // Sheep
  // ...
};
```

#### Layout Adjustments
Modify the `styles` object for UI changes:
```javascript
const styles = {
  hexagon: {
    width: '72px',  // Change hex size
    height: '72px',
    // ...
  },
  // ...
};
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Board generates on initial load
- [ ] Difficulty selector changes desert placement
- [ ] Seed input produces reproducible results
- [ ] No adjacent 6s and 8s in generated boards
- [ ] Responsive design works on different screen sizes
- [ ] Hover effects and animations function properly

### Automated Testing
```bash
npm test
```

Runs the test suite (if tests are added to the project).

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Creates an optimized production build in the `build` folder.

### Deployment Platforms
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect GitHub repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package for static hosting
- **Firebase Hosting**: Use Firebase CLI for deployment

### Environment Variables
No environment variables required - the app is fully client-side.

## 🎯 Game Rules Implementation

### Standard Catan Board Rules
- **19 hexagonal tiles total**:
  - 4 Forest (Wood)
  - 4 Pasture (Sheep)
  - 4 Grain (Wheat)
  - 3 Hills (Brick)
  - 3 Mountains (Ore)
  - 1 Desert (no resource)

- **Number tokens**: 2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12
- **No number 7** (reserved for robber activation)
- **Desert gets no number token**
- **No adjacent 6s and 8s** (red numbers)

### Difficulty Settings
- **Easy**: Desert placed on edge positions for easier resource access
- **Medium**: Desert can appear anywhere on the board
- **Hard**: Desert prefers center positions, blocking key intersections

## 🐛 Troubleshooting

### Common Issues

#### App won't start
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### Styling not working
- Ensure Tailwind CDN is included in `public/index.html`
- Check browser console for CSS loading errors
- Verify all inline styles are properly formatted

#### Board not generating
- Check browser console for JavaScript errors
- Ensure all dependencies are installed
- Verify React version compatibility

#### Board appears off-center
- Adjust `getRowOffset()` values in `BoardLayout` component
- Modify `transform: translateX()` value for fine-tuning
- Check responsive design on different screen sizes

### Browser Compatibility
- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Responsive design optimized

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style Guidelines
- Use **functional components** with hooks
- Follow **React best practices**
- Maintain **inline styling** for compatibility
- Add **comments** for complex algorithms
- Keep **components small** and focused


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Klaus Teuber** - Creator of the original Settlers of Catan board game
- **Catan Studio** - For the amazing game that inspired this project
- **React Team** - For the excellent framework
- **Lucide** - For the beautiful icons

---

**Happy map generating! 🏝️** May your boards be balanced and your settlements prosper!
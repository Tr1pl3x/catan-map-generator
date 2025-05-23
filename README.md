# 🏝️ Catan Map Generator

## 😇 Motivation
During the term 1 break of 2025, I was drawn into Catan and it was frustrating to setup the board especially when you have friends over. I was really into the game that I started watching youtube vidoes on stratgies and stuff. That is when I came cross this one video of the guy talking about setting up a random board using python to generate an equal and balanced map so players can enjoy. I checked his source code and figured why don't I give it a try using js and maybe make myself a nifty little webapp so next time when I have my friends over, I wouldn't need to sweat on setting the board and start thining about the strategies asap!

A modern, interactive web application that generates random, balanced Catan boards in seconds. Perfect for quick game setup and ensuring fair gameplay for all players!

## ✨ Features

- **🎯 Balanced Resource Distribution** - Ensures fair resource allocation across all players
- **🎲 True Randomization** - Every board is unique with proper tile and number shuffling
- **🚫 No Desert Islands** - Strategically places the desert tile to maintain game balance
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **⚡ Instant Generation** - Generate new boards with a single click
- **🎨 Beautiful UI** - Clean, modern interface with smooth animations
- **🌊 Visual Appeal** - Hexagonal tiles with realistic colors and styling

## 🎮 How to Use

1. **Visit the Live App** - [catan-map-generator.vercel.app](https://your-app-url.vercel.app)
2. **Click "Generate New Board"** - Instantly creates a randomized Catan board
3. **Study the Layout** - Review resource distribution and number placements
4. **Generate Again** - Keep clicking until you find the perfect board
5. **Start Playing!** - Use the generated board for your Catan game

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks and functional components
- **Lucide React** - Beautiful, consistent icons
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript ES6+** - Modern JavaScript features
- **Vercel** - Fast, reliable deployment platform

## 🏗️ Project Structure

```
catan-map-generator/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine instructions
├── src/
│   ├── App.js              # Main application component
│   ├── index.js            # React DOM entry point
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
└── README.md               # This file
```

## 🚀 Local Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Tr1pl3x/catan-map-generator.git

# Navigate to project directory
cd catan-map-generator

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run test suite
npm run eject      # Eject from Create React App (irreversible)
```

## 🎯 Game Rules Integration

This generator follows official Catan setup rules:

- **19 Terrain Tiles**: 4 Fields, 4 Forests, 4 Pastures, 3 Hills, 3 Mountains, 1 Desert
- **18 Number Tokens**: Two each of 3,4,5,6,8,9,10,11 and one each of 2,12
- **Balanced Distribution**: Ensures no single corner has too many high-probability numbers
- **Strategic Desert Placement**: Desert is placed to maintain game balance

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Fork this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**: `npm run build`
2. **Upload the `build` folder** to Netlify
3. **Configure redirects** for single-page application

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request**

### Contribution Ideas

- [ ] Add expansion board layouts (5-6 players)
- [ ] Implement board validation algorithms
- [ ] Add board sharing functionality
- [ ] Create board statistics and analysis
- [ ] Add dark/light theme toggle
- [ ] Implement board export/import
- [ ] Add accessibility improvements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎲 About Catan

Catan is a beloved board game created by Klaus Teuber. This generator is a fan-made tool to enhance your gaming experience and is not affiliated with Catan Studio or the official Catan brand.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Tr1pl3x/catan-map-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Tr1pl3x/catan-map-generator/discussions)
- **Email**: your-email@example.com

## 🙏 Acknowledgments

- Klaus Teuber for creating the amazing game of Catan
- The React team for the excellent framework
- Vercel for seamless deployment
- The open-source community for inspiration and tools

---

**Built with ❤️ for the Catan community**

*Generate. Play. Conquer.* 🏝️🎯🎲
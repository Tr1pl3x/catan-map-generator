import React, { useState } from 'react';
import { Shuffle, Settings } from 'lucide-react';

const CatanMapGenerator = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const [seed, setSeed] = useState('');
  const [showSeedInput, setShowSeedInput] = useState(false);
  const [boardData, setBoardData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // CSS styles object
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)',
      padding: '16px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    main: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px'
    },
    headerTitle: {
      fontSize: '56px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '16px',
      margin: 0,
      textShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    headerSubtitle: {
      fontSize: '22px',
      color: '#1e40af',
      maxWidth: '600px',
      margin: '20px auto 0',
      lineHeight: '1.6',
      fontWeight: '500'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '20px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px',
      marginBottom: '32px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    controlsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px'
    },
    difficultySection: {
      flex: 1,
      minWidth: '250px'
    },
    difficultyLabel: {
      display: 'block',
      fontSize: '16px',
      fontWeight: '700',
      color: '#374151',
      marginBottom: '12px'
    },
    difficultyButtons: {
      display: 'flex',
      backgroundColor: 'rgba(243, 244, 246, 0.6)',
      borderRadius: '12px',
      padding: '6px',
      gap: '4px'
    },
    difficultyButton: {
      flex: 1,
      padding: '14px 28px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px'
    },
    actionButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    seedButton: {
      padding: '14px 28px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      backgroundColor: 'rgba(243, 244, 246, 0.8)',
      color: '#374151',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    generateButton: {
      padding: '14px 28px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
    },
    seedInputContainer: {
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '2px solid rgba(229, 231, 235, 0.6)'
    },
    seedInputLabel: {
      display: 'block',
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '10px'
    },
    seedInput: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '12px',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      boxSizing: 'border-box'
    },
    boardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      position: 'relative',
      background: `
        radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0ea5e9 0%, #0284c7 30%, #0369a1 70%, #075985 100%)
      `,
      borderRadius: '24px',
      minHeight: '450px',
      boxShadow: `
        inset 0 0 60px rgba(255, 255, 255, 0.1),
        0 20px 40px rgba(0, 0, 0, 0.3)
      `,
      border: '3px solid rgba(255, 255, 255, 0.2)'
    },
    boardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      position: 'relative',
      zIndex: 1
    },
    hexRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2px'
    },
    hexagon: {
      width: '72px',
      height: '72px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.2),
        0 4px 12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.1)
      `,
      filter: 'brightness(1.1) saturate(1.2)',
      zIndex: 2
    },
    numberToken: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      boxShadow: `
        0 3px 8px rgba(0, 0, 0, 0.5),
        inset 0 1px 2px rgba(255, 255, 255, 0.3)
      `,
      position: 'relative'
    },
    legendTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '20px',
      textAlign: 'center'
    },
    legendGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '16px',
      marginBottom: '20px'
    },
    legendItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      backgroundColor: 'rgba(249, 250, 251, 0.8)',
      borderRadius: '12px',
      border: '2px solid rgba(229, 231, 235, 0.6)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    legendColor: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      border: '2px solid rgba(255,255,255,0.5)'
    },
    legendName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151'
    },
    rulesInfo: {
      padding: '16px',
      background: 'linear-gradient(135deg, #ecfdf5 0%, #dcfce7 100%)',
      borderRadius: '12px',
      border: '2px solid #10b981',
      marginTop: '20px'
    },
    rulesTitle: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#065f46',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    rulesList: {
      fontSize: '14px',
      color: '#047857',
      margin: 0,
      paddingLeft: '20px',
      lineHeight: '1.6'
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginTop: '20px'
    },
    statCard: {
      padding: '16px',
      background: 'linear-gradient(135deg, #fefbff 0%, #f3e8ff 100%)',
      borderRadius: '12px',
      border: '2px solid #a855f7',
      textAlign: 'center'
    },
    statTitle: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#6b21a8',
      marginBottom: '8px'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#4c1d95'
    }
  };

  const terrainColors = {
    forest: '#15803d',
    pasture: '#84cc16',
    grain: '#fbbf24',
    hill: '#dc2626',
    mountain: '#6b7280',
    desert: '#d97706'
  };

  const terrainNames = {
    forest: 'Wood',
    pasture: 'Sheep', 
    grain: 'Wheat',
    hill: 'Brick',
    mountain: 'Ore',
    desert: 'Desert'
  };

  // Enhanced Catan board generation logic with proper rules
  const generateRandomBoard = (difficulty, seed) => {
    const seededRandom = (str) => {
      let hash = 0;
      if (str) {
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = ((hash << 5) - hash) + char;
          hash = hash & hash;
        }
      }
      const x = Math.sin(hash + Date.now()) * 10000;
      return x - Math.floor(x);
    };

    let currentSeed = seed ? seed + Date.now().toString() : Date.now().toString();
    const random = () => seededRandom(currentSeed++);

    // Official Catan terrain distribution
    const terrainTiles = [
      'forest', 'forest', 'forest', 'forest',
      'pasture', 'pasture', 'pasture', 'pasture',
      'grain', 'grain', 'grain', 'grain',
      'hill', 'hill', 'hill',
      'mountain', 'mountain', 'mountain',
      'desert'
    ];

    // Official number tokens (excluding 7 for desert)
    const numberTokens = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Define the snake pattern order for number placement
    const snakeOrder = [
      [0, 0], [0, 1], [0, 2],           // Top row (left to right)
      [1, 3], [1, 2], [1, 1], [1, 0],  // Second row (right to left)
      [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], // Middle row (left to right)
      [3, 3], [3, 2], [3, 1], [3, 0],  // Fourth row (right to left)
      [4, 0], [4, 1], [4, 2]           // Bottom row (left to right)
    ];

    // Create board positions
    const boardPositions = [
      { row: 0, positions: 3 },
      { row: 1, positions: 4 },
      { row: 2, positions: 5 },
      { row: 3, positions: 4 },
      { row: 4, positions: 3 }
    ];

    let hexes = [];
    let hexId = 0;

    // Initialize hexes
    boardPositions.forEach(({ row, positions }) => {
      for (let col = 0; col < positions; col++) {
        hexes.push({
          id: hexId++,
          row,
          col,
          type: null,
          number: null
        });
      }
    });

    // Shuffle and assign terrain
    const shuffledTerrain = shuffleArray(terrainTiles);
    hexes.forEach((hex, index) => {
      hex.type = shuffledTerrain[index];
    });

    // Strategic desert placement based on difficulty
    const getDesertPosition = () => {
      const edgePositions = [
        [0, 0], [0, 1], [0, 2], // Top edge
        [1, 0], [1, 3],         // Left/right edge
        [2, 0], [2, 4],         // Left/right edge
        [3, 0], [3, 3],         // Left/right edge
        [4, 0], [4, 1], [4, 2]  // Bottom edge
      ];
      
      const innerPositions = [
        [1, 1], [1, 2],         // Inner ring
        [2, 1], [2, 3],         // Inner ring
        [3, 1], [3, 2]          // Inner ring
      ];
      
      const centerPosition = [[2, 2]]; // Center

      let availablePositions;
      if (difficulty === 'easy') {
        availablePositions = edgePositions; // Easier: desert on edges
      } else if (difficulty === 'medium') {
        availablePositions = [...edgePositions, ...innerPositions]; // Medium: anywhere but center
      } else {
        availablePositions = [...innerPositions, ...centerPosition]; // Hard: center or inner ring
      }

      return availablePositions[Math.floor(random() * availablePositions.length)];
    };

    // Place desert strategically
    const desertPos = getDesertPosition();
    const desertHex = hexes.find(hex => hex.row === desertPos[0] && hex.col === desertPos[1]);
    if (desertHex) {
      const currentDesertIndex = hexes.findIndex(hex => hex.type === 'desert');
      if (currentDesertIndex !== -1 && currentDesertIndex !== hexes.indexOf(desertHex)) {
        // Swap desert with target position
        const tempType = hexes[currentDesertIndex].type;
        hexes[currentDesertIndex].type = desertHex.type;
        desertHex.type = tempType;
      }
    }

    // Get adjacent hexes function
    const getAdjacentHexes = (hex) => {
      const adjacent = [];
      const { row, col } = hex;
      
      // Hex grid adjacency (considering offset coordinates)
      const evenRowOffsets = [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]];
      const oddRowOffsets = [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];
      const offsets = row % 2 === 0 ? evenRowOffsets : oddRowOffsets;

      offsets.forEach(([dRow, dCol]) => {
        const newRow = row + dRow;
        const newCol = col + dCol;
        const adjacentHex = hexes.find(h => h.row === newRow && h.col === newCol);
        if (adjacentHex) {
          adjacent.push(adjacentHex);
        }
      });

      return adjacent;
    };

    // Apply snake pattern for number placement
    const shuffledNumbers = shuffleArray(numberTokens);
    let numberIndex = 0;

    // Place numbers following snake pattern
    snakeOrder.forEach(([row, col]) => {
      const hex = hexes.find(h => h.row === row && h.col === col);
      if (hex && hex.type !== 'desert' && hex.number === null) {
        let attempts = 0;
        let numberAssigned = false;
        const maxAttempts = shuffledNumbers.length;
        
        while (!numberAssigned && attempts < maxAttempts && numberIndex < shuffledNumbers.length) {
          const number = shuffledNumbers[numberIndex];
          
          // Check 6s and 8s adjacency constraint
          if (number === 6 || number === 8) {
            const adjacentHexes = getAdjacentHexes(hex);
            const hasAdjacentRedNumber = adjacentHexes.some(adjHex => 
              adjHex.number === 6 || adjHex.number === 8
            );
            
            if (!hasAdjacentRedNumber) {
              hex.number = number;
              numberAssigned = true;
            } else {
              // Try to find a different number for this position
              let foundAlternative = false;
              for (let i = numberIndex + 1; i < shuffledNumbers.length; i++) {
                const altNumber = shuffledNumbers[i];
                if (altNumber !== 6 && altNumber !== 8) {
                  // Swap the numbers in the array
                  shuffledNumbers[numberIndex] = altNumber;
                  shuffledNumbers[i] = number;
                  hex.number = altNumber;
                  numberAssigned = true;
                  foundAlternative = true;
                  break;
                }
              }
              
              if (!foundAlternative) {
                numberIndex++;
                attempts++;
              }
            }
          } else {
            hex.number = number;
            numberAssigned = true;
          }
          
          if (numberAssigned) {
            numberIndex++;
          }
        }
        
        // Fallback: assign any remaining number if constraints can't be satisfied
        if (!numberAssigned && numberIndex < shuffledNumbers.length) {
          hex.number = shuffledNumbers[numberIndex++];
        }
      }
    });

    // Assign any remaining numbers to hexes that don't have numbers yet
    hexes.forEach(hex => {
      if (hex.type !== 'desert' && hex.number === null && numberIndex < shuffledNumbers.length) {
        hex.number = shuffledNumbers[numberIndex++];
      }
    });

    return { hexes, placementRules: getPlacementSummary(hexes) };
  };

  const getPlacementSummary = (hexes) => {
    const redNumbers = hexes.filter(hex => hex.number === 6 || hex.number === 8);
    const desertHex = hexes.find(hex => hex.type === 'desert');
    const numberTokens = hexes.filter(hex => hex.number !== null).length;
    
    // Check for adjacent 6s and 8s
    const getAdjacentHexes = (hex) => {
      const adjacent = [];
      const { row, col } = hex;
      
      const evenRowOffsets = [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]];
      const oddRowOffsets = [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];
      const offsets = row % 2 === 0 ? evenRowOffsets : oddRowOffsets;

      offsets.forEach(([dRow, dCol]) => {
        const newRow = row + dRow;
        const newCol = col + dCol;
        const adjacentHex = hexes.find(h => h.row === newRow && h.col === newCol);
        if (adjacentHex) {
          adjacent.push(adjacentHex);
        }
      });

      return adjacent;
    };

    const hasAdjacentRedNumbers = redNumbers.some(hex => {
      const adjacent = getAdjacentHexes(hex);
      return adjacent.some(adjHex => adjHex.number === 6 || adjHex.number === 8);
    });
    
    return {
      totalHexes: hexes.length,
      numberTokens: numberTokens,
      redNumbers: redNumbers.length,
      desertPlacement: desertHex ? `Row ${desertHex.row + 1}, Col ${desertHex.col + 1}` : 'Not found',
      followsSnakePattern: true,
      noAdjacentRedNumbers: !hasAdjacentRedNumbers
    };
  };

  const generateNewBoard = async () => {
    setIsGenerating(true);
    console.log('Generating new board with difficulty:', difficulty, 'seed:', seed);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newBoard = generateRandomBoard(difficulty, seed);
    setBoardData(newBoard);
    setIsGenerating(false);
  };

  React.useEffect(() => {
    if (!boardData) {
      generateNewBoard();
    }
  }, [boardData]);

  const currentBoard = boardData || { hexes: [], placementRules: {} };

  const Hexagon = ({ hex }) => {
    const getNumberTokenStyle = (number) => {
      const baseStyle = { ...styles.numberToken };
      if (!number) return baseStyle;
      
      if (number === 6 || number === 8) {
        return {
          ...baseStyle,
          backgroundColor: '#dc2626',
          color: 'white'
        };
      }
      return {
        ...baseStyle,
        backgroundColor: '#f8fafc',
        color: '#1e293b',
        border: '2px solid #334155'
      };
    };

    return (
      <div 
        style={{
          ...styles.hexagon,
          backgroundColor: terrainColors[hex.type]
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
          e.currentTarget.style.filter = 'brightness(1.25) saturate(1.4)';
          e.currentTarget.style.zIndex = '10';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.filter = 'brightness(1.1) saturate(1.2)';
          e.currentTarget.style.zIndex = '2';
        }}
        title={terrainNames[hex.type] + (hex.number ? ' (' + hex.number + ')' : '')}
      >
        <div>
          {hex.number && (
            <div style={getNumberTokenStyle(hex.number)}>
              {hex.number}
            </div>
          )}
        </div>
      </div>
    );
  };

  const BoardLayout = () => {
    const rows = [
      currentBoard.hexes.filter(hex => hex.row === 0),
      currentBoard.hexes.filter(hex => hex.row === 1),
      currentBoard.hexes.filter(hex => hex.row === 2),
      currentBoard.hexes.filter(hex => hex.row === 3),
      currentBoard.hexes.filter(hex => hex.row === 4),
    ];

    const getRowOffset = (rowIndex) => {
      if (rowIndex === 0 || rowIndex === 4) return 38;
      if (rowIndex === 1 || rowIndex === 3) return 19;
      return 0;
    };

    return (
      <div style={styles.boardContainer}>
        <div style={{
          ...styles.boardContent,
          transform: 'translateX(-10px)'
        }}>
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              style={{
                ...styles.hexRow,
                marginLeft: getRowOffset(rowIndex) + 'px'
              }}
            >
              {row.map((hex) => (
                <Hexagon key={hex.id} hex={hex} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const getDifficultyButtonStyle = (level) => {
    return {
      ...styles.difficultyButton,
      backgroundColor: difficulty === level ? '#3b82f6' : 'rgba(243, 244, 246, 0.8)',
      color: difficulty === level ? 'white' : '#6b7280',
      transform: difficulty === level ? 'scale(1.02)' : 'scale(1)',
      boxShadow: difficulty === level ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
    };
  };

  const getGenerateButtonStyle = () => {
    return {
      ...styles.generateButton,
      background: isGenerating 
        ? 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)' 
        : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      transform: isGenerating ? 'scale(0.95)' : 'scale(1)',
      cursor: isGenerating ? 'not-allowed' : 'pointer'
    };
  };

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>
            🏝️ Catan Map Generator
          </h1>
        </div>

        {/* Controls */}
        <div style={styles.card}>
          <div style={styles.controlsContainer}>
            {/* Difficulty Selection */}
            <div style={styles.difficultySection}>
              <label style={styles.difficultyLabel}>
                Desert Placement Difficulty
              </label>
              <div style={styles.difficultyButtons}>
                {['easy', 'medium', 'hard'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level)}
                    style={getDifficultyButtonStyle(level)}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div style={styles.actionButtons}>
              <button
                onClick={() => setShowSeedInput(!showSeedInput)}
                style={styles.seedButton}
              >
                <Settings size={18} />
                <span>Seed</span>
              </button>

              <button
                onClick={generateNewBoard}
                disabled={isGenerating}
                style={getGenerateButtonStyle()}
              >
                <Shuffle 
                  size={22} 
                  style={{ 
                    animation: isGenerating ? 'spin 1s linear infinite' : 'none' 
                  }} 
                />
                <span style={{ animation: isGenerating ? 'pulse 1.5s ease-in-out infinite' : 'none' }}>
                  {isGenerating ? 'Generating...' : 'Generate New Board'}
                </span>
              </button>
            </div>
          </div>

          {/* Seed Input */}
          {showSeedInput && (
            <div style={styles.seedInputContainer}>
              <label style={styles.seedInputLabel}>
                Seed (optional - for reproducible maps)
              </label>
              <input
                type="text"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                placeholder="Enter seed value..."
                style={styles.seedInput}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          )}


        </div>

        {/* Board Display */}
        <div style={styles.card}>
          <BoardLayout />
        </div>

        {/* Legend */}
        <div style={styles.card}>
          <h3 style={styles.legendTitle}>
            Resource Legend
          </h3>
          <div style={styles.legendGrid}>
            {Object.entries(terrainNames).map(([terrain, name]) => (
              <div 
                key={terrain} 
                style={styles.legendItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  ...styles.legendColor,
                  backgroundColor: terrainColors[terrain]
                }} />
                <span style={styles.legendName}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default CatanMapGenerator;
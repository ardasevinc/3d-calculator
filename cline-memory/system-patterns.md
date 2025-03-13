# System Patterns

## Architecture Overview
The 3D calculator application follows a component-based architecture with clear separation of concerns:

```
├── Components
│   ├── Calculator (main 3D scene)
│   ├── CalculatorButton (reusable 3D button)
│   ├── Scene (handles Three.js canvas setup)
├── Hooks
│   └── useCalculator (calculator logic)
```

## Key Technical Decisions

### 1. Three.js Integration
- **React Three Fiber**: Used for declarative Three.js scene creation within React
- **Isometric Camera**: Fixed isometric perspective with disabled controls
- **Custom 3D Components**: Building reusable 3D UI elements for calculator buttons

### 2. State Management
- **React Hooks**: Local state management using React's useState
- **Calculator Logic**: Separated from rendering logic through custom hooks
- **Event System**: Click/touch events mapped to 3D object interactions

### 3. Rendering Approach
- **Canvas Rendering**: Full-screen canvas with responsive sizing
- **Performance Optimization**: Minimal re-renders through proper component design
- **Lighting and Materials**: 
  - Ambient light for overall illumination
  - Directional light for shadows and depth
  - Standard materials for consistent look

### 4. Component Structure
- **Scene**: Handles Three.js setup and camera configuration
- **Calculator**: Manages layout and composition of calculator elements
- **CalculatorButton**: Reusable 3D button with hover and press states

## Design Patterns
- **Component Composition**: Building complex UI from simple reusable components
- **Singleton Scene**: Single Three.js scene managed through context
- **Observer Pattern**: For tracking calculator state changes
- **Strategy Pattern**: For different calculation operations
- **Custom Hook Pattern**: For separating calculator logic from UI 
# System Patterns

## Architecture Overview
The 3D calculator application follows a component-based architecture with clear separation of concerns:

```
├── Components
│   ├── Calculator (main 3D scene)
│   ├── CalculatorButton (reusable 3D button)
│   ├── CalculatorDisplay (result display)
│   └── Scene (handles Three.js canvas setup)
├── Hooks
│   └── useCalculator (calculator logic)
├── Utils
│   └── calculatorUtils (helper functions)
```

## Key Technical Decisions

### 1. Three.js Integration
- **React Three Fiber**: Used for declarative Three.js scene creation within React
- **Isometric Camera**: Fixed isometric perspective rather than free camera movement
- **Custom 3D Components**: Building reusable 3D UI elements for calculator buttons and display

### 2. State Management
- **React Hooks**: Local state management using React's useState and useReducer
- **Calculator Logic**: Separated from rendering logic through custom hooks
- **Event System**: Click/touch events mapped to 3D object interactions

### 3. Rendering Approach
- **Canvas Rendering**: Full-screen canvas with responsive sizing
- **Performance Optimization**: Minimal re-renders through proper component design
- **Lighting and Materials**: Consistent lighting model with PBR materials

### 4. Responsive Design
- **Adaptive Scene**: Scene size and camera position adjust based on viewport
- **Device Detection**: Optimizations for mobile vs desktop interactions
- **Fallback UI**: Simple 2D UI available if 3D rendering is problematic

## Design Patterns
- **Component Composition**: Building complex UI from simple reusable components
- **Singleton Scene**: Single Three.js scene managed through context
- **Observer Pattern**: For tracking calculator state changes
- **Strategy Pattern**: For different calculation operations 
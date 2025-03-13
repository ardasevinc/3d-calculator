# System Patterns

## Architecture Overview
The 3D calculator application follows a component-based architecture with clear separation of concerns:

```
├── App
│   └── Page (NextJS client component)
├── Components
│   ├── Three
│   │   ├── Calculator (main 3D calculator component)
│   │   ├── CalculatorButton (reusable 3D button)
│   │   └── Scene (handles Three.js canvas setup)
├── Hooks
│   └── useCalculator (calculator logic)
```

## Key Technical Decisions

### 1. Three.js Integration
- **React Three Fiber**: Used for declarative Three.js scene creation within React
- **Isometric Camera**: Fixed isometric perspective with disabled controls
- **Custom 3D Components**: Building reusable 3D UI elements for calculator buttons
- **WebGL Context Optimization**: Custom settings to prevent context loss during rendering

### 2. State Management
- **React Hooks**: Local state management using React's useState
- **Calculator Logic**: Separated from rendering logic through custom hooks
- **Event System**: Click/touch events mapped to 3D object interactions

### 3. NextJS Integration
- **Client Components**: All Three.js components marked with "use client" directive
- **Dynamic Imports**: Using Next.js dynamic imports with SSR disabled for Three.js components
- **Component Structure**: Careful component organization to prevent nested Canvas components
- **SSR Considerations**: Handling client-only features correctly in the Next.js app router

### 4. Rendering Approach
- **Canvas Rendering**: Full-screen canvas with responsive sizing
- **Performance Optimization**: 
  - Minimal re-renders through proper component design
  - Optimized WebGL context settings
  - Proper component lifecycle management with keys
- **Lighting and Materials**: 
  - Ambient light for overall illumination
  - Directional light for shadows and depth
  - Standard materials for consistent look

### 5. Component Structure
- **Scene**: Handles Three.js setup and camera configuration
- **Calculator**: Manages layout and composition of calculator elements
- **CalculatorButton**: Reusable 3D button with hover and press states

## Design Patterns
- **Component Composition**: Building complex UI from simple reusable components
- **Singleton Scene**: Single Three.js scene managed through context
- **Observer Pattern**: For tracking calculator state changes
- **Strategy Pattern**: For different calculation operations
- **Custom Hook Pattern**: For separating calculator logic from UI
- **Dynamic Imports**: For code-splitting and client-only component loading 
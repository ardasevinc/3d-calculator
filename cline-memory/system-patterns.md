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
  - *Planned revision: Enable camera controls with reasonable limits*
- **Custom 3D Components**: Building reusable 3D UI elements for calculator buttons
- **WebGL Context Optimization**: Custom settings to prevent context loss during rendering
  - *Planned revision: Adjust alpha setting to fix black background issue*
- **Text Rendering**: Using drei's Text component for display and labels
  - *Planned revision: Improve text visibility and positioning*

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
- **Background**: 
  - *Current issue: Black background due to WebGL context settings*
  - *Planned approach: Enable alpha or add scene background*
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

### 6. Camera and Controls
- **Current Implementation**: Fixed isometric camera with disabled controls
- **Identified Issue**: Users need ability to pan, zoom, and rotate
- **Planned Approach**: 
  - Enable OrbitControls with appropriate settings
  - Set reasonable limits for rotation, zoom, and panning
  - Implement smooth damping for better user experience
  - Consider adding reset button to return to default view

### 7. Text and Display System
- **Current Implementation**: Text element in 3D space showing calculator input
- **Identified Issue**: Text not visible when entering numbers
- **Planned Approach**:
  - Improve text positioning and scaling
  - Ensure proper contrast between text and background
  - Consider implementing a billboard approach for text always facing camera
  - Add padding and formatting for better number display

### 8. Rendering Optimization
- **Current Issue**: Excessive re-rendering causing display numbers to flash when buttons are clicked
- **Potential Causes**:
  - Component structure not optimized for minimal re-renders
  - State updates triggering full component tree re-renders
  - Inefficient React component lifecycle management
- **Planned Approach**:
  - Implement React.memo() for components that don't need to re-render
  - Consider using useReducer instead of multiple useState hooks
  - Separate display component from interactive components
  - Add proper transitions for smoother state updates
  - Optimize Three.js scene graph to minimize unnecessary updates

## Design Patterns
- **Component Composition**: Building complex UI from simple reusable components
- **Singleton Scene**: Single Three.js scene managed through context
- **Observer Pattern**: For tracking calculator state changes
- **Strategy Pattern**: For different calculation operations
- **Custom Hook Pattern**: For separating calculator logic from UI
- **Dynamic Imports**: For code-splitting and client-only component loading
- **Memoization Pattern**: To prevent unnecessary re-renders 
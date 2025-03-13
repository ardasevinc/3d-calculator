# Technical Context

## Core Technologies

### Frontend Framework
- **React 19**: Latest version with improved performance features
- **Next.js 15**: For server-side rendering and optimized production builds
- **TypeScript**: For type safety and improved developer experience

### 3D Technologies
- **Three.js**: Core 3D library for creating and displaying 3D content
- **React Three Fiber**: React reconciler for Three.js
- **@react-three/drei**: For useful helpers like Text and OrbitControls

### Styling
- **Tailwind CSS 4**: For styling 2D UI elements and layout
- **Three.js Materials**: Standard materials for 3D elements

## Development Environment
- **Next.js Dev Server**: With Turbopack for faster development
- **ESLint**: For code quality and consistency
- **TypeScript**: For static type checking

## Technical Constraints

### Performance Considerations
- **Mobile Performance**: Need to optimize for mobile GPUs
- **Render Optimization**: Minimize unnecessary re-renders in the 3D scene
- **Asset Size**: Keep 3D assets lightweight for fast loading

### Browser Compatibility
- **WebGL Support**: Required for Three.js rendering
- **Modern Browsers**: Focus on modern browsers with good WebGL support
- **Touch Input**: Support for both mouse and touch interactions

### Accessibility
- **Keyboard Navigation**: Ensure calculator is usable with keyboard
- **Screen Reader Compatibility**: Provide appropriate ARIA labels
- **Fallback Mode**: Consider options for users without WebGL support

## Dependencies
- React, React DOM
- Next.js
- Three.js
- React Three Fiber
- @react-three/drei
- TypeScript
- Tailwind CSS

## Build and Deployment
- Next.js production build process
- Static export option if needed 
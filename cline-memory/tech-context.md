# Tech Context

## Technologies Used

### Core Technologies
- **Next.js**: React framework with server-side rendering capabilities
  - Using App Router architecture
  - Client/Server component model
- **React**: UI component library
  - Functional components with hooks
  - Dynamic imports for code splitting
- **Three.js**: 3D rendering library
  - WebGL-based rendering
  - Custom geometries and materials
- **React Three Fiber**: React renderer for Three.js
  - Declarative Three.js scene creation
  - Integration with React component lifecycle
- **React Three Drei**: Helper components for React Three Fiber
  - Text component for 3D text
  - OrbitControls for camera controls

### Development Tools
- **TypeScript**: Typed JavaScript for improved developer experience
- **ES6+**: Modern JavaScript features
- **TailwindCSS**: Utility-first CSS framework for styling

## Technical Requirements

### Browser Support
- Modern browsers with WebGL support
- Chrome, Firefox, Safari, Edge (latest versions)

### Performance Considerations
- Target 60fps for smooth animations
- Optimize 3D rendering for mobile devices
- Minimize unnecessary re-renders

### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Development Environment
- **Node.js**: JavaScript runtime
- **npm**: Package manager
- **Next.js CLI**: Project scaffolding and development tools

## Implementation Details

### Component Structure
- Client components with "use client" directive for Three.js components
- Dynamic imports with SSR disabled for 3D elements
- Proper nesting to avoid Canvas component conflicts

### Key Configurations
- **WebGL Context Options**:
  - antialias: true (for smoother edges)
  - alpha: false (performance optimization)
  - preserveDrawingBuffer: true (prevents context loss)
  - powerPreference: "high-performance" (favors dedicated GPU)
- **Camera Settings**:
  - Fixed isometric view
  - Disabled rotation for consistent experience

### State Management
- React hooks for local component state
- Custom hooks for calculator logic
- Prop drilling for component communication

## Dependencies
- @react-three/fiber: React Three.js renderer
- @react-three/drei: Useful helpers for React Three Fiber
- three: 3D graphics library
- react, react-dom: UI component library
- next: React framework
- typescript: Type system
- tailwindcss: CSS utility framework 
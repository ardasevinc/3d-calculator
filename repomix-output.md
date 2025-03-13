This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded

## Additional Info

# Directory Structure
```
cline-memory/
  active-context.md
  product-context.md
  progress.md
  project-brief.md
  system-patterns.md
  tech-context.md
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    three/
      calculator-button.tsx
      calculator.tsx
      scene.tsx
  hooks/
    use-calculator.ts
.clinerules
.gitignore
.repomixignore
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
README.md
repomix.config.json
tsconfig.json
```

# Files

## File: cline-memory/active-context.md
````markdown
# Active Context

## Current Focus
We have implemented the core components of the 3D calculator and resolved several important rendering issues:
- Scene component with isometric camera setup
- Calculator component with 3D layout
- Interactive 3D buttons with hover and press animations
- Calculator logic using custom hooks
- Fixed client-side component directives for Next.js
- Optimized WebGL context to prevent context loss

However, several visual and interaction issues have emerged:
- Black background instead of expected light background
- Camera controls (pan, zoom, rotate) are currently disabled
- Calculator display text not visible when entering numbers
- Numbers flash when buttons are clicked (excessive re-rendering)

## Recent Changes
- Created Scene component with fixed isometric camera view
- Implemented Calculator component with 3D layout and materials
- Created CalculatorButton component with interactive states
- Set up calculator logic with useCalculator hook
- Updated main page to display the calculator
- Added "use client" directives to components using client-side features
- Optimized WebGL context settings to prevent context loss
- Fixed nested Canvas components issue by restructuring component hierarchy
- Added proper component keys for stable rendering

## Current Status
- Basic 3D calculator structure is implemented
- Core calculator functionality is working
- Interactive 3D buttons with visual feedback
- Isometric camera view is fixed and working
- Fixed rendering errors related to Next.js client/server components
- Stabilized WebGL context to prevent context loss on page updates
- Visual issues with background color and text visibility need to be addressed
- Camera controls need to be enabled for better user interaction
- Re-rendering optimization needed to prevent display flashing

## Active Decisions
1. **Camera Setup**: Using fixed isometric view with disabled controls for consistent perspective
   - Need to revise to allow user camera control with reasonable limits
2. **Button Layout**: Standard calculator layout with 3D buttons
3. **Visual Design**: Modern calculator style with:
   - Light gray body
   - Black display
   - Orange operator buttons
   - Gray function buttons
   - White number buttons
4. **Interaction Model**: 3D buttons with hover and press animations
5. **Next.js Integration**: All Three.js components marked as client components with "use client" directive
6. **WebGL Context**: Optimized settings with preserveDrawingBuffer and high-performance preference
   - Need to revise alpha setting to fix black background issue
7. **Rendering Optimization**: 
   - Need to implement better component memoization
   - Improve state management to reduce unnecessary re-renders
   - Consider separating display from interactive elements

## Next Steps

### Immediate Tasks
1. Fix black background issue by adjusting WebGL context settings
2. Enable camera controls (pan, zoom, rotate) with appropriate limits
3. Fix display text visibility issue for calculator input
4. Optimize rendering to prevent display number flashing
5. Add shadows and improve lighting
6. Implement button press animations

### Secondary Tasks
1. Add sound effects for interactions
2. Add keyboard support
3. Implement responsive adjustments
4. Add accessibility features
5. Optimize performance

## Open Questions
- Should we add more visual feedback for operations?
- Do we need to implement extended calculator functions?
- Should we add a background or environment to the scene? 
- What are the appropriate limits for camera controls to maintain good UX?
````

## File: cline-memory/product-context.md
````markdown
# Product Context

## Purpose
This 3D calculator application serves as a creative demonstration of Three.js capabilities in a practical web application. It transforms an everyday utility (calculator) into an engaging 3D experience while maintaining full functionality.

## Problems Solved
1. **Engagement**: Standard calculators are functional but visually unengaging. The 3D isometric approach creates a visually interesting experience that draws users in.
2. **Learning**: The project showcases how to implement practical UI interactions in a 3D environment using Three.js and React.
3. **Demonstration**: Serves as a portfolio piece demonstrating technical skill in 3D web development.

## Target Users
- Web developers interested in Three.js examples
- Portfolio viewers and potential employers/clients
- Users who appreciate creative approaches to everyday tools

## User Experience Goals
- **Intuitive**: Despite the 3D perspective, the calculator should remain easy to use
- **Responsive**: Work well across device sizes, adjusting the 3D scene appropriately 
- **Visually Polished**: Professional aesthetic with attention to lighting, materials, and animations
- **Performance**: Maintain smooth performance even on mid-range devices
- **Accessible**: Core functionality should be accessible even to users who might have difficulty with 3D interfaces
````

## File: cline-memory/progress.md
````markdown
# Progress

## Project Timeline
- **Phase 1** ✅ Project initialization and setup
- **Phase 2** ✅ Basic 3D scene and calculator structure
- **Phase 3** ✅ Calculator functionality implementation
- **Phase 4** ⏳ Visual refinement and interaction polish
- **Phase 5** 📅 Responsive design and optimization

## Completed Work
- ✅ Project initialized with Next.js
- ✅ Three.js and React Three Fiber dependencies installed
- ✅ Memory files documentation created
- ✅ Scene component with isometric camera
- ✅ Calculator component with 3D layout
- ✅ CalculatorButton component with interactions
- ✅ Calculator logic implementation
- ✅ Basic styling and materials
- ✅ Fixed client-side directives for Next.js components
- ✅ Resolved WebGL context loss issues
- ✅ Fixed component nesting issues causing rendering errors

## In Progress
- ⏳ Improving visual feedback and animations
- ⏳ Enhancing lighting and shadows
- ⏳ Fixing visual issues (black background, input display visibility)
- ⏳ Improving camera controls for better user interaction
- ⏳ Optimizing component rendering to prevent flashing

## Pending Work
- 📅 Fix black background issue 
- 📅 Enable camera controls (pan, zoom, rotate)
- 📅 Fix calculator display text visibility
- 📅 Optimize rendering to prevent display flashing
- 📅 Add shadows and improve lighting
- 📅 Implement button press animations
- 📅 Add sound effects for interactions
- 📅 Add keyboard support
- 📅 Implement responsive adjustments
- 📅 Add accessibility features
- 📅 Optimize performance
- 📅 Add background/environment to scene

## Known Issues
- ✅ Next.js client/server component errors (FIXED)
- ✅ WebGL context loss after initial render (FIXED)
- ⚠️ Black background instead of expected light background
- ⚠️ Camera controls (pan, zoom, rotate) are disabled
- ⚠️ Calculator display text not visible when entering numbers
- ⚠️ Excessive re-rendering causing display numbers to flash when buttons are clicked

## Milestones
- 🎯 **Milestone 1**: ✅ Basic 3D calculator model rendered in isometric view
- 🎯 **Milestone 2**: ✅ Interactive buttons with visual feedback
- 🎯 **Milestone 3**: ✅ Functional calculator operations
- 🎯 **Milestone 4**: ⏳ Polished visual design with animations
- 🎯 **Milestone 5**: 📅 Responsive, accessible, optimized application
````

## File: cline-memory/project-brief.md
````markdown
# Project Brief: 3D Calculator

## Overview
Build a functional 3D calculator using Three.js in an isometric orientation. The calculator will provide standard arithmetic operations in a visually engaging 3D environment.

## Core Requirements
1. Create a visually appealing 3D calculator with an isometric view
2. Implement standard calculator functionality (addition, subtraction, multiplication, division)
3. Provide intuitive user interaction with 3D buttons
4. Display calculation results in a 3D screen/display area
5. Ensure responsive design that works across devices

## Technology Stack
- React 19
- Next.js 15
- Three.js
- React Three Fiber
- TypeScript
- Tailwind CSS
- Bun v1.x

## Success Criteria
- The calculator functions correctly, performing accurate calculations
- 3D rendering is smooth and visually appealing
- User interactions feel natural and intuitive
- The isometric orientation provides an engaging perspective
- The application is responsive and works well on different devices
````

## File: cline-memory/system-patterns.md
````markdown
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
````

## File: cline-memory/tech-context.md
````markdown
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

### Camera Controls (Planned Updates)
- Enable OrbitControls with:
  - enableZoom: true (allow zooming with limits)
  - enablePan: true (allow panning with limits)
  - enableRotate: true (allow rotation with limits)
  - dampingFactor: Add damping for smoother controls
  - minDistance/maxDistance: Set zoom limits
  - minPolarAngle/maxPolarAngle: Set vertical rotation limits
  - minAzimuthAngle/maxAzimuthAngle: Set horizontal rotation limits

### Text Rendering (Planned Updates)
- Improve Text component configuration:
  - Review position, size, and orientation
  - Ensure visibility against display background
  - Consider billboard effect for text always facing camera
  - Improve number formatting for calculator display

### Background Options (Planned Updates)
- Options to fix black background:
  - Enable alpha in WebGL context
  - Set background color in Canvas component
  - Add subtle gradient or environment to scene
  - Consider adding a skybox or background mesh

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
````

## File: public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: src/app/globals.css
````css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
````

## File: src/app/page.tsx
````typescript
"use client";

import dynamic from 'next/dynamic';

const Calculator = dynamic(() => import('@/components/three/calculator').then(mod => mod.Calculator), { ssr: false });

export default function Page() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-2xl max-h-2xl">
        <Calculator key="calculator-3d" />
      </div>
    </main>
  );
}
````

## File: src/components/three/calculator-button.tsx
````typescript
"use client";

import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';

interface CalculatorButtonProps {
  position: [number, number, number];
  label: string;
  color?: string;
  hoverColor?: string;
  onClick: () => void;
  width?: number;
  height?: number;
  depth?: number;
}

export const CalculatorButton = ({
  position,
  label,
  color = '#f0f0f0',
  hoverColor = '#d0d0d0',
  onClick,
  width = 1,
  height = 1,
  depth = 0.2,
}: CalculatorButtonProps) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const buttonRef = useRef<Group>(null);
  
  // Animation for pressed state
  useFrame(() => {
    if (!buttonRef.current) return;
    
    if (pressed) {
      buttonRef.current.position.y = -0.05;
    } else {
      buttonRef.current.position.y = 0;
    }
  });

  const handlePointerDown = () => {
    setPressed(true);
  };

  const handlePointerUp = () => {
    setPressed(false);
    onClick();
  };

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
    setPressed(false);
  };

  return (
    <group position={position}>
      <group 
        ref={buttonRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {/* Button body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[width, height, depth]} />
          <meshStandardMaterial 
            color={hovered ? hoverColor : color} 
            roughness={0.5} 
            metalness={0.1}
          />
        </mesh>
        
        {/* Button label */}
        <Text
          position={[0, 0, depth / 2 + 0.01]}
          fontSize={0.5}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </group>
  );
};
````

## File: src/components/three/calculator.tsx
````typescript
"use client";

import { useCalculator } from '@/hooks/use-calculator';
import { CalculatorButton } from './calculator-button';
import { Scene } from './scene';
import { Text } from '@react-three/drei';
import { Suspense } from 'react';

export const Calculator = () => {
  const {
    displayValue,
    clearAll,
    clearEntry,
    inputDigit,
    inputDecimal,
    toggleSign,
    inputPercent,
    performOperation,
  } = useCalculator();

  const buttonLayout = [
    ['C', 'CE', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '='],
  ];

  const CalculatorContent = () => (
    <group position={[0, 0, 0]}>
      {/* Calculator body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6, 8, 0.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Display */}
      <mesh position={[0, 3, 0.26]} castShadow receiveShadow>
        <boxGeometry args={[5, 1.5, 0.1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Display text */}
      <Text
        position={[0, 3, 0.27]}
        fontSize={0.8}
        color="white"
        anchorX="right"
        anchorY="middle"
      >
        {displayValue}
      </Text>

      {/* Buttons */}
      {buttonLayout.map((row, rowIndex) =>
        row.map((label, colIndex) => {
          const x = (colIndex - 1.5) * 1.5;
          const y = (1.5 - rowIndex) * 1.5;
          const isOperator = ['+', '-', '*', '/', '='].includes(label);
          const isClear = label === 'C' || label === 'CE';

          const handleClick = () => {
            switch (label) {
              case 'C':
                clearAll();
                break;
              case 'CE':
                clearEntry();
                break;
              case '±':
                toggleSign();
                break;
              case '%':
                inputPercent();
                break;
              case '.':
                inputDecimal();
                break;
              case '=':
                performOperation(null);
                break;
              case '+':
              case '-':
              case '*':
              case '/':
                performOperation(label as '+' | '-' | '*' | '/');
                break;
              default:
                inputDigit(label);
            }
          };

          return (
            <CalculatorButton
              key={`${rowIndex}-${colIndex}`}
              position={[x, y, 0.26]}
              label={label}
              color={isOperator ? '#ff9500' : isClear ? '#a5a5a5' : '#f0f0f0'}
              hoverColor={isOperator ? '#ffaa33' : isClear ? '#b5b5b5' : '#e0e0e0'}
              onClick={handleClick}
              width={1.2}
              height={1.2}
            />
          );
        })
      )}
    </group>
  );

  return (
    <Suspense fallback={<div className="w-full h-full bg-gray-200" />}>
      <Scene>
        <CalculatorContent />
      </Scene>
    </Suspense>
  );
};
````

## File: src/components/three/scene.tsx
````typescript
"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ReactNode } from 'react';

interface SceneProps {
  children?: ReactNode;
}

export const Scene = ({ children }: SceneProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [10, 10, 10],
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
        className="w-full h-full"
        gl={{ 
          antialias: true,
          alpha: false,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance" 
        }}
        shadows
        dpr={[1, 2]}
      >
        {/* Set up lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        
        {/* Set up isometric camera controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          target={[0, 0, 0]}
        />
        
        {/* Render children (calculator components) */}
        {children}
      </Canvas>
    </div>
  );
};
````

## File: src/hooks/use-calculator.ts
````typescript
"use client";

import { useState } from 'react';

type OperationType = '+' | '-' | '*' | '/' | null;

interface CalculatorState {
  displayValue: string;
  previousValue: number | null;
  operation: OperationType;
  waitingForOperand: boolean;
}

export const useCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    displayValue: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  });

  const clearAll = () => {
    setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  };

  const clearEntry = () => {
    setState({
      ...state,
      displayValue: '0',
    });
  };

  const inputDigit = (digit: string) => {
    const { displayValue, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        displayValue: digit,
        waitingForOperand: false,
      });
    } else {
      setState({
        ...state,
        displayValue: displayValue === '0' ? digit : displayValue + digit,
      });
    }
  };

  const inputDecimal = () => {
    const { displayValue, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        displayValue: '0.',
        waitingForOperand: false,
      });
      return;
    }

    if (!displayValue.includes('.')) {
      setState({
        ...state,
        displayValue: displayValue + '.',
      });
    }
  };

  const toggleSign = () => {
    const { displayValue } = state;
    const newValue = parseFloat(displayValue) * -1;

    setState({
      ...state,
      displayValue: String(newValue),
    });
  };

  const inputPercent = () => {
    const { displayValue } = state;
    const value = parseFloat(displayValue);
    
    setState({
      ...state,
      displayValue: String(value / 100),
    });
  };

  const performOperation = (nextOperation: OperationType) => {
    const { displayValue, previousValue, operation } = state;
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setState({
        ...state,
        previousValue: inputValue,
        operation: nextOperation,
        waitingForOperand: true,
      });
      return;
    }

    let newValue: number;
    if (operation === '+') {
      newValue = previousValue + inputValue;
    } else if (operation === '-') {
      newValue = previousValue - inputValue;
    } else if (operation === '*') {
      newValue = previousValue * inputValue;
    } else if (operation === '/') {
      newValue = previousValue / inputValue;
    } else {
      newValue = inputValue;
    }

    setState({
      ...state,
      displayValue: String(newValue),
      previousValue: nextOperation ? newValue : null,
      operation: nextOperation,
      waitingForOperand: Boolean(nextOperation),
    });
  };

  return {
    displayValue: state.displayValue,
    clearAll,
    clearEntry,
    inputDigit,
    inputDecimal,
    toggleSign,
    inputPercent,
    performOperation,
  };
};
````

## File: .clinerules
````
# 3D Calculator Project Rules

## File Structure
- Use kebab-case for filenames
- Use PascalCase for component names
- Prefer named exports unless it's a page component (Next.js routes)

## Component Organization
- 3D components in `src/components/three`
- UI components in `src/components/ui`
- Shared components in `src/components/shared`

## Styling Conventions
- Use Tailwind CSS for UI components
- Use Three.js materials for 3D styling
- Keep design consistent with a cohesive color palette

## Code Patterns
- Separate calculator logic from rendering
- Use custom hooks for reusable logic
- Implement proper TypeScript typing

## Project-Specific Conventions
- Use isometric camera setup for all 3D scenes
- Keep 3D assets simple and performant
- Ensure all interactive elements have proper feedback
- Follow accessibility best practices even for 3D interfaces 
- use bun instead of npm.
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: .repomixignore
````
# Add patterns to ignore here, one per line
# Example:
# *.log
# tmp/
.cursor
.git
node_modules
````

## File: eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
````

## File: package.json
````json
{
  "name": "3d-calculator",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "22.x",
    "bun": "1.x"
  },
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@react-three/drei": "^10.0.4",
    "@react-three/fiber": "^9.1.0",
    "next": "15.2.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "three": "^0.174.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/three": "^0.174.0",
    "eslint": "^9",
    "eslint-config-next": "15.2.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: postcss.config.mjs
````
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: repomix.config.json
````json
{
  "output": {
    "filePath": "repomix-output.md",
    "style": "markdown",
    "parsableStyle": false,
    "fileSummary": true,
    "directoryStructure": true,
    "removeComments": false,
    "removeEmptyLines": false,
    "compress": false,
    "topFilesLength": 5,
    "showLineNumbers": false,
    "copyToClipboard": false
  },
  "include": [],
  "ignore": {
    "useGitignore": true,
    "useDefaultPatterns": true,
    "customPatterns": []
  },
  "security": {
    "enableSecurityCheck": true
  },
  "tokenCount": {
    "encoding": "o200k_base"
  }
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

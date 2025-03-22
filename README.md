## Cplusplus.com
CplusPlus.com is a React-based web application designed to provide resources for C++ programming language learners. The project includes several key features:

1. **Home Page**: Features a sidebar navigation, featured content slider, and latest forum activity.
2. **Reference Section**: Offers comprehensive documentation on C++ libraries including C Library, Containers, Input/Output streams, Multi-threading, and other miscellaneous headers.
3. **Articles Page**: Displays categorized articles with pagination, filtering options, and a responsive design for mobile users.
4. **Tutorials**: Educational content for learning C++ from basics to advanced topics.
5. **Forum**: Community interaction space for discussions about C++ programming.

The application uses modern React features including hooks (useState, useEffect), React Router for navigation, and Framer Motion for animations.
The project follows a component-based architecture with separate CSS files for styling each component.

## Project Structure
- `/src`
  - `/assets` - Contains images and other static files
  - `/components` - React components (Home, Reference, ArticlesList, etc.)
  - `/DataInfo` - JavaScript files containing application data (referenceData, containerData, etc.)
  - Standard React files (App.jsx, index.css, etc.)

## Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/KhushiBokade/CplusPlus.com.git
   cd CplusPlus.com
   ```

2. **Install dependencies**
   ```
   npm install
   ```
   Key dependencies include:
   - React
   - React Router Dom
   - Framer Motion
   - React Icons

3. **Start the development server**
   ```
   npm run dev
   ```
   The project appears to be using Vite as a build tool based on the presence of vite.config.js.

4. **Build for production**
   ```
   npm run build
   ```

5. **Project navigation**
   The application uses React Router with the following routes:
   - `/` - Home page
   - `/tutorial` - Tutorials section
   - `/reference` - C++ Reference documentation
   - `/article` - Articles listing page
   - `/forum` - Community forum

## Technical Details
- **React Framework**: Uses functional components with hooks
- **Styling**: Component-specific CSS files
- **Animation**: Framer Motion for page transitions and interactive elements
- **Navigation**: React Router for application routing
- **Data Management**: Imports data from JavaScript files in the DataInfo directory
- **Responsive Design**: Mobile-friendly with adaptive layouts

The project implements a modern, responsive user interface for C++ learning resources with smooth animations and an organized structure for educational content.

This project implements a fully responsive web page for MediBuddy Labs based on a Figma design. The page is built using React, TypeScript, and Tailwind CSS to ensure a clean, maintainable, and modern web application.

Features
Responsive Design: The page adapts to various screen sizes, including mobile, tablet, and desktop.
API Integration: Fetches dynamic content using an external API.
Dynamic Components: Components like "Featured Health Check-up Packages" and "Book Lab Tests" are rendered based on API data.
Reusable Components: A modular approach is used with reusable components to maintain consistency.
Image Handling: Includes lazy loading, aspect ratio control, and error handling for images.
Interactivity: Hover effects and responsive grids for better user experience.
Table of Contents
Project Setup
Installation
Project Structure
Components
Responsive Design
API Integration
Deployment
Contributing
License
Project Setup
Follow these steps to get started with the project.

1. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/your-username/medibuddy-labs.git
cd medibuddy-labs
2. Install Dependencies
Make sure you have Node.js and npm installed. Run the following command to install the necessary dependencies:

npm install
Installation
1. Install Required Dependencies
React: A JavaScript library for building user interfaces.
TypeScript: A superset of JavaScript that adds static typing.
Tailwind CSS: A utility-first CSS framework for creating custom designs without writing custom styles.
Axios: A promise-based HTTP client for making API requests.
Run this command to install the dependencies:


npm install react react-dom typescript tailwindcss axios
npm install @types/react @types/react-dom --save-dev
2. Tailwind CSS Setup
Follow these steps to integrate Tailwind CSS:

Generate a Tailwind config file:


npx tailwindcss init
Create a tailwind.config.js file with the following content:

js
Copy code
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add the following lines to your src/index.css to include Tailwind’s utilities:

css
@tailwind base;
@tailwind components;
@tailwind utilities;
Project Structure
The project is organized as follows:

bash
Copy code
src/
├── assets/          # Contains static files such as images
├── components/      # Contains reusable UI components
│   ├── Header.tsx
│   ├── QuickActions.tsx
│   ├── PromoBanner.tsx
│   ├── FeaturedPackages.tsx
│   └── ...          # Other components like FAQ, PopularTests, etc.
├── services/        # Contains API calls and related logic
│   └── api.ts
├── types/           # TypeScript types for better type safety
│   └── index.ts
├── App.tsx          # Main React component
└── index.tsx        # Entry point for React
Components
1. Header
The Header component includes a location selector, search bar, and cart icon.

2. QuickActions
The QuickActions component displays several actions users can take, such as booking tests, checking health check-ups, etc.

3. PromoBanner
This component shows a promotional banner for special offers such as pregnancy care tests.

4. FeaturedPackages
The FeaturedPackages component renders featured health check-up packages dynamically fetched from the API.

5. Other Components
Other components like FAQ, SafetyMeasures, PopularTests, and HowItWorks are also implemented similarly, each dynamically rendering content based on the API response.

Responsive Design
Tailwind CSS is used for creating a fully responsive design that works across all screen sizes.

Grid Layouts: Adjusts grid layouts for mobile, tablet, and desktop using Tailwind’s breakpoints.
Font Sizes: Adjusts font sizes to ensure readability on all screen sizes.
Hover Effects: Provides interactive hover effects for UI elements.
Image Handling: Ensures images are responsive and implement lazy loading for better performance.
API Integration
This application fetches the content of the page using an API endpoint:


https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config
The page_config array from the API contains the components and their associated data. The components are rendered dynamically based on the data fetched from this API.

Example API Call:
ts

import axios from 'axios';

const fetchPageContent = async () => {
  try {
    const response = await axios.get("https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config");
    return response.data;
  } catch (error) {
    console.error("Error fetching page content:", error);
  }
};
Deployment
1. Build the App
To build the app for production, run:

npm run build
2. Hosting
You can deploy the application to platforms like Vercel or Netlify by linking your GitHub repository. These platforms will automatically build and deploy your app.

Contributing
If you wish to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.

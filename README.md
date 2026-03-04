# iPhone 15 Pro Website Clone

A responsive, animated replica of the iPhone 15 Pro website built with React, Tailwind CSS, and GSAP.

## 🚀 Features

-   **Smooth Animations**: Utilizing GSAP (GreenSock Animation Platform) for high-performance animations.
-   **Scroll-Triggered Effects**: Elements animate into view as you scroll using GSAP ScrollTrigger.
-   **Custom Video Carousel**: A bespoke video player component with:
    -   Auto-play functionality.
    -   Progress indicators.
    -   Play/Pause/Replay controls.
    -   Responsive scaling for different device sizes.
-   **Responsive Design**: Fully responsive layout built with Tailwind CSS v3, optimized for mobile, tablet, and desktop.
-   **Modern React Architecture**: Built with React 19 and Vite for lightning-fast development and production builds.

## 🛠️ Tech Stack

-   **Frontend Framework**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
-   **Animations**:
    -   [GSAP](https://gsap.com/) (Core)
    -   [@gsap/react](https://gsap.com/resources/React/)
    -   [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## 📂 Project Structure

```
src/
├── components/        # UI Components
│   ├── Hero.jsx       # Hero section with main video
│   ├── Highlights.jsx # Highlights section wrapper
│   ├── Navbar.jsx     # Responsive navigation bar
│   └── VideoCarousel.jsx # Complex video slider logic
├── constants/         # Static data (nav items, slide content)
├── utils/             # Asset imports and utility functions
├── App.jsx            # Main application entry point
├── index.css          # Tailwind directives and custom styles
└── main.jsx           # React DOM root
```

## ⚡ Getting Started

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd iphone
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at `http://localhost:5173` (or the port shown in your terminal).

## 🎨 Customization

-   **Styling**: Global styles and Tailwind configuration are located in `src/index.css` and `tailwind.config.js`.
-   **Content**: Update `src/constants/index.js` to modify the text, links, and video data used in the carousel and navbar.
-   **Assets**: Add new images or videos to the `public/assets` folder and export them via `src/utils/index.js`.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

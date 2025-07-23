
# GTA VI Landing Page

A cinematic landing page for Grand Theft Auto VI featuring scroll-controlled video playback, character introductions, and smooth GSAP animations. [2](#0-1) 

## Features

- **Scroll-Controlled Video Playback**: Three main video sections with scrub-based playback control [3](#0-2) 
- **Character Introduction Sections**: Animated biographical content for Jason Duval and Lucia Caminos with parallax effects [4](#0-3) 
- **Interactive PostCard**: Hover effects and scroll-triggered video animation [5](#0-4) 
- **Smooth Transitions**: GSAP-powered animations with ScrollTrigger integration [6](#0-5) 

## Tech Stack

- **React** - Component-based UI framework
- **GSAP** - Animation library with ScrollTrigger plugin
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## Project Structure

```
src/
├── App.jsx              # Main app component with section orchestration
├── sections/
│   ├── NavBar.jsx       # Navigation component
│   ├── Hero.jsx         # Hero section
│   ├── FirstVIdeo.jsx   # Intro video with scroll control
│   ├── Jason.jsx        # Jason character introduction
│   ├── SecondVideo.jsx  # Story video section
│   ├── Lucia.jsx        # Lucia character introduction
│   ├── PostCard.jsx     # Interactive postcard element
│   ├── Final.jsx        # Conclusion video
│   └── Outro.jsx        # Final message section
└── index.css            # Global styles and component styling
``` [7](#0-6) 

## Key Components

### Video Components
Three main video sections implement scroll-scrubbing functionality:
- **FirstVideo**: Intro video after hero section [8](#0-7) 
- **SecondVideo**: Story content video [9](#0-8) 
- **Final**: Conclusion video with dual timeline setup [10](#0-9) 

### Character Sections
- **Jason Component**: Features scroll-triggered fade transitions and image parallax [11](#0-10) 
- **Lucia Component**: Implements reversed layout with flexible image positioning [12](#0-11) 

## Installation

```bash
# Clone the repository
git clone https://github.com/kharalnirmal/GTA-VI-Landing-Page.git

# Navigate to project directory
cd GTA-VI-Landing-Page

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

The landing page automatically handles scroll-based interactions. <cite/> Users can scroll through sections to experience:
- Smooth video scrubbing tied to scroll progress
- Character introductions with animated content
- Interactive elements with hover effects

## Animation System

Built with GSAP and ScrollTrigger for:
- **Video Scrubbing**: `currentTime` property animated based on scroll progress [13](#0-12) 
- **Section Pinning**: Sections lock during scroll for cinematic effect [14](#0-13) 
- **Smooth Transitions**: Opacity and transform animations between sections [15](#0-14) 

## Assets Required

- Video files: `output1.mp4`, `output2.mp4`, `output3.mp4`, `postcard-vd.mp4`
- Character images: `jason-1.webp`, `jason-2.webp`, `jason-3.webp`, `lucia-1.webp`, `lucia-2.webp`, `lucia-3.webp`
- UI assets: `logo.webp`, `overlay.webp`, platform logos

## Notes

This project demonstrates advanced web animation techniques using GSAP's ScrollTrigger plugin for creating immersive, scroll-driven experiences. <cite/> The component architecture follows React best practices with hooks for animation lifecycle management. [16](#0-15)  Each video component implements the same scrubbing pattern but with different trigger configurations for varied user experiences.

Wiki pages you might want to explore:
- [Character Introduction Sections (kharalnirmal/GTA-VI-Landing-Page)](/wiki/kharalnirmal/GTA-VI-Landing-Page#3.2)
- [Video Components (kharalnirmal/GTA-VI-Landing-Page)](/wiki/kharalnirmal/GTA-VI-Landing-Page#3.3)

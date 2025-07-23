# GTA VI Landing Page


🌐 **Live Site:** [gta-vi-landing-page-cyan.vercel.app](https://gta-vi-landing-page-cyan.vercel.app)

---

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-green?logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.2-blue?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/github/license/kharalnirmal/gta-vi-landing-page)
![Vite](https://img.shields.io/badge/Vite-Fast%20Builds-ff69b4?logo=vite&logoColor=white)


## ✨ Purpose and Scope

This repository hosts the GTA VI Landing Page, an interactive web application designed to deliver an immersive and animation-rich experience, showcasing characters and content from Grand Theft Auto VI. The landing page incorporates sophisticated scroll-triggered animations, intuitive video playback controls, and a responsive design optimized for various device types. This README provides a high-level overview of the project's fundamental architecture, technology stack, and component relationships. For more in-depth information on specific subsystems, refer to the detailed documentation covering Application Architecture, Section Components, Animation System, and Styling and Design System.






## 🖥️ System Overview

The GTA VI Landing Page is a single-page React application structured around a linear narrative, guiding users through nine sequential sections. Each section is dedicated to a different aspect of the GTA VI experience, from character introductions to interactive media content. The application's high-level architecture is organized as follows:

```
index.html
├── src/main.jsx
└── App.jsx
    ├── GSAP Registration
    ├── ScrollTrigger Plugin
    ├── NavBar.jsx
    ├── Hero.jsx
    ├── FirstVideo.jsx
    ├── Jason.jsx
    ├── SecondVideo.jsx
    ├── Lucia.jsx
    ├── PostCard.jsx
    ├── Final.jsx
    ├── Outro.jsx
    ├── constant/index.js
    ├── useMaskSettings
    └── ComingSoon.jsx
```

**Static Assets:** The project also includes dedicated folders for static assets such as images, videos, and fonts, ensuring efficient loading and management of media content.

**Application Flow and Component Orchestration:** The `App.jsx` file serves as the central orchestrator, managing the sequential rendering and interaction of the various sections. Key source files for understanding the application flow include `src/App.jsx`, `index.html`, and `constant/index.js`.




## 🛠️ Key Technologies and Integration

This application leverages a modern web technology stack to deliver a cinematic user experience. The core technologies and their integration points are detailed below:

| Technology         | Purpose                                     | Integration Point                               |
|--------------------|---------------------------------------------|-------------------------------------------------|
| **React**          | Component architecture and UI rendering     | `src/App.jsx`                                   |
| **GSAP + ScrollTrigger** | Animation engine and scroll-based triggers | `src/App.jsx`                                   |
| **Vite**           | Build tool and development server           | `index.html`                                    |
| **Tailwind CSS**   | Utility-first styling framework             | Component class names                           |
| **React Responsive** | Media query hooks for responsive design     | `constant/index.js`                             |

**Technology Stack Integration:** The integration of these technologies is seamless, with React components utilizing `useGSAP` hooks and GSAP Timelines for complex animations triggered by ScrollTrigger events. Responsive design is managed through `useMaskSettings` and `useMediaQuery` for device detection and adaptive animation configurations. Tailwind CSS classes are extensively used for component styling, and static assets are efficiently loaded and managed.

**Technology Integration and Data Flow:** Key source files illustrating technology integration and data flow include `src/sections/Jason.jsx`, `src/sections/Hero.jsx`, and `constant/index.js`.




## 🏗️ Core Components Architecture

The application adopts a section-based architecture, with `App.jsx` acting as the primary orchestrator, rendering nine distinct sections sequentially. Each section is implemented as a self-contained React component, encapsulating its unique content and animation logic.

**Component Hierarchy and Responsibilities:**

```
App
├── NavBar
├── Hero
├── FirstVideo
├── Jason
├── SecondVideo
├── Lucia
├── PostCard
├── Final
├── Outro
└── ComingSoon
```

Each component plays a specific role in the overall user experience, often integrating with GSAP and ScrollTrigger for dynamic animations. For instance, `useMaskSettings`, `useGSAP`, and `ScrollTrigger` are integral to controlling animation timelines, opacity, transform effects, video scrubbing, and mask animations.

**Component Architecture and Animation Integration:**

| Component              | Primary Function                          | Animation Features                                      |
|------------------------|-------------------------------------------|---------------------------------------------------------|
| **NavBar**             | Navigation header with logo and menu      | Static positioning                                      |
| **Hero**               | Landing section with masking effects      | Complex mask animations, fade transitions               |
| **Jason/Lucia**        | Character introduction sections           | Scroll-triggered image movements, opacity fades         |
| **FirstVideo/SecondVideo/Final** | Video content sections                    | Scroll-controlled video playback                        |
| **PostCard**           | Interactive media showcase                | Video integration                                       |
| **Outro**              | Final messaging section                   | Static content                                          |

Detailed insights into component implementation and animation integration can be found in `src/App.jsx`, `src/sections/Jason.jsx`, and `src/sections/Hero.jsx`.




## 🎬 Animation System Architecture

The application's animation system is robust, built upon GSAP (GreenSock Animation Platform) and its ScrollTrigger plugin. This combination facilitates sophisticated scroll-based interactions, creating a highly engaging user experience.

**GSAP Integration Pattern:**

```
gsap.registerPlugin
├── ScrollTrigger
└── useGSAP Hook
```

**Component Animation Setup:** Animations are meticulously crafted using `gsap.timeline` for sequencing and `gsap.to`/`gsap.set` for individual property changes. The `scrollTrigger` configuration is crucial, defining the trigger element, start/end points, and `scrub` values for smooth, scroll-controlled animations.

**Animation Types:** The system supports a variety of animation types, including:

*   **Opacity Fades:** Smooth transitions for element visibility.
*   **Transform Effects:** Dynamic changes in position, scale, and rotation.
*   **Mask Animations:** Complex circular reveal effects, particularly prominent in the Hero section.
*   **Video Scrubbing:** Direct control over video playback based on scroll position.

**GSAP Animation System and Component Integration:** The animation system provides several key capabilities:

*   **Scroll-triggered animations:** Elements animate based on scroll position.
*   **Video playback control:** Videos scrub forward/backward with scroll.
*   **Complex masking effects:** Circular reveal animations in the Hero section.
*   **Responsive animation parameters:** Different animation settings per device type.

Further details on the animation system can be found in `src/App.jsx`, `src/sections/Jason.jsx`, and `src/sections/Hero.jsx`.




## 📱 Responsive Design System

The application ensures an adaptive and consistent user experience across various devices by dynamically adjusting animations and layout based on device characteristics. This is primarily achieved through the `useMaskSettings` hook, which provides device-specific configurations for GSAP animations.

**Device Configuration Matrix:**

| Device Type | Condition   | Mask Position   | Mask Size     | Use Case         |
|-------------|-------------|-----------------|---------------|------------------|
| **Mobile**  | ≤768px      | `"50% -1500vh"` | `"3100% 3100%"` | Touch interfaces |
| **Tablet**  | 769-1024px  | `"50% -1700vh"` | `"3500% 3500%"` | Medium screens   |
| **Desktop** | >1024px     | `"50% 22%"`     | `"3500% 3500%"` | Large displays   |

This matrix, defined in `constant/index.js`, allows for precise control over how elements are displayed and animated on different screen sizes, ensuring optimal performance and visual fidelity. The `src/sections/Hero.jsx` file further demonstrates the application of these settings.


## 🚀 Live Demo

Experience the GTA VI Landing Page live: [https://gta-vi-landing-page-cyan.vercel.app/](https://gta-vi-landing-page-cyan.vercel.app/)

## 🎮 Gameplay Preview

![GTA VI Retro Style GIF](https://private-us-east-1.manuscdn.com/sessionFile/5wm81iNEXpdvy4yzUFZRae/sandbox/OR4ToyHn12YUYkW6Wbvj4l-images_1753239853196_na1fn_L2hvbWUvdWJ1bnR1L3VwbG9hZC9zZWFyY2hfaW1hZ2VzL0t0aTV4Y29XUkZVMQ.gif?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNXdtODFpTkVYcGR2eTR5elVGWlJhZS9zYW5kYm94L09SNFRveUhuMTJZVVlrVzZXYnZqNGwtaW1hZ2VzXzE3NTMyMzk4NTMxOTZfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzVndiRzloWkM5elpXRnlZMmhmYVcxaFoyVnpMMHQwYVRWNFkyOVhVa1pWTVEuZ2lmIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bK--d-79lpyIkpXc9g0~3bchjztIhL3v4d~g-1u5vvFkMAG10HsasGnjuR5A2IiQkE4g8ZD4qoogE2fLN3S8tNyjbQ6y0Fznz24UYfPSoK6sETwl~0zbaVm20tLEkJcql5bxBS3GpZqVJqkIXgRtshEfe~uPLp8MbazAZszD3p49ZKqJjOcX7OAS~lrTKN5d85LeZA-NWqJ0Dx7aP4ZwtlXEY~rTkqjlcuHZ0XpMP6udH4Dge8jkFm9ShXBIf34G3T~4w-hrRFlhmn6~ZTubK57gnvtuKikrupex9OBurFHUxw5xZQZRKvSY-PCUSwEXemAO8bd7ekODnFxK3ekZiQ__)




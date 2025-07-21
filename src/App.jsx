import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVIdeo from './sections/FirstVIdeo';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <FirstVIdeo />
    
   </main>
  )
}

export default App
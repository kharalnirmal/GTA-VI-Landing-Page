import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVIdeo from './sections/FirstVIdeo';
import Jason from './sections/Jason';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <FirstVIdeo />
    <Jason />
    
   </main>
  )
}

export default App
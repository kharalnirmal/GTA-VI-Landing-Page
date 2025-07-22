import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import FirstVIdeo from './sections/FirstVIdeo';
import Jason from './sections/Jason';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';
import Final from './sections/Final';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <FirstVIdeo />
    <Jason />
    <SecondVideo />
    <Lucia />
    <PostCard/>
    <Final />
    
   </main>
  )
}

export default App
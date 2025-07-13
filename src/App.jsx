import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
    <nav>
        <img className='scale-125' src="./images/nav-logo.svg" alt="nav-logo" />
        <img className='w-10' src="./images/menu.svg" alt="menu" />
    </nav>
   </main>
  )
}

export default App
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
   <main>
    <div>
        <h1 className='text-blue'>Welcome to My React App</h1>
    </div>
   </main>
  )
}

export default App
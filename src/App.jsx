import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub } from "react-icons/fa";
import Card from './components/Card';
import Footer from './components/Footer';
import { megaProjects, miniProjects } from './projects';

function App() {
  const [count, setCount] = useState(0)
  console.log(megaProjects);
  return (
    <div>
      <div className=''>
        <h1 className='text-6xl pb-4 pt-2 mb-10 font-bold text-center  border-b-2 '> All Projects </h1>
        {megaProjects.length &&
          <div className='flex flex-col items-center gap-y-6 mb-6 px-2'>
          <h3 className='text-xl font-bold mt-4 border-b-2 border-b-slate-800'>Mega Projects</h3>
            {megaProjects.map((project) => <Card key={project.id} project={project} />)}
          </div>
        }
        {miniProjects.length &&
          <div className='flex flex-col items-center gap-y-6 mb-6 px-2'>
          <h3 className='text-xl font-bold mt-4 border-b-2 border-b-slate-800'>Mini Projects</h3>
            {miniProjects.map((project) => <Card key={project.id} project={project} />)}
          </div>
        }
        <Footer />
      </div>
    </div>
  )
}

export default App

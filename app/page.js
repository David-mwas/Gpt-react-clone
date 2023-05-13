import Image from 'next/image'
import {SunIcon} from '@heroicons/react/24/solid'
export default function Home() {
  return (
      <div className='flex flex-col items-center text-white h-screen px-2 justify-center'>
        <h1 className='text-5xl font-bold mb-20 '>TalkGpt</h1>
        <div className=''>
          <div>
            <div className='flex flex-col items-center justify-center mb-5'>
               {/* sun icon */}
               <SunIcon className="h-6 w-6 text-blue-500"/>
               <h2>Examples</h2>
             </div>
           <div className='space-y-2'>
           <p className='infoText'>"Explain something to me"</p>
             <p className='infoText'>"What is the different between a dog and a cat?"</p>
             <p className='infoText'>"What is the color of the sun?"</p>
           </div>
          </div>
        </div>
      </div>
    
)
}

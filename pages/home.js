import Image from "next/image"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="bg-[url('https://i.imgur.com/q5aQirs.png')] h-full w-full bg-cover bg-center min-w-fit">
            <div className="container mx-auto flex flex-col h-screen">
                <Navbar />
                <div className="container mx-auto text-white flex flex-col justify-center items-center h-full max-w-3xl">
                    <div className="text-4xl md:text-7xl mb-4">The <span className="text-dark-orange">Halloween</span> Hub</div>
                    <div className="text-lg mx-6 md:text-2xl mb-4">A place to get <span className="text-green">recommendations</span> for all sorts of spooky content!</div>
                    <div className="text-lg mx-6 md:text-2xl mb-4">Looking for a scary <span className="text-light-orange">movie</span> or maybe a <span className="text-light-orange">costume idea</span>?</div>
                    <div className="text-lg mx-6 md:text-2xl mb-4">
                        <button className='mt-12 mb-12 text-4xl font-bold text-white border-4 border-white p-3 rounded-md shadow-button shadow-white hover:text-light-orange hover:border-light-orange hover:shadow-light-orange animate-pulse'>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
import Link from "next/link"
import MediaCard from "../components/MediaCard"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="container mx-auto flex flex-col h-screen bg-slate-500">
            <Navbar />
            <div className="container mx-auto text-white flex flex-row flex-wrap justify-center items-center h-full">
                <MediaCard />
                <MediaCard />
                <MediaCard />
                <MediaCard />
            </div>
        </div>
    </div>
  )
}
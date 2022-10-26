import Link from "next/link"
import { useEffect, useState } from "react"
import MediaCard from "../components/MediaCard"
import Navbar from "../components/Navbar"

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch("/api/videos");
            const res = await response.json();

            setData(res);
        }
        fetchVideos();
    }, [])

    console.log(data);

  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="container mx-auto flex flex-col h-full">
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
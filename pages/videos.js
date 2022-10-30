import Link from "next/link"
import MediaCard from "../components/MediaCard"
import Navbar from "../components/Navbar"

export default function Videos({ videos }) {

  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="container mx-auto flex flex-col h-full">
            <Navbar />
            <div className="container text-white grid place-content-center 2xl:grid-cols-3 2xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 h-full pt-4">
                {
                    videos.map((video) => {
                        return(
                            <MediaCard key={video.id} title={video.title} url={video.url} desc={video.description} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/videos' || 'https://halloweenhub.vercel.app/api/videos')
    const data = await response.json();

    return {
        props: {
            videos: data,
        }
    }
}
import Link from "next/link"
import ImageCard from "../components/ImageCard"
import Navbar from "../components/Navbar"

export default function Movies({ movies }) {

  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="container mx-auto flex flex-col h-full">
            <Navbar />
            <div className="container text-white grid place-content-center 2xl:grid-cols-3 2xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 h-full pt-4">
                {
                    movies.map((movie) => {
                        return(
                            <ImageCard key={movie.id} title={movie.title} img={movie.img} desc={movie.description} rating={movie.rating} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/movies')
    const data = await response.json();

    return {
        props: {
            movies: data,
        }
    }
}
import MediaCard from "../components/MediaCard"
import Navbar from "../components/Navbar"

export default function Games({ games }) {

  return (
    <div className="h-full w-screen bg-gradient-to-t from-purple to-black min-w-fit" >
        <div className="container mx-auto flex flex-col h-full">
            <Navbar />
            <div className="container text-white grid place-content-center 2xl:grid-cols-3 2xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 h-full pt-4">
                {
                    games.map((game) => {
                        return(
                            <MediaCard key={game.id} title={game.title} url={game.url} desc={game.description} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/games')
    const data = await response.json();

    return {
        props: {
            games: data,
        }
    }
}


const MediaCard = () => {
  return (
    <div className="container flex flex-col max-w-md max-h-md min-h-max bg-purple items-center p-6 m-2 rounded-md">
        <iframe width="400" height="260" src="https://www.youtube.com/embed/EbxkOntz2SA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1 className="text-xl pb-6 font-bold text-white">TITLE HERE going to test an absurdly large title so i know how bad this is gonna look</h1>
        <h2 className="text-md">Description oh yea, i forgot that multiple symbols dont get wrapped for some reason, i still have no idea why thats the case but any ways heres the test</h2>
    </div>
  )
}

export default MediaCard
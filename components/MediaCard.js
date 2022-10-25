

const MediaCard = () => {
  return (
    <div className="container flex flex-col max-w-md max-h-md min-h-max bg-black items-center p-6 m-2 rounded-md">
        <h1 className="text-lg">TITLE HERE going to test an absurdly large title so i know how bad this is gonna look</h1>
        <iframe width="400" height="260" src="https://www.youtube.com/embed/EbxkOntz2SA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2 className="text-md">Description oh yea, i forgot that multiple symbols dont get wrapped for some reason, i still have no idea why thats the case but any ways heres the test</h2>
        <span>***** rating</span>
    </div>
  )
}

export default MediaCard
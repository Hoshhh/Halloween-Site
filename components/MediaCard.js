

const MediaCard = ({ id, title, url, desc }) => {
  return (
    <div className="container flex flex-col max-w-md bg-purple items-center p-6 m-2 rounded-md">
        <iframe width="400" height="260" src={url} title="YouTube video player" frameBorder="0" allowfullscreen></iframe>
        <h1 className="text-xl pb-6 font-bold text-white">{title}</h1>
        <h2 className="text-md">{desc}</h2>
    </div>
  )
}

export default MediaCard
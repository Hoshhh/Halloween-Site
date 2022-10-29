import Image from "next/image"

const ImageCard = ({ id, title, img, desc, url }) => {
  return (
    <div className="container flex flex-col max-w-md bg-purple items-center p-6 m-2 rounded-md">
        <img src={img} alt="Movie cover" width="176" height="100"/>
        <h1 className="text-xl pb-6 font-bold text-white">{title}</h1>
        <h2 className="text-md">{desc}</h2>
        <a href={url} target="_blank" rel="noreferrer">{url}</a>
    </div>
  )
}

export default ImageCard
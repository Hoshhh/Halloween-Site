import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [color, setColor] = useState('#F75F1C')

  const handleMouseHover = (e) => {
    setColor('#FF9A00')
  }

  const handleMouseLeave = (e) => {
    setColor('#F75F1C')
  }

  return (
    <div className="container flex flex-col w-screen h-screen mx-auto justify-center items-center">
      <xml version="1.0" encoding="utf-8" />
      <svg version="1.1" className=" drop-shadow-svg animate-pulse w-5/12 h-5/12 m-28" fill={color} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 2375.74 1711.121" xmlSpace="preserve">
      <g>
        <path d="M503.916,690.078c0,0-80.203-405.076,17.259-634.518c0,0,207.107,429.442,345.178,445.685L503.916,690.078z"/>
        <path d="M1959.067,690.078c0,0,80.203-405.076-17.259-634.518c0,0-207.107,429.442-345.178,445.685L1959.067,690.078z"/>
        <path d="M1006.454,573.327c158.037,83.925,316.074,83.925,474.112,0c-95.014,121.955-175.172,251.964-237.056,391.878
          C1180.812,832.369,1102.368,701.665,1006.454,573.327z"/>
        <path d="M82.596,854.545c-27.287,305.424,45.356,569.254,273.096,768.528l117.189-239.594l196.735,207.107l56.634-177.665
          l182.741,210.152l137.056-209.137l197.462,241.624l198.477-262.944l135.025,195.939l171.574-171.574l69.036,139.086l93.401-203.046
          l79.078,156.345l143.257-213.198l81.218,217.259c109.697-222.666,100.655-495.375,37.563-790.863
          c-10.308,165.378-49.919,313.235-144.162,428.426l-55.837-197.97l-148.223,236.041l-92.386-191.371l-144.162,249.746
          l-96.447-282.233l-307.614,375.635L956.708,993.631l-90.355,318.782L590.21,1014.951l-65.99,245.685L327.266,955.053
          l-57.868,281.218C178.052,1152.872,121.867,1016.46,82.596,854.545z"/>
      </g>
      </svg>
      <Link href="/home">
        <button onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseHover} className='text-4xl font-bold text-dark-orange border-4 border-dark-orange p-3 rounded-md shadow-button shadow-dark-orange hover:text-light-orange hover:border-light-orange hover:shadow-light-orange animate-pulse'>
          Enter
        </button>
      </Link>
    </div>
  )
}

import React from 'react'

export default function Button({text}) {
  return (
    <button className='font-bold tracking-wide text-sm bg-pink-light py-2 px-7 rounded-full mt-4 text-white md:text-lg hover:bg-white hover:text-pink-dark '>{text}</button>
  )
}

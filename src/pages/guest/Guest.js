import React from 'react'
import GuestNavbar from '../GuestNavbar'
import GuestMain from './GuestMain'

export default function Guest() {
  return (
    <div className='min-h-screen bg-gray-dark'>
      <GuestNavbar/>
      <GuestMain/>
    </div>
  )
}

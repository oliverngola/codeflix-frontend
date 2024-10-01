import React from "react"
import Image from "next/image"

export const UserProfile = () => (
  <div className='flex items-center space-x-4'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image 
      src="/profile.png" 
      width={40}
      height={40}
      alt="" 
      className='cursor-pointer rounded' 
    />
  </div>
)
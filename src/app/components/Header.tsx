'use client'
import React, { useState } from 'react'
import { UserProfile } from './UserProfile'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { useScroll } from '../hooks/useScroll'
import { SearchForm } from './SearchForm'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export const Header = () => {
  const isScrolled = useScroll()
  const router = useRouter()
  const params = useSearchParams()
  const initialSearchTerm = params.get('title') || ''
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm)

  const onSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newParams = new URLSearchParams(params.toString())
    newParams.set('title', searchTerm)
    router.push(`/search?${newParams.toString()}`)
  }

  return (
    <header className={`
      ${isScrolled &&'bg-black'}
      fixed top-0 z-50 
      flex w-full items-center justify-between transition-all p-2 px-4 lg:px-16 lg:py-4`
    }>
      <div className='flex items-center space-x-2 md:space-x-4'>
        <Link href='/' passHref>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-4'>
        <SearchForm 
          searchTerm={searchTerm} 
          onSearchTermChange={onSearchTermChange} 
          onSearch={onSearch} 
        />
        <UserProfile />
      </div>
    </header>
  )
}

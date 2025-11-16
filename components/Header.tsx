'use client'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">StoryBit</Link>
        <nav className="space-x-4 hidden md:flex">
          <Link href="#">Home</Link>
          <Link href="#">TV Shows</Link>
          <Link href="#">Movies</Link>
        </nav>
      </div>
    </header>
  )
}

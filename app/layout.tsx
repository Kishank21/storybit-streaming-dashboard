import './globals.css'
import React from 'react'
import Header from '../components/Header'

export const metadata = {
  title: 'StoryBit Streaming Dashboard',
  description: 'A simplified streaming dashboard built for StoryBit task',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}

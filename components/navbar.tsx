"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-gray-800">
              JC-Consulting
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 font-medium border-b-2 border-gray-800"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-800 px-3 py-2 font-medium border-b-2 border-transparent hover:border-gray-800"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-800 px-3 py-2 font-medium border-b-2 border-transparent hover:border-gray-800"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 font-medium border-l-4 border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-500 font-medium border-l-4 border-transparent hover:text-gray-800 hover:border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-500 font-medium border-l-4 border-transparent hover:text-gray-800 hover:border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

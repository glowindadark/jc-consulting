'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // helper to build link classes
  const linkClasses = (href: string, isMobile = false) => {
    const base = isMobile
      ? 'block px-3 py-2 font-medium'
      : 'px-3 py-2 font-medium';
    const inactive = isMobile
      ? 'text-gray-500 hover:text-gray-800 hover:border-gray-800 border-transparent'
      : 'text-gray-500 hover:text-gray-800 border-transparent hover:border-b-2 hover:border-gray-800';
    const active = isMobile
      ? 'text-gray-800 border-l-4 border-gray-800'
      : 'text-gray-800 border-b-2 border-gray-800';

    return `${base} ${pathname === href ? active : inactive}`;
  };

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0'>
            <Link href='/' className='font-bold text-xl text-gray-800'>
              <Image
                src='/jc-consulting.png'
                alt='JC Consulting Logo'
                width={200}
                height={180}
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link href='/' className={linkClasses('/', false)}>
              Work
            </Link>
            <Link href='/about' className={linkClasses('/about', false)}>
              About
            </Link>
            <Link href='/contact' className={linkClasses('/contact', false)}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='text-gray-500 hover:text-gray-800 focus:outline-none'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md'>
            <Link
              href='/'
              className={linkClasses('/', true)}
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href='/about'
              className={linkClasses('/about', true)}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/contact'
              className={linkClasses('/contact', true)}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

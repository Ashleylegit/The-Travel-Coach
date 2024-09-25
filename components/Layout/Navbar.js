import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Logo" className="h-8" />
          </a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <a className={router.pathname === '/' ? 'text-blue-500' : ''}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={router.pathname === '/destination-guide' ? 'text-blue-500' : ''}>Destination Guide</a>
            </Link>
          </li>
		  <li>
            <Link href="/about">
              <a className={router.pathname === '/travel-planning' ? 'text-blue-500' : ''}>Travel Planning</a>
            </Link>
          </li>
		  <li>
            <Link href="/about">
              <a className={router.pathname === '/community-forum' ? 'text-blue-500' : ''}>Community Forum</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

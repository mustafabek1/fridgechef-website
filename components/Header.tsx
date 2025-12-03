'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (typeof window !== 'undefined') {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(darkModeQuery.matches);

      // Listen for changes
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      darkModeQuery.addEventListener('change', handler);
      return () => darkModeQuery.removeEventListener('change', handler);
    }
  }, []);

  useEffect(() => {
    // Apply dark class to html element
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-card border-b border-light-border dark:border-dark-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🍳</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FridgeChef
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className={`font-medium transition-colors ${
                isActive('/#features')
                  ? 'text-primary'
                  : 'text-light-text dark:text-dark-text hover:text-primary'
              }`}
            >
              Features
            </Link>
            <Link
              href="/support"
              className={`font-medium transition-colors ${
                isActive('/support')
                  ? 'text-primary'
                  : 'text-light-text dark:text-dark-text hover:text-primary'
              }`}
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className={`font-medium transition-colors ${
                isActive('/privacy')
                  ? 'text-primary'
                  : 'text-light-text dark:text-dark-text hover:text-primary'
              }`}
            >
              Privacy
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-light-cardBg dark:hover:bg-dark-cardBg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Download Button */}
            <a
              href="#download"
              className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors shadow-md"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-light-cardBg dark:hover:bg-dark-cardBg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-light-border dark:border-dark-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#features"
                className="font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/support"
                className="font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy
              </Link>

              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 font-medium text-light-text dark:text-dark-text hover:text-primary transition-colors"
              >
                {isDark ? '☼ Light Mode' : '☾ Dark Mode'}
              </button>

              <a
                href="#download"
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Download
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

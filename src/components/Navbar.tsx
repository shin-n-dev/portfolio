import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useDarkMode } from '../hooks/useDarkMode';

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: 'home', label: 'ホーム' },
  { id: 'about', label: '自己紹介' },
  { id: 'skills', label: 'スキル' },
  { id: 'projects', label: 'プロジェクト' },
  { id: 'experience', label: '経歴' },
  { id: 'contact', label: 'お問い合わせ' },
];

const SCROLL_THRESHOLD = 50;
const SCROLL_DURATION = 500;

export default function Navbar() {
  const { isDark, toggleDark } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link
          to="home"
          smooth
          duration={SCROLL_DURATION}
          className="text-[17px] font-normal text-slate-900 dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-[15px] font-normal">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  smooth
                  duration={SCROLL_DURATION}
                  spy
                  activeClass="text-primary"
                  className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={toggleDark} className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-full" aria-label="テーマ切り替え">
            {isDark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleDark} className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="テーマ切り替え">
            {isDark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="メニュー開閉">
            {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={SCROLL_DURATION}
              onClick={() => setIsMobileMenuOpen(false)}
              className="cursor-pointer font-medium py-2 border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

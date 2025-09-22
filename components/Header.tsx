import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpenIcon } from './icons/BookOpenIcon';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeLinkClass = "block py-2 text-sky-600 font-semibold";
  const inactiveLinkClass = "block py-2 text-slate-600 hover:text-sky-600 transition-colors";

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
                <BookOpenIcon className="h-6 w-6 text-sky-600" />
                <span>Estudos Bíblicos</span>
              </Link>
            </div>

            {/* Botão hambúrguer (mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-slate-800 hover:text-sky-600 focus:outline-none"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Abrir menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu desktop */}
            <nav className="hidden md:flex md:space-x-8">
              <NavLink to="/" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Início</NavLink>
              <NavLink to="/estudos" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Estudos Bíblicos</NavLink>
              <NavLink to="/licoes-dos-livros" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Lições Dos Livros</NavLink>
              <NavLink to="/destaques" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Destaques</NavLink>
              <NavLink to="/outros-estudos" className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Outros Estudos</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay (sempre montado para transicionar opacidade) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      />

      {/* Painel lateral (fora do header para evitar glitches de animação) */}
      <aside
        id="mobile-menu"
        className={`
          fixed inset-y-0 right-0 z-50 md:hidden
          w-1/2 max-w-xs bg-white shadow-lg
          transform-gpu will-change-transform
          transition-transform duration-300 ease-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        aria-hidden={!menuOpen}
      >
        <div className="p-4 flex flex-col space-y-2 overflow-y-auto h-full">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Início</NavLink>
          <NavLink to="/estudos" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Estudos Bíblicos</NavLink>
          <NavLink to="/licoes-dos-livros" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Lições Dos Livros</NavLink>
          <NavLink to="/destaques" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Destaques</NavLink>
          <NavLink to="/outros-estudos" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}>Outros Estudos</NavLink>
        </div>
      </aside>
    </>
  );
};

export default Header;
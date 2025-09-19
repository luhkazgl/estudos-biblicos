
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpenIcon } from './icons/BookOpenIcon';

const Header: React.FC = () => {
  const activeLinkClass = "text-sky-600 font-semibold";
  const inactiveLinkClass = "text-slate-600 hover:text-sky-600 transition-colors";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <BookOpenIcon className="h-6 w-6 text-sky-600" />
              <span>Estudos Bíblicos</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            >
              Início
            </NavLink>
            <NavLink
              to="/estudos"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            >
              Estudos Bíblicos
            </NavLink>
            <NavLink
              to="/outros-estudos"
              className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
            >
              Outros Estudos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

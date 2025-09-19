
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Um projeto para a glória de Deus.</p>
      </div>
    </footer>
  );
};

export default Footer;

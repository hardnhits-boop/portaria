import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnrollment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollment }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark & Course Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 ring-2 ring-amber-400/30 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Outfit']">
                Portaria <span className="text-amber-400 font-extrabold">Nível 7</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Segurança Patrimonial & EAD
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#funcoes"
              onClick={(e) => scrollToSection(e, 'funcoes')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              7 Funções
            </a>
            <a
              href="#vantagens"
              onClick={(e) => scrollToSection(e, 'vantagens')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Vantagens
            </a>
            <a
              href="#como-funciona"
              onClick={(e) => scrollToSection(e, 'como-funciona')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Como Funciona
            </a>
            <a
              href="#salarios"
              onClick={(e) => scrollToSection(e, 'salarios')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Médias Salariais
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => scrollToSection(e, 'depoimentos')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Depoimentos
            </a>
            <a
              href="#duvidas"
              onClick={(e) => scrollToSection(e, 'duvidas')}
              className="hover:text-amber-400 transition-colors whitespace-nowrap"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#valores"
              onClick={(e) => scrollToSection(e, 'valores')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md hover:shadow-amber-400/20 active:scale-95 transition-all whitespace-nowrap"
            >
              Quero saber mais
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#funcoes"
            onClick={(e) => scrollToSection(e, 'funcoes')}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            7 Funções Habilitadas
          </a>
          <a
            href="#vantagens"
            onClick={(e) => scrollToSection(e, 'vantagens')}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Invista no Futuro
          </a>
          <a
            href="#como-funciona"
            onClick={(e) => scrollToSection(e, 'como-funciona')}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Como Funciona & Certificado
          </a>
          <a
            href="#salarios"
            onClick={(e) => scrollToSection(e, 'salarios')}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Salários do Mercado
          </a>
          <a
            href="#depoimentos"
            onClick={(e) => scrollToSection(e, 'depoimentos')}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Depoimentos de Alunos
          </a>
          <a
            href="#valores"
            onClick={(e) => scrollToSection(e, 'valores')}
            className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 text-base font-bold text-slate-950 bg-amber-400 rounded-lg shadow-md"
          >
            Quero saber mais (Valores)
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

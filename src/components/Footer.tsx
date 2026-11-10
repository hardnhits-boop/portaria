import React from 'react';
import { ShieldCheck, MessageCircle, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-850 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-md">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                  Portaria <span className="text-amber-400">Nível 7</span>
                </span>
                <span className="text-[10px] block uppercase tracking-wider text-slate-400">
                  Formação Profissional em Segurança Patrimonial
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Capacitação 100% online que prepara e qualifica você para atuar com destaque em 7 funções do setor de portaria, recepção e controle de acesso em todo o país.
            </p>

            <div className="text-[11px] text-slate-400 leading-normal border-l-2 border-amber-400/40 pl-3">
              Curso livre de qualificação profissional legalmente respaldado pela Lei nº 9.394/96, Decreto nº 5.154/2004 e Resolução CNE/CEB nº 04/99 (LDB).
            </div>
          </div>

          {/* 7 Functions Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              7 Funções Habilitadas
            </h4>
            <ul className="text-xs space-y-1.5 text-slate-300">
              <li>• Porteiro Residencial e Comercial</li>
              <li>• Recepcionista Corporativo</li>
              <li>• Controlador de Acesso Eletrônico</li>
              <li>• Vigia Patrimonial</li>
              <li>• Fiscal de Piso em Edifícios e Galerias</li>
              <li>• Fiscal de Loja e Varejo</li>
              <li>• Staff e Apoio em Eventos</li>
            </ul>
          </div>

          {/* Contact & Direct Support */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Central de Atendimento
            </h4>
            <p className="text-xs text-slate-300">
              Dúvidas sobre matrícula, certificado ou conteúdo?
            </p>
            <a
              href={getWhatsAppUrl('Olá! Gostaria de informações sobre o curso Portaria Nível 7.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <span className="block text-[11px] text-slate-400">
              Segunda a Sábado, das 08h às 20h
            </span>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Portaria Nível 7. Todos os direitos reservados.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Floating WhatsApp CTA Button */}
      <a
        href={getWhatsAppUrl('Olá! Quero finalizar minha inscrição no curso Portaria Nível 7.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp +55 22 99213-1930"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </footer>
  );
};

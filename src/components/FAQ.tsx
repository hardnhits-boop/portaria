import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/courseData';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Tire Suas Dúvidas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Tudo o que você precisa saber sobre o curso Portaria Nível 7, certificado e acesso às aulas:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-850">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional support callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-sm text-slate-300">
            Ainda tem dúvidas? Fale diretamente com nossa equipe de atendimento para tirar qualquer dúvida antes de se matricular.
          </p>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de tirar dúvidas sobre o curso Portaria Nível 7.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Falar com Atendente no WhatsApp ({WHATSAPP_DISPLAY})
          </a>
        </div>

      </div>
    </section>
  );
};

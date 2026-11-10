import React from 'react';
import { Star, CheckCircle, Quote, MessageCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/courseData';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Histórias de Sucesso & Avaliações
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            O que nossos alunos dizem sobre o curso
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Veja como a certificação Portaria Nível 7 transformou a carreira de quem já concluiu a formação e ingressou no mercado de trabalho:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-400/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Aluno Verificado</span>
                  </div>
                </div>

                {/* Comment */}
                <p className="text-slate-200 text-base leading-relaxed italic relative">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-slate-850 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-amber-400 font-medium">
                    {item.role}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    {item.city}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary strip */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
              ].map((imgUrl, i) => (
                <img
                  key={i}
                  src={imgUrl}
                  alt="Aluno"
                  className="w-10 h-10 rounded-full border-2 border-slate-900 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-400">Mais de 4.800 alunos já qualificados em todo o país</p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Olá! Vi os depoimentos dos alunos e quero começar minha matrícula no curso Portaria Nível 7 pelo valor promocional de R$ 297,00.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Começar Meu Curso no WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>
        </div>

      </div>
    </section>
  );
};

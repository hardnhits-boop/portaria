import React from 'react';
import { UserPlus, Smartphone, CheckSquare, Award, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

const STEPS = [
  {
    step: '01',
    title: 'Faça sua matrícula',
    description: 'Inscreva-se online de forma rápida.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Acesse as aulas',
    description: 'Estude pelo celular, tablet ou computador.',
    icon: Smartphone,
  },
  {
    step: '03',
    title: 'Faça a avaliação',
    description: 'Aprenda no seu ritmo.',
    icon: CheckSquare,
  },
  {
    step: '04',
    title: 'Receba seu certificado',
    description: 'Comprove sua qualificação profissional.',
    icon: Award,
  },
];

interface SimpleStepsProps {
  onStartEnrollment: () => void;
}

export const SimpleSteps: React.FC<SimpleStepsProps> = ({ onStartEnrollment }) => {
  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Passo a Passo Sem Burocracia
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Começar é Simples
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Em menos de 2 minutos você garante seu acesso e já pode começar a se qualificar hoje mesmo:
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-850 flex items-center text-xs font-medium text-amber-400/80">
                  <span>Etapa {index + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl('Olá! Quero iniciar minha matrícula imediata no curso Portaria Nível 7 pelo valor promocional de R$ 297,00.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/10 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>Iniciar Matrícula no WhatsApp ({WHATSAPP_DISPLAY})</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

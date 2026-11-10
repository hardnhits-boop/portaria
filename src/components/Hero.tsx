import React from 'react';
import { ArrowRight, CheckCircle2, Award, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/hero_recepcao_moderna_1794315269306.jpg';

interface HeroProps {
  onScrollToPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPricing }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Qualificação Profissional EAD 100% Online</span>
            </div>

            {/* Main Headline requested by user */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-['Outfit'] text-balance">
              Formação Profissional em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Segurança Patrimonial
              </span>
            </h1>

            {/* Sub-headline requested by user */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              <strong className="text-amber-400 font-semibold">Cursos nível 7</strong> que habilita o profissional a atuar em <span className="underline decoration-amber-400/60 underline-offset-4">7 funções</span>:
            </p>

            {/* The 7 highlighted roles as visual chips */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {[
                'Porteiro',
                'Recepcionista',
                'Controlador de Acesso',
                'Vigia',
                'Fiscal de Piso',
                'Fiscal de Loja',
                'Staff de Eventos',
              ].map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/90 border border-slate-700 text-sm font-medium text-slate-100 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  {role}
                </span>
              ))}
            </div>

            {/* Quick highlight benefits */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certificado Nacional LDB</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Estude no seu ritmo</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>

            {/* Primary Action Button: "Quero saber mais" linking to course values */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onScrollToPricing}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/25 active:scale-98 transition-all cursor-pointer"
              >
                <span>Quero saber mais</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Matrículas abertas com valor promocional</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Reception Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src={heroImage}
                alt="Recepção moderna de edifício corporativo com atendimento e controle de acesso"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Overlay card for course accreditation */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Certificação Oficial
                  </p>
                  <p className="text-sm font-bold text-white">
                    Portaria Nível 7 EAD
                  </p>
                  <p className="text-xs text-slate-300">
                    7 Áreas de atuação com 1 única formação
                  </p>
                </div>
                <div className="shrink-0 w-12 h-12 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-extrabold text-lg">
                  7 em 1
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

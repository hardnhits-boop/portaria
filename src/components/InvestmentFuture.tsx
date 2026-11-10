import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Clock,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Shield,
} from 'lucide-react';
import receptionDeskImg from '../assets/images/recepcao_atendimento_1794315270693.jpg';
import turnstilesImg from '../assets/images/controle_acesso_catracas_1794315271094.jpg';

const ADVANTAGES = [
  {
    number: '1',
    title: 'Qualificação Profissional',
    description:
      'Desenvolva conhecimentos e habilidades para atuar na área de segurança patrimonial e controle de acesso.',
    icon: GraduationCap,
  },
  {
    number: '2',
    title: 'Mais Oportunidades de Trabalho',
    description:
      'Prepare-se para buscar oportunidades em diferentes funções, como porteiro, recepcionista, controlador de acesso, vigia e fiscal de piso.',
    icon: Briefcase,
  },
  {
    number: '3',
    title: 'Flexibilidade para Estudar',
    description:
      'Estude a distância, com mais autonomia para organizar sua rotina de aprendizado de acordo com sua disponibilidade.',
    icon: Clock,
  },
  {
    number: '4',
    title: 'Crescimento na Carreira',
    description:
      'Amplie suas competências profissionais e fortaleça seu currículo para buscar novas oportunidades no mercado de trabalho.',
    icon: TrendingUp,
  },
  {
    number: '5',
    title: 'Conhecimentos para o Dia a Dia',
    description:
      'Aprenda conceitos e práticas relacionados à segurança patrimonial, atendimento ao público, prevenção de ocorrências e controle de acesso.',
    icon: BookOpen,
  },
];

export const InvestmentFuture: React.FC = () => {
  return (
    <section id="vantagens" className="py-20 lg:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with user exact text */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Destaque-se no Mercado
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Invista no seu futuro profissional!
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed font-normal">
            Com o curso <strong className="text-amber-400">Portaria Nível 7 EAD</strong>, você se prepara para ampliar suas possibilidades de atuação e dar novos passos na sua carreira.
          </p>
        </div>

        {/* 2-Column Split: The 5 Items + Side-by-Side Reception Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The 5 numbered items */}
          <div className="lg:col-span-7 space-y-6">
            {ADVANTAGES.map((adv) => {
              const IconComp = adv.icon;
              return (
                <div
                  key={adv.number}
                  className="group p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900 transition-all shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 font-extrabold text-base group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      {adv.number}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <IconComp className="w-4 h-4 text-amber-400/80" />
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {adv.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Reception Gallery & Security Architecture */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            
            {/* Top Reception Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={receptionDeskImg}
                alt="Atendimento profissional na recepção e controle de condomínio"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block">
                  Recepção & Triagem de Visitantes
                </span>
                <p className="text-sm font-semibold text-white">
                  Postura, atendimento cordial e segurança no primeiro contato
                </p>
              </div>
            </div>

            {/* Bottom Turnstiles / Access Control Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={turnstilesImg}
                alt="Catracas eletrônicas e controle de acesso moderno"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block">
                  Tecnologia & Controle de Acesso
                </span>
                <p className="text-sm font-semibold text-white">
                  Operação de catracas, crachás digitais e sistemas integrados
                </p>
              </div>
            </div>

            {/* Quick action strip */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 text-center">
              <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Mercado com vagas todos os dias
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-3">
                Profissionais capacitados são priorizados por administradoras e condomínios.
              </p>
              <a
                href="#valores"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Ver valores promocionais
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

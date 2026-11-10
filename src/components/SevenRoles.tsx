import React, { useState } from 'react';
import { SEVEN_ROLES } from '../data/courseData';
import {
  ShieldAlert,
  UserCheck,
  Building2,
  Scan,
  Store,
  CalendarCheck,
  Check,
  ChevronRight,
  TrendingUp,
  Layers,
} from 'lucide-react';

const ROLE_ICONS: Record<string, React.ReactNode> = {
  porteiro: <Building2 className="w-6 h-6 text-amber-500" />,
  recepcionista: <UserCheck className="w-6 h-6 text-blue-500" />,
  'controlador-acesso': <Scan className="w-6 h-6 text-emerald-500" />,
  vigia: <ShieldAlert className="w-6 h-6 text-purple-500" />,
  'fiscal-piso': <Layers className="w-6 h-6 text-orange-500" />,
  'fiscal-loja': <Store className="w-6 h-6 text-rose-500" />,
  'staff-eventos': <CalendarCheck className="w-6 h-6 text-cyan-500" />,
};

interface SevenRolesProps {
  onSelectRole?: (roleId: string) => void;
}

export const SevenRoles: React.FC<SevenRolesProps> = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>(SEVEN_ROLES[0].id);

  const activeRole = SEVEN_ROLES.find((r) => r.id === selectedRoleId) || SEVEN_ROLES[0];

  return (
    <section id="funcoes" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Formação Completa & Multidisciplinar
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            As 7 Funções que Você Estará Habilitado a Atuar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Com apenas um certificado você multiplica suas chances no mercado de trabalho. Conheça as atribuições e médias de cada profissão:
          </p>
        </div>

        {/* Desktop Interactive Layout / Mobile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Role Selection Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            {SEVEN_ROLES.map((role, index) => {
              const isSelected = role.id === selectedRoleId;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-400/80 shadow-md shadow-amber-500/10'
                      : 'bg-slate-950/60 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-700">
                      {ROLE_ICONS[role.id]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400">
                          {String(index + 1).padStart(2, '0')}.
                        </span>
                        <h3 className="text-base font-bold text-white">
                          {role.title}
                        </h3>
                      </div>
                      <span className="text-xs text-amber-400 font-medium">
                        Média: {role.salaryRange}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Role Deep Dive */}
          <div className="lg:col-span-7 bg-slate-800/70 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl sticky top-28">
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700">
                  {ROLE_ICONS[activeRole.id]}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Função Habilitada Nível 7
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {activeRole.title}
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Faixa salarial</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                  {activeRole.salaryRange}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Visão Geral da Função
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                  {activeRole.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  O que você aprende e executa no dia a dia
                </h4>
                <div className="space-y-2.5">
                  {activeRole.dailyTasks.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-750">
                      <div className="mt-0.5 p-1 rounded bg-amber-400/20 text-amber-400 shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-200">{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  <span>Alta demanda em condomínios, centros empresariais e comércio</span>
                </div>
                <a
                  href="#valores"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-center"
                >
                  Garantir Formação Nível 7
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

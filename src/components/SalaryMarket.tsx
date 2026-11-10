import React, { useState } from 'react';
import { TrendingUp, DollarSign, Calculator, Check, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { SALARY_HIGHLIGHTS } from '../data/courseData';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

export const SalaryMarket: React.FC = () => {
  const [selectedSalary, setSelectedSalary] = useState<number>(2000);

  // Calculate days needed to pay back R$ 297 investment (assuming 22 work days / month)
  const dailyIncome = selectedSalary / 22;
  const daysToPayback = Math.max(1, Math.ceil(297 / dailyIncome));

  return (
    <section id="salarios" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Retorno do Seu Investimento
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Conheça a média salarial de funções com alta procura no mercado:
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A área de segurança patrimonial e portaria conta com contratações contínuas em todo o Brasil. Veja os ganhos médios:
          </p>
        </div>

        {/* 3 Main Highlight Cards requested by user */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SALARY_HIGHLIGHTS.map((item, index) => (
            <div
              key={item.role}
              className="relative p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-slate-400">
                    Oportunidade {index + 1}
                  </span>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    Procura {item.demand}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {item.role}
                </h3>
                
                <div className="my-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Média salarial mensal:</span>
                  <p className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono tracking-tight">
                    {item.range}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.notes}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Benefícios comuns: VT, VR, Cesta Básica</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive ROI Calculator Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-700/80 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Retorno Rápido</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                O curso se paga em apenas <span className="text-amber-400">{daysToPayback} dias</span> de trabalho!
              </h3>
              <p className="text-sm text-slate-300">
                Ajuste o salário pretendido para ver em quanto tempo o investimento de R$ 297,00 volta para o seu bolso:
              </p>

              {/* Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-400">
                  <span>R$ 1.600,00</span>
                  <span className="text-amber-400 text-sm font-bold">R$ {selectedSalary.toLocaleString('pt-BR')},00 / mês</span>
                  <span>R$ 2.400,00</span>
                </div>
                <input
                  type="range"
                  min="1600"
                  max="2400"
                  step="50"
                  value={selectedSalary}
                  onChange={(e) => setSelectedSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                Investimento Único Promocional
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                R$ 297,00
              </div>
              <p className="text-xs text-emerald-400 font-medium">
                Retorno estimado em aproximadamente {daysToPayback} dias úteis no seu novo cargo.
              </p>
              <a
                href={getWhatsAppUrl(`Olá! Vi o simulador no site e quero garantir minha vaga no curso Portaria Nível 7 por R$ 297,00 (Salário pretendido: R$ ${selectedSalary},00).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Garantir Vaga no WhatsApp ({WHATSAPP_DISPLAY})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import {
  Check,
  ShieldCheck,
  Zap,
  CreditCard,
  QrCode,
  Lock,
  Award,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface PricingProps {
  onOpenEnrollment: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenEnrollment }) => {
  return (
    <section id="valores" className="py-20 lg:py-28 bg-slate-950 text-white relative scroll-mt-20">
      {/* Subtle glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Valores & Condições Especiais
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Investimento no Curso Portaria Nível 7
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Aproveite o lote promocional com desconto exclusivo por tempo limitado e habilite-se para 7 funções com um único curso.
          </p>
        </div>

        {/* Pricing Card Master Box */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-amber-400/50 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
            
            {/* Top Badge Ribbon */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 text-xs font-extrabold px-6 py-1.5 uppercase tracking-wider rounded-bl-xl shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Desconto de R$ 200,00 Ativo
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Price tag & payment options */}
              <div className="lg:col-span-5 text-center lg:text-left space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
                  Formação Completa 7 em 1
                </span>

                <div className="space-y-1">
                  <span className="text-sm sm:text-base text-slate-400 line-through block font-medium">
                    De R$ 497,00
                  </span>
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-xs uppercase text-slate-400 font-semibold">Por apenas</span>
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-400 font-['Outfit'] tracking-tight">
                    R$ 297<span className="text-2xl font-bold text-slate-300">,00</span>
                  </div>
                  <span className="text-xs text-slate-300 block font-medium">
                    ou em até <strong className="text-white">12x de R$ 29,70</strong> no cartão
                  </span>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-emerald-400 font-semibold">
                    <Zap className="w-4 h-4" />
                    <span>Acesso liberado imediatamente</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
                    <QrCode className="w-4 h-4 text-slate-300" />
                    <span>Pagamento seguro via PIX, Boleto ou Cartão</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2.5">
                  <a
                    href={getWhatsAppUrl('Olá! Quero finalizar minha vaga no curso Portaria Nível 7 pelo valor promocional de R$ 297,00.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-400/20 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                    <span>Finalizar no WhatsApp ({WHATSAPP_DISPLAY})</span>
                  </a>

                  <button
                    type="button"
                    onClick={onOpenEnrollment}
                    className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold text-slate-300 bg-slate-950 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Preencher Dados e Finalizar Inscrição</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    Atendimento e liberação imediata via WhatsApp oficial +55 22 99213-1930
                  </p>
                </div>
              </div>

              {/* Right Column: Complete Benefit Checklist */}
              <div className="lg:col-span-7 bg-slate-950/60 p-6 rounded-2xl border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  Tudo o que está incluído na sua matrícula:
                </h4>

                <div className="space-y-3">
                  {[
                    'Curso 100% online com acesso pelo celular, tablet ou computador',
                    'Certificado oficial válido em todo o território nacional (LDB)',
                    'Habilitação completa para as 7 funções da área de segurança patrimonial',
                    'Apostilas didáticas ilustradas em PDF para download',
                    'Aulas práticas em vídeo sobre controle de acesso, recepção e prevenção',
                    'Suporte direto para dúvidas durante todo o período de estudos',
                    'Sem cobrança de mensalidades — taxa única de R$ 297,00',
                    'Garantia incondicional de 7 dias ou seu dinheiro de volta',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 7 Days Guarantee Badge Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-white block">Garantia Blindada de 7 Dias</span>
                  <span className="text-slate-400">Risco zero: teste o curso e comprove a qualidade.</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <CreditCard className="w-4 h-4" />
                <span>Parcelamento em até 12x</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

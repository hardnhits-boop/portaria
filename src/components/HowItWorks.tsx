import React from 'react';
import {
  FileCheck,
  ShieldCheck,
  Scale,
  Award,
  Laptop,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';
import certificateImg from '../assets/images/certificado_estudos_sucesso_1794315271311.jpg';

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Metodologia & Amparo Legal
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Como funciona?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Nosso Curso de Portaria é <strong className="text-white">100% on-line</strong>, classificado como curso livre de qualificação profissional, amparado pela <span className="text-amber-400 font-semibold">Lei nº 9.394/96</span>, <span className="text-amber-400 font-semibold">Decreto nº 5.154/2004</span> e <span className="text-amber-400 font-semibold">Resolução CNE/CEB nº 04/99</span>, conforme a LDB (Lei de Diretrizes e Bases da Educação Nacional).
          </p>
        </div>

        {/* Certificate Card & Explanatory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Certificate Image & Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-slate-950 group">
              <img
                src={certificateImg}
                alt="Certificado oficial de conclusão do curso Portaria Nível 7 com validade nacional"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                <Award className="w-4 h-4" />
                Válido em Todo o Brasil
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <FileCheck className="w-4 h-4" />
                  Certificado Imediato com QR Code
                </div>
                <p>
                  Emitido digitalmente em alta resolução pronto para impressão e inclusão no seu currículo.
                </p>
              </div>
            </div>
          </div>

          {/* Explanation Text & The 7 Functions Certificate */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Scale className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Amparo pela Legislação Brasileira (LDB)
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Qualificação Profissional Reconhecida
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ao concluir o curso, você recebe um certificado válido em todo o território nacional, que te habilita a trabalhar em 7 funções:
              </p>

              {/* The 7 listed functions exactly as requested */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Porteiro',
                  'Recepcionista',
                  'Controlador de Acesso',
                  'Vigia',
                  'Fiscal de Piso',
                  'Fiscal de Loja',
                  'Staff de Eventos',
                ].map((funcao) => (
                  <div
                    key={funcao}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-750"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm font-semibold text-white">{funcao}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Pillars of the Course */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <Laptop className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">100% Online</h4>
                <p className="text-xs text-slate-400 mt-1">Celular ou computador</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <Award className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Sem Mensalidades</h4>
                <p className="text-xs text-slate-400 mt-1">Taxa única promocional</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Avaliação Simples</h4>
                <p className="text-xs text-slate-400 mt-1">Direto na plataforma</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl('Olá! Quero garantir meu Certificado Nacional de Portaria Nível 7 pelo valor promocional de R$ 297,00.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/10"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Garantir Certificado no WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

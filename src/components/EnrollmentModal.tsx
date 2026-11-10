import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, QrCode, CreditCard, Sparkles, Copy, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const getCustomMessage = () => {
    let msg = `Olá! Quero finalizar minha matrícula no curso Portaria Nível 7 pelo valor promocional de R$ 297,00.`;
    if (name) msg += `\n*Nome:* ${name}`;
    if (email) msg += `\n*E-mail:* ${email}`;
    if (phone) msg += `\n*WhatsApp:* ${phone}`;
    msg += `\n*Forma de Pagamento:* ${paymentMethod === 'pix' ? 'PIX (Liberação Imediata)' : 'Cartão de Crédito (até 12x)'}`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = getWhatsAppUrl(getCustomMessage());
    setIsSuccess(true);
    // Redirect to WhatsApp on finalization
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const whatsappUrl = getWhatsAppUrl(getCustomMessage());
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyPix = () => {
    navigator.clipboard?.writeText('00020126580014BR.GOV.BCB.PIX0136portarianivel7@educacao.com.br5204000053039865405297.005802BR5920PORTARIA NIVEL 7 EAD6009SAO PAULO62070503***6304ABCD');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Inscrição Promocional
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 font-['Outfit']">
                Matrícula Portaria Nível 7
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                De <span className="line-through text-slate-500">R$ 497,00</span> por apenas <strong className="text-amber-400 font-bold">R$ 297,00</strong> à vista ou 12x
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Nome Completo (para o Certificado) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva Santos"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    E-mail para Acesso *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    WhatsApp / Celular com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Forma de Pagamento:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>PIX (Liberação Imediata)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Cartão de Crédito (até 12x)</span>
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span>Curso Portaria Nível 7 EAD</span>
                  <span className="font-mono text-white">R$ 297,00</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Desconto aplicado:</span>
                  <span>- R$ 200,00</span>
                </div>
                <div className="pt-2 border-t border-slate-850 flex justify-between font-bold text-white text-sm">
                  <span>Total a Pagar:</span>
                  <span className="text-amber-400 font-mono">R$ 297,00</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-base font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>Finalizar Inscrição no WhatsApp ({WHATSAPP_DISPLAY})</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  Ao clicar, você será direcionado ao WhatsApp oficial ({WHATSAPP_DISPLAY}) para liberação imediata.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Garantia de 7 dias com devolução integral se não gostar.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white font-['Outfit']">
              Inscrição Registrada com Sucesso!
            </h3>

            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Parabéns, <strong className="text-white">{name}</strong>! Seus dados foram pré-cadastrados para o curso <strong className="text-amber-400">Portaria Nível 7</strong>.
            </p>

            <a
              href={getWhatsAppUrl(getCustomMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Finalizar Atendimento no WhatsApp: +55 22 99213-1930</span>
            </a>

            {paymentMethod === 'pix' ? (
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <QrCode className="w-4 h-4" />
                    Chave PIX Copia e Cola
                  </span>
                  <span className="text-white font-mono">Valor: R$ 297,00</span>
                </div>
                <p className="text-xs text-slate-400">
                  Copie o código abaixo e pague em qualquer aplicativo bancário para liberar suas aulas na mesma hora:
                </p>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 break-all">
                  00020126580014BR.GOV.BCB.PIX0136portarianivel7@educacao.com.br5204000053039865405297.005802BR5920PORTARIA NIVEL 7 EAD6009SAO PAULO62070503***6304ABCD
                </div>
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
                >
                  {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedPix ? 'Código PIX Copiado!' : 'Copiar Código PIX'}
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                <p className="text-emerald-400 font-semibold mb-1">
                  Link de pagamento por cartão gerado!
                </p>
                <p>
                  As instruções e o link seguro de fatura foram enviados para <strong>{email}</strong> e no WhatsApp <strong>{phone}</strong>.
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold"
              >
                Fechar e Voltar ao Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

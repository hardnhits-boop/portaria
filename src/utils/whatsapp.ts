export const WHATSAPP_PHONE = '5522992131930';
export const WHATSAPP_DISPLAY = '(22) 99213-1930';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Olá! Quero finalizar minha matrícula no curso Portaria Nível 7 pelo valor promocional de R$ 297,00.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = getWhatsAppUrl(customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}

import { academy } from '@data/academy.data';

export function whatsappUrl(message?: string) {
  const finalMessage = message ?? academy.whatsapp.defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  return `https://wa.me/${academy.whatsapp.phone}?text=${encodedMessage}`;
}

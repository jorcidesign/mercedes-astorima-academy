document.querySelectorAll<HTMLElement>('[data-faq-item]').forEach((item) => {
  const trigger = item.querySelector<HTMLButtonElement>('.faq-item__trigger');
  const panel = item.querySelector<HTMLElement>('.faq-item__panel');

  if (!trigger || !panel) return;

  trigger.addEventListener('click', () => {
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
    item.toggleAttribute('data-open', !isOpen);
  });
});

export {};

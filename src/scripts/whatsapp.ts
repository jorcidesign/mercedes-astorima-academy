document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]').forEach((link) => {
  link.setAttribute('rel', 'noopener noreferrer');
  link.setAttribute('target', '_blank');
});

export {};

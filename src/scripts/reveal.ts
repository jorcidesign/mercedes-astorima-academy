const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (reduceMotion) {
  revealItems.forEach((item) => item.setAttribute('data-visible', 'true'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

export {};

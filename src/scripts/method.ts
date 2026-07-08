const timelines = document.querySelectorAll<HTMLElement>('[data-method-timeline]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

timelines.forEach((timeline) => {
  const steps = Array.from(timeline.querySelectorAll<HTMLElement>('[data-method-step]'));
  const fill = timeline.querySelector<HTMLElement>('[data-method-thread-fill]');

  if (!steps.length || !fill) return;

  const showAll = () => {
    steps.forEach((step) => step.classList.add('is-visible'));
    fill.style.height = '100%';
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  let lastVisible = -1;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const step = entry.target as HTMLElement;
        step.classList.add('is-visible');

        const index = steps.indexOf(step);
        if (index > lastVisible) {
          lastVisible = index;
          fill.style.height = `${((lastVisible + 1) / steps.length) * 100}%`;
        }
      });
    },
    { threshold: 0.4, rootMargin: '0px 0px -10% 0px' }
  );

  steps.forEach((step) => observer.observe(step));
});

export {};

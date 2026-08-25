(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selectors = [
    '.split-about > *', '.treatments-layout > *', '.care-grid > *',
    '.plans h2', '.plan-logos', '.additional-plans', '.locations h2',
    '.clinic', '.reviews h2', '.review-card', '.faq details', '.footer-grid > *'
  ];
  const elements = document.querySelectorAll(selectors.join(','));
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });

  elements.forEach((element) => {
    element.setAttribute('data-reveal', '');
    observer.observe(element);
  });
})();

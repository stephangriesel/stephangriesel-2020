const header = document.querySelector('[data-header]');
const sections = [...document.querySelectorAll('[data-section]')];
const scrollRoot = document.querySelector('[data-scroller]');
const headerLinks = [...document.querySelectorAll('[data-link]')];

const options = {
  root: scrollRoot,
  rootMargin: `${header.offsetHeight * -1}px`,
  threshold: 0,
};

const onIntersect = (entries) => {
  entries.forEach((entry) => {
    const theme = entry.target.dataset.section;
    header.setAttribute('data-theme', theme);
  });
};

const observer = new IntersectionObserver(onIntersect, options);

sections.forEach((section) => {
  observer.observe(section);
});

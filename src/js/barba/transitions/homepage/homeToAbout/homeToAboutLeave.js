import gsap from 'gsap';

const homeToAboutLeave = (container) => {
  const textAnimated = container.querySelectorAll('.text-animated');
  const letteringChars = document.querySelectorAll('.lettering span');
  const activeLink = container.querySelector('.is-active span');

  const tl = gsap.timeline({
    defaults: { duration: 0.4, ease: 'power2.in' },
  });

  tl
    .to(letteringChars, { yPercent: 110, stagger: 0.02}, 0.1)
    .to(textAnimated, { yPercent: 110, stagger: 0.02}, 0)

  return tl;
};

export default homeToAboutLeave;
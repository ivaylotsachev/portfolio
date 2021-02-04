import gsap from 'gsap';

const aboutToHomeEnter = (container) => {
  const textAnimated = container.querySelectorAll('.text-animated');
  const letteringChars = document.querySelectorAll('.lettering span');
  const activeLink = container.querySelector('.is-active span');
  const images = container.querySelector('.profile-image');

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power3.out' },
  });

  tl
    .from(letteringChars, { yPercent: 110, stagger: 0.02}, 0)
    .from(textAnimated, { yPercent: 110, stagger: 0.02}, 0.2)

  return tl;
};

export default aboutToHomeEnter;
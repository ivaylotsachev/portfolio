import gsap from 'gsap';
import gsapConfig from '../config';

const { leaveDuration, leaveEase } = gsapConfig;

const homeToCareerEnter = (container) => {
  console.log('career enter', container);

  const activeLink = container.querySelector('.is-active span');
  const title = container.querySelector('.title-animated');
  const textAnimated = container.querySelectorAll('.text-animated');
  const mask = container.querySelectorAll('.mask');

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power1.out' },
  });

  tl.fromTo(
    activeLink,
    { xPercent: -101 },
    { xPercent: 0, transformOrigin: 'left' },
    0
  )
    .from(title, { yPercent: 110 }, 0)
    .from(textAnimated, { yPercent: 110, opacity: 0 }, 0);

  return tl;
};

export default homeToCareerEnter;

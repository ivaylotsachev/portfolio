import gsap from 'gsap';
import gsapConfig from './config';

const { enterDuration, enterEase } = gsapConfig;

const animationEnter = (container) => {
  const activeLink = container.querySelector('.is-active span');
  const pageContainer = container.querySelector('.page-container');
  const titlesWrappers = container.querySelectorAll('.title');
  // const titles = container.querySelectorAll('.title-animated');

  const tl = gsap.timeline({
    defaults: { duration: enterDuration, ease: enterEase },
  });

  tl.set(titlesWrappers, { autoAlpha: 1 })
    .fromTo(
      activeLink,
      { xPercent: -101 },
      { xPercent: 0, transformOrigin: 'left' },
      0
    )
    .from(pageContainer, { yPercent: 50, autoAlpha: 0 }, 0);

  return tl;
};

export default animationEnter;

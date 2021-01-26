import gsap from 'gsap';
import gsapConfig from './config';

const { leaveDuration, leaveEase } = gsapConfig;

const animationLeave = (container) => {
  const activeLink = container.querySelector('.is-active span');
  const pageContaienr = container.querySelector('.page-container');

  const tl = gsap.timeline({
    defaults: { duration: leaveDuration, ease: leaveEase },
  });

  tl.to(activeLink, { xPercent: 101 }, 0).to(
    '.page-container',
    {
      yPercent: 50,
      autoAlpha: 0,
    },
    0
  );

  return tl;
};

export default animationLeave;

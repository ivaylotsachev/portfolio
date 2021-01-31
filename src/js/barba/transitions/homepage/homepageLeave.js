import gsap from 'gsap';
import gsapConfig from '../config';

const { leaveDuration, leaveEase } = gsapConfig;

const homepageLeave = (container) => {
  console.log('home page leave', container);

  const activeLink = container.querySelector('.is-active span');

  const tl = gsap.timeline({
    defaults: { duration: leaveDuration, ease: leaveEase },
  });

  return tl;
};

export default homepageLeave;

import gsap from 'gsap';
import gsapConfig from '../config';

const { leaveDuration, leaveEase } = gsapConfig;

const homeToCareerLeave = (container) => {
  console.log('career leave', container);

  const activeLink = container.querySelector('.is-active span');
  const fadeonCareer = container.querySelectorAll('.fade-on-career');
  const title = container.querySelectorAll('.title-animated');
  const imageWrapper = container.querySelector('.profile-image-wrapper');
  const image = container.querySelector('.profile-image');

  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: 'power1.in' },
  });

  tl.to(activeLink, { xPercent: 101 }, 0)
    .to(title, { yPercent: 120 }, 0)
    .to(fadeonCareer, { yPercent: 110, autoAlpha: 0, stagger: 0.05 }, 0)
    .to(imageWrapper, { yPercent: 110 }, 0.2)
    .to(image, { yPercent: -110 }, 0.2);

  return tl;
};

export default homeToCareerLeave;

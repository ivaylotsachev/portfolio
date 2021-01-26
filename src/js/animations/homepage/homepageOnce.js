import gsap from 'gsap';
import gsapConfig from '../config';

const { leaveDuration, leaveEase } = gsapConfig;

const homepageOnce = (container) => {
  const navLinks = container.querySelectorAll('.nav-link');
  const activeLink = container.querySelector('.is-active span');
  const layer = container.querySelector('.animation-layer');
  const titleLayers = container.querySelectorAll('.title-layer');
  const bg = container.querySelector('.bg');
  const titleAnimated = container.querySelectorAll('.title-animated');
  const textAnimated = container.querySelectorAll('.text-animated');
  const imageWrapper = container.querySelector('.profile-image-wrapper');
  const image = container.querySelector('.profile-image');

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'powe1.out', delay: 0.7 },
  });

  tl.set(titleLayers, { autoAlpha: 1 })
    .from(
      titleLayers,
      {
        yPercent: 110,
        stagger: 0.1,
        onComplete: () => {
          gsap.set('body', { backgroundColor: '#fbf3f1' });
        },
      },
      0
    )
    .to(titleLayers, { yPercent: -110 }, 1)
    .to(
      bg,
      {
        yPercent: -110,
        onComplete: () => {
          gsap.set(layer, { display: 'none' });
        },
      },
      1.2
    )
    .from(textAnimated, { yPercent: 120, stagger: 0.05 }, 1.3)
    .set(titleAnimated, { autoAlpha: 1 }, 1.3)
    .from(titleAnimated, { yPercent: 100, stagger: 0.05 }, 1.4)
    .from(navLinks, { yPercent: 100, stagger: 0.05 }, 1.5)
    .from(imageWrapper, { yPercent: 100, stagger: 0.05 }, 1.5)
    .from(image, { yPercent: -100, stagger: 0.05 }, 1.5)
    .fromTo(
      activeLink,
      { xPercent: -101 },
      { xPercent: 0, transformOrigin: 'left' },
      1.6
    );

  return tl;
};

export default homepageOnce;

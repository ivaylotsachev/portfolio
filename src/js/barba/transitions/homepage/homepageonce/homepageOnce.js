import gsap from 'gsap';

const homepageOnce = (container) => {
  const navLinks = container.querySelectorAll('.nav-link');
  const activeLink = container.querySelector('.is-active span');
  const layer = container.querySelector('.animation-layer');
  const titleLayers = container.querySelectorAll('.title-layer');
  const titleAnimated = container.querySelectorAll('.title-animated');
  const textAnimated = container.querySelectorAll('.text-animated');

  const chars1 = document.querySelectorAll('.intro-title-one span');
  const chars2 = document.querySelectorAll('.intro-title-two span');
  const letteringChars = document.querySelectorAll('.lettering span');


  const tl = gsap.timeline({
    defaults: { duration: 0.6, ease: 'power1.out', delay: 0.7 },
  });

  tl
    .set(titleLayers, { autoAlpha: 1})
    .set(titleAnimated, { autoAlpha: 1 })
    .from( chars1,{ yPercent: 110, stagger: 0.03 }, 0)
    .from( chars2, { yPercent: 110, stagger: 0.03 }, 0)

    .to( chars1, { yPercent: -110, stagger: 0.02 }, 1.6)
    .to( chars2, { yPercent: -110, stagger: 0.02, onComplete: () => {
      gsap.set(layer, { display: 'none'})
    }  }, 1.7)
    .from(letteringChars, { yPercent: 100, stagger: 0.02 }, 2)
    .from(textAnimated, { yPercent: 100 }, 2.2)
    .from(navLinks, { y: 50, stagger: 0.05 }, 2.2)
    .fromTo(
      activeLink,
      { xPercent: -101 },
      { xPercent: 0, transformOrigin: 'left' }, 2.2)
    .from('footer', { autoAlpha: 0 }, 2.2)

  return tl;
};

export default homepageOnce;

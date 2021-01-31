import gsap from 'gsap';

const homepageEnter = (container) => {
  const layer = container.querySelector('.animation-layer');
  const titleAnimated = container.querySelectorAll('.title-animated');
  const textAnimated = container.querySelectorAll('.text-animated');
  const letteringChars = document.querySelectorAll('.lettering span');

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power1.out' },
  });

  console.log(letteringChars)

  tl.set(layer, { display: 'none' })
    .set(titleAnimated, { autoAlpha: 1})
    .from(letteringChars, { yPercent: 100, stagger: 0.02 }, 0)
    .from(textAnimated, { yPercent: 101 }, 0.2);

  return tl;
};

export default homepageEnter;

import gsap from 'gsap';

const homepageEnter = (container) => {
  console.log('home enter');
  const layer = container.querySelector('.animation-layer');
  const title = container.querySelectorAll('.title');
  const titleAnimated = container.querySelectorAll('.title-animated');
  const imageWrapper = container.querySelector('.profile-image-wrapper');
  const image = container.querySelector('.profile-image');
  const textAnimated = container.querySelectorAll('.text-animated');

  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: 'power1.out' },
  });

  tl.set(layer, { display: 'none' })
    .from(title, { yPercent: 101 }, 0)
    .from(titleAnimated, { yPercent: -101 }, 0)
    .from(imageWrapper, { yPercent: 101 }, 0)
    .from(image, { yPercent: -101 }, 0)
    .from(textAnimated, { yPercent: 101 }, 0);

  return tl;
};

export default homepageEnter;

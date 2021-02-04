import gsap from 'gsap';

const aboutToWorksLeave = (container) => {
  const textAnimated = container.querySelectorAll('.text-animated');
  const titleAnimated = container.querySelector('.title-animated');
  const letteringChars = document.querySelectorAll('.about-lettering span');
  const activeLink = container.querySelector('.is-active span');
  const imageWrapper = container.querySelector('.about-wrapper .profile-image-wrapper');
  const image = container.querySelector('.about-wrapper .profile-image');
  const masks = container.querySelectorAll('.mask');

  const tl = gsap.timeline({
    defaults: { duration: 0.4, ease: 'circ.in' },
  });

  tl
    .to(titleAnimated, { xPercent: 100, opacity: 0 }, 0)
    .to(letteringChars, { width: 0, xPercent: -110 }, -0)
    .to(textAnimated, {  xPercent: -100 }, 0)
    .to(masks, { xPercent: 100 }, 0)
    .to(imageWrapper, { xPercent: 100 }, 0)
    .to(image, { xPercent: -100 }, 0)

  return tl;
};

export default aboutToWorksLeave;
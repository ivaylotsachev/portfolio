import gsap from 'gsap';

const aboutToHomeLeave = (container) => {
  const textAnimated = container.querySelectorAll('.text-animated');
  const letteringChars = document.querySelectorAll('.about-lettering span');
  const activeLink = container.querySelector('.is-active span');
  const imageWrapper = container.querySelector('.about-wrapper .profile-image-wrapper');
  const image = container.querySelector('.about-wrapper .profile-image');

  const tl = gsap.timeline({
    defaults: { duration: 0.4, ease: 'power2.in' },
  });

  tl
    .to(letteringChars, { yPercent: 110, stagger: 0.02 }, 0)
    .to(textAnimated, { yPercent: 110, stagger: 0.02 }, 0)
    .to(imageWrapper, { opacity: 0 }, 0.1)
    // .to(image, { yPercent: -100 }, 0.12)

  return tl;
};

export default aboutToHomeLeave;
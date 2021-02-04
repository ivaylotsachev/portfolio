import gsap from 'gsap';

const worksToAboutEnter = (container) => {
    const textAnimated = container.querySelectorAll('.text-animated');
    const letteringChars = document.querySelectorAll('.about-lettering span');
    const activeLink = container.querySelector('.is-active span');
    const imageWrapper = container.querySelector('.about-wrapper .profile-image-wrapper');
    const image = container.querySelector('.about-wrapper .profile-image');

    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: 'power2.out' },
    });

    tl
      .from(letteringChars, { yPercent: -110, stagger: 0.02}, 0)
      .from(textAnimated, { yPercent: -120, opacity: 0, stagger: 0.02}, 0)
      .from(imageWrapper, { xPercent: 110 }, 0.1)
      .from(image, { xPercent: -110 }, 0.1)

    return tl;
};

export default worksToAboutEnter;
import gsap from 'gsap';

const worksToAboutLeave = (container) => {
    const workImageWrapper = container.querySelectorAll('.work-image-wrapper');
    const workImage = container.querySelectorAll('.work-image');
    const activeLink = container.querySelector('.is-active span');
    const counters = container.querySelectorAll('.counter');
    const workTitles = container.querySelectorAll('.work-item-title');
    const description = container.querySelectorAll('.description');

    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'expo.in'},
    });

    tl
        .to(workImageWrapper, { yPercent: 110, stagger: 0.05}, 0)
        .to(workImage, { yPercent: -110, stagger: 0.05 }, 0)
        .to(counters, { y: '110%' }, 0)
        .to(workTitles, { yPercent: 110 }, 0)
        .to(description, { y: '110%' }, 0)

    return tl;
};

export default worksToAboutLeave;
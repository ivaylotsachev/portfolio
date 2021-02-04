import gsap from 'gsap';

const aboutToWorksEnter = (container) => {
    const workImageWrapper = container.querySelectorAll('.work-image-wrapper');
    const workImage = container.querySelectorAll('.work-image');
    const activeLink = container.querySelector('.is-active span');
    const counters = container.querySelectorAll('.counter');
    const workTitles = container.querySelectorAll('.work-item-title');
    const description = container.querySelectorAll('.description');

    const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out', delay: 0.2 },
    });

    tl
        .from(workImageWrapper, { xPercent: -110, stagger: 0.05}, 0)
        .from(workImage, { xPercent: 110, stagger: 0.05, scale: 1.2}, 0)
        .from(counters, { x: '-110%', stagger: 0.05 }, 0)
        .from(workTitles, { xPercent: -110, stagger: 0.05}, 0)
        .from(description, { x: '-110%', stagger: 0.05}, 0)

    return tl;
};

export default aboutToWorksEnter;
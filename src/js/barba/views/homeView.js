import gsap from 'gsap';
import { lettering } from '../../utils';
import Grain from './Grain';

const homeView = {
    namespace: 'home',
    beforeEnter() {
        console.log('home before enter');

        lettering('lettering', 'Hi, i`m Ivaylo', 'home-title')
        gsap.set('.title-animated', { autoAlpha: 1 })
    },
    afterEnter() {
        new Grain('#grain-container');

        const imageWrapper = document.querySelector('.profile-image-wrapper');
        const hide = document.querySelectorAll('.hide');
        const images = document.querySelectorAll('img');

        const handleMouse = (e) => {
            const imageWrapperWidth = imageWrapper.getBoundingClientRect().left;
            const imageWrapperHeight = imageWrapper.getBoundingClientRect().top;

            let x = (e.clientX - ( imageWrapperWidth + 150));
            let y = (e.clientY - ( imageWrapperHeight + 150));

            const tl = gsap.timeline();

            console.log(e);

            tl.to(images, 0.8, { top: y , left: x, stagger: 0.05, ease: 'power2.out' })

            if (e.target.className.includes('on-hover')) {
                gsap.to(hide, 0.5, { opacity: 0.2 })
                gsap.to(images, 0.4, { opacity: 0.8 })
            } else {
                gsap.to(hide, 0.5, { opacity: 1 })
                gsap.to(images, 0.4, { opacity: 0 })
            }
        }

        document.addEventListener('mousemove', handleMouse);
    },
}

export default homeView;
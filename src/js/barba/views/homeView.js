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

        document.addEventListener('mousemove', (e) => {
            const imageWrapperWidth = imageWrapper.getBoundingClientRect().left;
            const imageWrapperHeight = imageWrapper.getBoundingClientRect().top;

            let x = (e.clientX - (imageWrapperWidth));
            let y = (e.clientY - (imageWrapperHeight));

            const tl = gsap.timeline();


            if (e.target.className.includes('on-hover')) {
                gsap.to(hide, 0.5, { opacity: 0.2 })
                gsap.to(images, 0.8, { opacity: 1, x, y, stagger: 0.05, ease: 'power2.out' })
            } else {
                gsap.to(hide, 0.5, { opacity: 1 })
                gsap.to(images, 0.4, { opacity: 0, x, y, stagger: 0.03, ease: 'power2.out' })
            }
        })
    }
}

export default homeView;
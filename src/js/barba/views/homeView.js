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

        document.addEventListener('mousemove', (e) => {
            const imageWrapperWidth = imageWrapper.getBoundingClientRect().left;
            const imageWrapperHeight = imageWrapper.getBoundingClientRect().top;

            let x = (e.clientX - (imageWrapperWidth / 2));
            let y = (e.clientY - (imageWrapperHeight));

            const tl = gsap.timeline({ paused: true });

            tl
                .to(imageWrapper, 0.5, { autoAlpha: 1, top: y, left: x })
                .to(hide, 0.5, { opacity: 0.1 }, 0);

            if (e.target.className.includes('on-hover')) {
                gsap.to(hide, 0.5, { opacity: 0.2 })
                gsap.to(imageWrapper, 0.5, { opacity: 1, top: y, left: x })
            } else {
                gsap.to(hide, 0.5, { opacity: 1 })
                gsap.to(imageWrapper, 0.5, { opacity: 0, top: y, left: x })
            }
        })
    }
}

export default homeView;
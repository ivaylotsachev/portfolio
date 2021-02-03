import gsap from 'gsap';
import { lettering } from '../../utils';

const aboutView = {
    namespace: 'about',
    beforeEnter() {
        console.log('about before enter');
        lettering('about-lettering', 'About', 'about-title')
        gsap.set('.title-animated', { autoAlpha: 1 })
    },
    afterEnter() {

    }
}

export default aboutView;
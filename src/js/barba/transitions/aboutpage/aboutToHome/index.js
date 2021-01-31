import aboutToHomeEnter from './aboutToHomeEnter';
import aboutToHomeLeave from './aboutToHomeLeave';

export default {
    name: 'about-to-home',
    from: { namespace: 'about'},
    to: { namespace: 'home'},
    leave: ({ current }) => {
        console.log('about-to-home leave');
        return aboutToHomeLeave(current.container);
    },
    enter({ next }) {
        console.log('about-to-home enter');
        aboutToHomeEnter(next.container);
    }
}
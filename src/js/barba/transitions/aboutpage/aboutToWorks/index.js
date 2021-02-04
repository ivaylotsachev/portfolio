import aboutToWorksEnter from './aboutToWorksEnter';
import aboutToWorksLeave from './aboutToWorksLeave';
export default {
    name: 'about-to-works',
    from: { namespace: 'about'},
    to: { namespace: 'works'},
    leave: ({ current }) => {
        console.log('about-to-works leave');
        return aboutToWorksLeave(current.container);
    },
    enter({ next }) {
        console.log('about-to-works enter');
        aboutToWorksEnter(next.container);
    }
}
import worksToAboutEnter from './worksToAboutEnter';
import worksToAboutLeave from './worksToAboutLeave';

export default {
    name: 'works-to-home',
    from: { namespace: 'works' },
    to: { namespace: 'about'},
    leave: ({ current }) => {
        console.log('works-to-about leave');
        return worksToAboutLeave(current.container);
    },
    enter({ next }) {
        console.log('works-to-about enter');
        worksToAboutEnter(next.container);
    }
}
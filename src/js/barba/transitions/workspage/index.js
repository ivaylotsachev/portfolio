import worksOnce from './worksOnce';

export default {
    name: 'works-once',
    to: { namespace: 'works'},
    once({ next }) {
      worksOnce(next.container);
    },
}
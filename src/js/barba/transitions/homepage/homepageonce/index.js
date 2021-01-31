import homepageOnce from './homepageOnce';

export default {
    name: 'home',
    to: { namespace: 'home'},
    once({ next }) {
        homepageOnce(next.container);
        console.log('home once');
    }
}
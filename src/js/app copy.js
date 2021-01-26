import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';
import gsap from 'gsap';
import { homepageOnce, homepageEnter, homeToCareerEnter, homeToCareerLeave } from './animations';

const resetActiveLink = () =>
  gsap.set('.is-active span', {
    xPercent: -101,
    transformOrigin: 'left',
  });

const routes = [
  { name: 'home', path: '/index.html' },
  { name: 'works', path: '/works.html' },
  { name: 'career', path: '/career.html' },
  { name: 'roobar', path: '/roobar.html' },
];

barba.use(barbaPrefetch);
// barba.use(barbaRouter, { routes });

barba.hooks.once((data) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

barba.init({
  preventRunning: true,
  transitions: [
    // {
    //   name: 'general',
    //   once({}) {
    //     resetActiveLink();
    //     console.log('global once');
    //   },
    // },
    // {
    //   name: 'home',
    //   to: { namespace: ['home'] },
    //   once({ next }) {
    //     resetActiveLink();
    //     homepageOnce(next.container);
    //     console.log('home once')
    //   },
    //   leave: ({ current }) => {
    //     console.log('home page leave');
    //     // homePageLeave(current.container);
    //   },
    //   enter({ next }) {
    //     console.log('home page enter');
    //     homepageEnter(next.container);
    //   },
    // },
    {
      from: {namespace: ['home']},
      to: {namespace: ['career']},
      sync: false,
      once() {
        console.log('career once');
      },
      leave: ({ current }) => {
        // resetActiveLink();
        homeToCareerLeave(current.container)
      },
      enter({ next}) {
        homeToCareerEnter(next.container)
      },
    }
  ],
});

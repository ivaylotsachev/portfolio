import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';
import gsap from 'gsap';
import {
  homepageOnce,
  homepageEnter,
  homepageLeave,
  aboutEnter,
  aboutLeave,
} from './animations';

const resetActiveLink = () =>
  gsap.set('.is-active span', {
    xPercent: -101,
    transformOrigin: 'left',
  });

const routes = [
  { name: 'home', path: '/index.html' },
  { name: 'works', path: '/works.html' },
  { name: 'about', path: '/about.html' },
  { name: 'roobar', path: '/roobar.html' },
];

barba.use(barbaPrefetch);
barba.use(barbaRouter, { routes });

barba.hooks.once((data) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

barba.init({
  transitions: [
    {
      name: 'general',
      leave() {
        console.log('general leave');
      },
      enter() {
        console.log('general enter');
      },
    },
    {
      name: 'home',
      to: { namespace: 'home' },
      once({ next }) {
        resetActiveLink();
        homepageOnce(next.container);
        console.log('home once');
      },
      leave: ({ current }) => {
        console.log('home page leave');
        homepageLeave(current.container);
      },
      enter({ next }) {
        console.log('home page enter');
        homepageEnter(next.container);
      },
    },
  ],
});

import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import barbaRouter from '@barba/router';
import gsap from 'gsap';
import views from './barba/views';
import transitions from './barba/transitions'
import { lettering } from './utils';

lettering('intro-title-one', 'portfolio of', 'title-one');
lettering('intro-title-two', 'a developer', 'title-two');

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

barba.hooks.beforeEnter(data => {})

barba.init({ views, transitions });

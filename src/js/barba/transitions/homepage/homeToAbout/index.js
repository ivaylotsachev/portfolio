import homeToAboutLeave from './homeToAboutLeave';
import homeToAboutEnter from './homeToAboutEnter';

export default {
    name: 'home-to-about',
    to: { namespace: 'about'},
    from: { namespace: 'home'},
    leave: ({ current }) => {
      console.log("home-to-about leave")
      return homeToAboutLeave(current.container);
    },
    enter({ next }) {
      console.log('home-to-about enter');
      homeToAboutEnter(next.container)
    }
}
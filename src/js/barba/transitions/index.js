import homepageOnce from './homepage/homepageonce/';
import homeToAbout from "./homepage/homeToAbout";
import aboutToHome from './aboutpage/aboutToHome';
import aboutToWorks from './aboutpage/aboutToWorks';
import worksOnce from './workspage/';
import worksToAbout from './workspage/worksToAbout'

const transitions = [homepageOnce, homeToAbout, aboutToHome, aboutToWorks, worksOnce, worksToAbout];

export default transitions;
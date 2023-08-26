import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScreen from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

let stickyHeader = new StickyHeader();

new RevealOnScreen(document.querySelectorAll(".feature-item"), 75);
new RevealOnScreen(document.querySelectorAll(".testimonial"), 60);

let mobileMenu = new MobileMenu;

if(module.hot) {
    module.hot.accept()
}
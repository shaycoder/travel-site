import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScreen from './modules/RevealOnScroll';

let mobileMenu = new MobileMenu;
new RevealOnScreen(document.querySelectorAll(".feature-item"), 75);
new RevealOnScreen(document.querySelectorAll(".testimonial"), 60);

if(module.hot) {
    module.hot.accept()
}
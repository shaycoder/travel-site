import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScreen from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

new Modal();
let stickyHeader = new StickyHeader();
new RevealOnScreen(document.querySelectorAll(".feature-item"), 75);
new RevealOnScreen(document.querySelectorAll(".testimonial"), 60);
let mobileMenu = new MobileMenu();
    
/*
document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if(typeof modal == "undefined") {
            /* Promise has then and catch in which functions can be passed in both
                promise waits if meets then will be called else catch will be used */
            /*import(/* webpackChunkName: "modal" */ /*'./modules/Modal').then(x = {
                /*modal = new x.default()
                /*setTimeout(() => modal.openTheModal(), 20) /* wait for some time */
            /*}).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal();
        }
    })
})
*/ /* event-emitter */

if(module.hot) {
    module.hot.accept()
}
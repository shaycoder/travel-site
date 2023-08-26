import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScreen {
    constructor(els, thresholdPrecent) {
        this.itemsToReveal = els;
        this.thresholdPrecent = thresholdPrecent;
        this.browserHeight = window.innerHeight;
        this.hideIntentionally();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    hideIntentionally() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran");
            this.browserHeight = window.innerHeight;            
        }, 333));
    }

    calcCaller() {
        console.log("Scroll function ran");
        this.itemsToReveal.forEach(el => {
            if(el.isRevealed == false) {
                this.calculateIfScrolledTo(el);
            }
        })
    }

    calculateIfScrolledTo(el) {
        if(window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("Element was calculated")
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
            if(scrollPercent < this.thresholdPrecent) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }

}

export default RevealOnScreen;
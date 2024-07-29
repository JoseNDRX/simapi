(()=>{
    "use strict";
    new class {
        constructor() {
            this.headerElement = document.querySelector(".js-header"),
            this.logoElement = document.querySelector(".js-logo"),
            this.heroElement = document.getElementById("hero"),
            this.mainElement = document.querySelector("main"),
            this.overlayTop = document.querySelector(".overlay-top"),
            this.heroElement && this.logoElement && window.addEventListener("scroll", (()=>{
                let e = parseInt(this.logoElement.dataset.triggerHeight);
                e || (e = 21);
                const t = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2 - e
                  , s = this.mainElement.getBoundingClientRect().top;
                if (this.headerElement && 0 === window.scrollY && (this.headerElement.classList.remove("opacity-100"),
                this.headerElement.classList.add("opacity-0", "overflow-hidden", "h-0")),
                this.headerElement && window.scrollY > 0) {
                    this.headerElement.classList.remove("opacity-0", "overflow-hidden", "h-0"),
                    this.headerElement.classList.add("opacity-100");
                    s <= this.headerElement.clientHeight + 75 && (this.headerElement.classList.remove("opacity-100"),
                    this.headerElement.classList.add("opacity-0", "overflow-hidden"))
                }
                window.innerWidth >= 820 && (window.scrollY > t && (this.logoElement.classList.contains("hidden") && this.logoElement.classList.remove("hidden"),
                this.logoElement.classList.add("block"),
                this.heroElement.style.transform = `translateY(${t - window.scrollY}px)`,
                this.logoElement.style.transform = `translate(-50%, ${t - window.scrollY}px)`,
                this.overlayTop.classList.add("overlay-top-scrolled")),
                window.scrollY < t && (this.logoElement.classList.contains("block") && this.logoElement.classList.remove("block"),
                this.logoElement.classList.add("hidden"),
                this.heroElement.style.transform = "translateY(0)",
                this.logoElement.style.transform = "translate(-50%, 0)",
                this.overlayTop.classList.remove("overlay-top-scrolled")))
            }
            ))
        }
    }
}
)();

import { gsap, Power2 } from "gsap";
function hoverBtn() {
  // Mouse enter and leave for .w-hover-btn
  document.querySelectorAll<HTMLElement>(".w-hover-btn").forEach(btn => {
    btn.addEventListener("mouseenter", e => {
      const rect = btn.getBoundingClientRect();
      const x = (e as MouseEvent).pageX - rect.left - window.scrollX;
      const y = (e as MouseEvent).pageY - rect.top - window.scrollY;
      const dot = btn.querySelector<HTMLElement>(".tp-btn-circle-dot");
      if (dot) {
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
      }
    });
    btn.addEventListener("mouseout", e => {
      const rect = btn.getBoundingClientRect();
      const x = (e as MouseEvent).pageX - rect.left - window.scrollX;
      const y = (e as MouseEvent).pageY - rect.top - window.scrollY;
      const dot = btn.querySelector<HTMLElement>(".tp-btn-circle-dot");
      if (dot) {
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
      }
    });
  });

  // Parallax effect for .w-hover-btn-wrapper and .w-hover-btn-item
  const hoverBtns = gsap.utils.toArray<HTMLElement>(".w-hover-btn-wrapper");
  const hoverBtnItems = gsap.utils.toArray<HTMLElement>(".w-hover-btn-item");
  hoverBtns.forEach((btn, i) => {
    btn.addEventListener("mousemove", e => {
      callParallax(e);
    });
    function callParallax(e: MouseEvent) {
      parallaxIt(e, hoverBtnItems[i], 60);
    }
    function parallaxIt(e: MouseEvent, target: HTMLElement, movement: number) {
      const rect = btn.getBoundingClientRect();
      const relX = e.pageX - rect.left - window.scrollX;
      const relY = e.pageY - rect.top - window.scrollY;
      gsap.to(target, {
        duration: 1,
        x: ((relX - btn.offsetWidth / 2) / btn.offsetWidth) * movement,
        y: ((relY - btn.offsetHeight / 2) / btn.offsetHeight) * movement,
        ease: Power2.easeOut,
      });
    }
    btn.addEventListener("mouseleave", () => {
      gsap.to(hoverBtnItems[i], {
        duration: 1,
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
};

export {
  hoverBtn,
}
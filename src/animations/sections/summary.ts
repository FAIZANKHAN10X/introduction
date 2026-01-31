import gsap from "gsap";

export function animateSummary(root: HTMLElement) {
  const q = gsap.utils.selector(root);

  gsap.from(q("[data-anim='summary-left']"), {
    y: 14,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power2.out",
  });

  gsap.from(q("[data-anim='summary-card']"), {
    y: 14,
    autoAlpha: 0,
    duration: 0.7,
    ease: "power2.out",
    delay: 0.05,
  });
}

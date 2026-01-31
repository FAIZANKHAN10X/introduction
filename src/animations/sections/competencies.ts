import gsap from "gsap";

export function animateCompetencies(root: HTMLElement) {
  const q = gsap.utils.selector(root);

  gsap.from(q("[data-anim='competency-card']"), {
    y: 14,
    autoAlpha: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.06,
  });
}

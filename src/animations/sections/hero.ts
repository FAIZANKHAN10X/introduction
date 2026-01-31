import gsap from "gsap";

export function animateHero(root: HTMLElement) {
  const q = gsap.utils.selector(root);

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(q("[data-anim='hero-title']"), {
    y: 18,
    autoAlpha: 0,
    duration: 0.75,
  })
    .from(
      q("[data-anim='hero-subtitle']"),
      { y: 14, autoAlpha: 0, duration: 0.65 },
      "-=0.45",
    )
    .from(
      q("[data-anim='hero-copy']"),
      { y: 10, autoAlpha: 0, duration: 0.55 },
      "-=0.35",
    )
    .from(
      q("[data-anim='hero-cta']"),
      { y: 10, autoAlpha: 0, duration: 0.55 },
      "-=0.25",
    );
}

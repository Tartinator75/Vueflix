import gsap from "gsap";
export default {
  methods: {
    NavEnter() {
        gsap.fromTo(
          ".Navigation div",
          { x: -250 },
          { x: 0, duration: 1, ease: [0.6, 0.01, -0.05, 0.9], stagger: 0.3 }
        );
      },
      AboutEnter() {
        gsap.fromTo(
          ".About div div",
          { y: 250 },
          { y: 0, duration: 1, ease: [0.6, 0.01, -0.05, 0.9], stagger: 0.1 }
        );
      },
      AboutLeave() {
        gsap.to(".About div div", {
          y: 250,
          duration: 1,
          ease: [0.6, 0.01, -0.05, 0.9],
          stagger: 0.1,
        });
      },
        TrailerEnter() {
        gsap.fromTo(
          ".Trailer .trailer-video",
          { opacity: 0 },
          { opacity: 1, duration: 1,delay:0.5, ease: [0.6, 0.01, -0.05, 0.9], stagger: 0.1 }
        );
      },
      TrailerLeave() {
        gsap.to(".Trailer .trailer-video", {
          opacity: 0,
          duration: 0.8,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
      },
      CastEnter() {
        gsap.from(".Cast .OpenBtn", { x: -500 });
        gsap.fromTo(
          ".Cast .List",
          { x: -500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
            onComplete: function() {},
          }
        );
      },
      CastLeave() {
        gsap.to(".Cast .List", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          onComplete: function() {},
        });
        gsap.to(".Cast .OpenBtn", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
          onComplete: function() {},
        });
        gsap.to(".Cast .Affichage .Name", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
        gsap.to(".Cast .Affichage .Image", {
          y: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
        gsap.to(".Cast .Affichage .Description", {
          x: 500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
  }
}
};

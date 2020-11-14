import gsap from "gsap";


// ANIMATION GSAP POUR LA PAGE DETAILS EN UTILISANT TRANSITION DE VUEJS
export default {
  methods: {
    CastHover(e) {
        document.querySelector(".List-element.active").classList.remove("active");
        e.target.classList.add("active");
      },
      CastAffichageEnter() {
        gsap.to(".Cast .List", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
      },
      ListLeave() {
        gsap.to(".Cast .List", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
      },
      ListEnter() {
        gsap.fromTo(
          ".Cast .List",
          { x: -500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }
        );
      },
      BtnLeave() {
        gsap.to(".Cast .OpenBtn", {
          x: -500,
          duration: 1.4,
          ease: [0.6, 0.01, -0.05, 0.9],
        });
      },
      BtnEnter() {
        gsap.fromTo(
          ".Cast .OpenBtn",
          { x: -500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }
        );
      },
      AffichageLeave() {
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
      },
      AffichageEnter() {
        gsap.fromTo(
          ".Affichage .Name",
          { x: -500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }
        );
        gsap.fromTo(
          ".Affichage .Image",
          { x: -500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }
        );
        gsap.fromTo(
          ".Affichage .Description",
          { x: 500 },
          {
            x: 0,
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }
        );
  }
}
};

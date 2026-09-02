/**
 * IPSO FACTO SYNERGY SRL — script del sito.
 * Due sole responsabilità: il menu mobile e l'anno nel piè di pagina.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var aperto = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(aperto));
      toggle.setAttribute("aria-label", aperto ? "Chiudi il menu" : "Apri il menu");
    });

    // Dopo un clic su una voce, il menu mobile si richiude da solo.
    nav.addEventListener("click", function (evento) {
      if (evento.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri il menu");
      }
    });
  }

  var anno = document.getElementById("anno");
  if (anno) {
    anno.textContent = String(new Date().getFullYear());
  }
})();

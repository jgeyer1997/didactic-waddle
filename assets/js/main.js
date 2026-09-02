/**
 * IPSO FACTO SYNERGY SRL — site script.
 * Three responsibilities only: the mobile menu, the product image galleries
 * and the year in the footer.
 */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Chiudi il menu" : "Apri il menu");
    });

    // After a click on an entry, the mobile menu closes itself.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Apri il menu");
      }
    });
  }

  // Each product image carries the file names of its whole category in
  // data-images. A click shows the next one and the list wraps around; nothing
  // ever changes on its own.
  var galleries = document.querySelectorAll(".product img[data-images]");

  Array.prototype.forEach.call(galleries, function (img) {
    var urls = img.getAttribute("data-images").split(",").map(function (name) {
      return new URL(name.trim(), img.src).href;
    });

    if (urls.length < 2) {
      return;
    }

    var index = 0;
    var isPreloaded = false;

    // The other shots are fetched on the first hint of interest, so that the
    // swap on click is instant.
    function preload() {
      if (isPreloaded) {
        return;
      }
      isPreloaded = true;
      urls.forEach(function (url) {
        new Image().src = url;
      });
    }

    function showNext() {
      index = (index + 1) % urls.length;
      img.src = urls[index];
    }

    // The image only advertises itself as a control once the script runs.
    img.classList.add("is-clickable");
    img.setAttribute("role", "button");
    img.setAttribute("tabindex", "0");

    img.addEventListener("mouseenter", preload);
    img.addEventListener("focus", preload);

    img.addEventListener("click", function () {
      preload();
      showNext();
    });

    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        preload();
        showNext();
      }
    });
  });

  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();

(() => {
  // src/js/pages/slideover.js
  (function() {
    "use strict";
    $("#programmatically-show-slideover").on("click", function() {
      const el = document.querySelector("#programmatically-slideover");
      const slideOver = tailwind.Modal.getOrCreateInstance(el);
      slideOver.show();
    });
    $("#programmatically-hide-slideover").on("click", function() {
      const el = document.querySelector("#programmatically-slideover");
      const slideOver = tailwind.Modal.getOrCreateInstance(el);
      slideOver.hide();
    });
    $("#programmatically-toggle-slideover").on("click", function() {
      const el = document.querySelector("#programmatically-slideover");
      const slideOver = tailwind.Modal.getOrCreateInstance(el);
      slideOver.toggle();
    });
  })();
})();

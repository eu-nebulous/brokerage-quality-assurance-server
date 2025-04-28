(() => {
  // src/js/pages/modal.js
  (function() {
    "use strict";
    $("#programmatically-show-modal").on("click", function() {
      const el = document.querySelector("#programmatically-modal");
      const modal = tailwind.Modal.getOrCreateInstance(el);
      modal.show();
    });
    $("#programmatically-hide-modal").on("click", function() {
      const el = document.querySelector("#programmatically-modal");
      const modal = tailwind.Modal.getOrCreateInstance(el);
      modal.hide();
    });
    $("#programmatically-toggle-modal").on("click", function() {
      const el = document.querySelector("#programmatically-modal");
      const modal = tailwind.Modal.getOrCreateInstance(el);
      modal.toggle();
    });
  })();
})();

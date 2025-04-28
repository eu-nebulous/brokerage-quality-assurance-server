(() => {
  // src/js/components/base/classic-editor.js
  (function() {
    "use strict";
    $(".editor").each(function() {
      const el = this;
      ClassicEditor.create(el).catch((error) => {
        console.error(error);
      });
    });
  })();
})();

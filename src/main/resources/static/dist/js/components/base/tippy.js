(() => {
  // src/js/components/base/tippy.js
  (function() {
    "use strict";
    $(".tooltip").each(function() {
      let options = {
        content: $(this).attr("title")
      };
      if ($(this).data("trigger") !== void 0) {
        options.trigger = $(this).data("trigger");
      }
      if ($(this).data("placement") !== void 0) {
        options.placement = $(this).data("placement");
      }
      if ($(this).data("theme") !== void 0) {
        options.theme = $(this).data("theme");
      }
      if ($(this).data("tooltip-content") !== void 0) {
        options.content = $($(this).data("tooltip-content"))[0];
      }
      $(this).removeAttr("title");
      tippy(this, {
        arrow: roundArrow,
        animation: "shift-away",
        ...options
      });
    });
  })();
})();

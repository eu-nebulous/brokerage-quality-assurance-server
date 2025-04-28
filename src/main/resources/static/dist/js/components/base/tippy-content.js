(() => {
  // src/js/components/base/tippy-content.js
  (function() {
    "use strict";
    $(".tippy-content").each(function() {
      let options = {};
      if ($(this).data("trigger") !== void 0) {
        options.trigger = $(this).data("trigger");
      }
      if ($(this).data("placement") !== void 0) {
        options.placement = $(this).data("placement");
      }
      if ($(this).data("theme") !== void 0) {
        options.theme = $(this).data("theme");
      }
      const initTippyContent = () => {
        if (!$(this).find("canvas").hasClass("chart") || $(this).find("canvas").hasClass("chart") && $(this).find("canvas").attr("style") !== void 0) {
          tippy(`[data-tooltip="${$(this).attr("id")}"]`, {
            plugins: [animateFillPlugin],
            content: $(this)[0],
            allowHTML: true,
            arrow: roundArrow,
            popperOptions: {
              modifiers: [
                {
                  name: "preventOverflow",
                  options: {
                    rootBoundary: "viewport"
                  }
                }
              ]
            },
            animateFill: false,
            animation: "shift-away",
            theme: "light",
            trigger: "click",
            ...options
          });
        } else {
          setTimeout(() => {
            initTippyContent();
          }, 500);
        }
      };
      initTippyContent();
    });
  })();
})();

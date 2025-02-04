(() => {
  // src/js/themes/nebulous.js
  (function() {
    "use strict";
    $(".side-menu").on("click", function() {
      if ($(this).parent().find("ul").length) {
        if ($(this).parent().find("ul").first()[0].offsetParent !== null) {
          $(this).find(".side-menu__sub-icon").removeClass("transform rotate-180");
          $(this).removeClass("side-menu--open");
          $(this).parent().find("ul").first().slideUp(300, function() {
            $(this).removeClass("side-menu__sub-open");
          });
        } else {
          $(this).find(".side-menu__sub-icon").addClass("transform rotate-180");
          $(this).addClass("side-menu--open");
          $(this).parent().find("ul").first().slideDown(300, function() {
            $(this).addClass("side-menu__sub-open");
          });
        }
      }
    });
    const initTooltips = function tooltips() {
      $(".side-menu").each(function() {
        if (this._tippy == void 0) {
          const content = $(this).find(".side-menu__title").html().replace(/<[^>]*>?/gm, "").trim();
          tippy(this, {
            content,
            arrow: roundArrow,
            animation: "shift-away",
            placement: "right"
          });
        }
        if ($(window).width() <= 1260 || $(this).closest(".side-nav").hasClass("side-nav--simple")) {
          this._tippy.enable();
        } else {
          this._tippy.disable();
        }
      });
      return tooltips;
    }();
    window.addEventListener("resize", () => {
      initTooltips();
    });
  })();
})();

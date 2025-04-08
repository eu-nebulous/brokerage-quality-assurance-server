(() => {
  // node_modules/@left4code/tw-starter/dist/js/alert.js
  (function() {
    "use strict";
    $("body").on("click", "[data-tw-dismiss='alert']", function() {
      hide($(this).closest(".alert"));
    });
    function show(el) {
      $(el).fadeIn(300, function() {
        $(this).addClass("show");
        const event2 = new Event("shown.tw.alert");
        $(el)[0].dispatchEvent(event2);
      });
      const event = new Event("show.tw.alert");
      $(el)[0].dispatchEvent(event);
    }
    function hide(el) {
      $(el).fadeOut(300, function() {
        $(this).removeClass("show");
        const event2 = new Event("hidden.tw.alert");
        $(el)[0].dispatchEvent(event2);
      });
      const event = new Event("hide.tw.alert");
      $(el)[0].dispatchEvent(event);
    }
    function toggle(el) {
      $(el).hasClass("show") ? hide(el) : show(el);
    }
    function createInstance(el) {
      return {
        show() {
          show(el);
        },
        hide() {
          hide(el);
        },
        toggle() {
          toggle(el);
        }
      };
    }
    (function init() {
      $(".alert").each(function() {
        this["__alert"] = createInstance(this);
      });
      if (window.tailwind === void 0)
        window.tailwind = {};
      window.tailwind.Alert = {
        getInstance(el) {
          return el.__alert;
        },
        getOrCreateInstance(el) {
          return el.__alert === void 0 ? createInstance(el) : el.__alert;
        }
      };
    })();
  })();
})();

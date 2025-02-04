(() => {
  // src/js/components/base/theme-color.js
  (() => {
    if (localStorage.getItem("theme-color") === null) {
      localStorage.setItem("theme-color", "default");
      $("html").attr("class", "default");
    } else {
      $("html").attr("class", localStorage.getItem("theme-color"));
    }
    localStorage.setItem("appearance-mode", "dark");
    $("html").addClass("dark");
    $("[data-theme-color]").on("click", function() {
      localStorage.setItem("theme-color", $(this).attr("data-theme-color"));
      $("html").attr("class", $(this).attr("data-theme-color"));
      $("html").addClass("dark");
      $("[data-theme-color]").removeClass("active");
      $(`[data-theme-color='${localStorage.getItem("theme-color")}']`).addClass("active");
    });
  })();
})();

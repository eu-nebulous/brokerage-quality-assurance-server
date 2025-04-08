(() => {
  // src/js/components/base/highlight.js
  (function() {
    "use strict";
    $(".highlight").each(function() {
      let source = $(this).find("code").html();
      let replace = helper.replaceAll(source, "HTMLOpenTag", "<");
      replace = helper.replaceAll(replace, "HTMLCloseTag", ">");
      let originalSource = $(
        '<textarea class="absolute w-0 h-0 p-0 -mt-1 -ml-1"></textarea>'
      ).val(replace);
      $(this).append(originalSource);
      if ($(this).find("code").hasClass("javascript")) {
        replace = jsBeautify(replace);
      } else {
        replace = jsBeautify.html(replace);
      }
      replace = helper.replaceAll(replace, "<", "&lt;");
      replace = helper.replaceAll(replace, ">", "&gt;");
      $(this).find("code").html(replace);
    });
    hljs.highlightAll();
  })();
})();

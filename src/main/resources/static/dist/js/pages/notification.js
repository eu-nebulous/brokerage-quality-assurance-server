(() => {
  // src/js/pages/notification.js
  (function() {
    "use strict";
    $("#basic-non-sticky-notification-toggle").on("click", function() {
      Toastify({
        node: $("#basic-non-sticky-notification-content").clone().removeClass("hidden")[0],
        duration: 3e3,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
    });
    $("#basic-sticky-notification-toggle").on("click", function() {
      Toastify({
        node: $("#basic-non-sticky-notification-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
    });
    $("#success-notification-toggle").on("click", function() {
      Toastify({
        node: $("#success-notification-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
    });
    $("#notification-with-actions-toggle").on("click", function() {
      Toastify({
        node: $("#notification-with-actions-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
    });
    $("#notification-with-avatar-toggle").on("click", function() {
      let avatarNotification = Toastify({
        node: $("#notification-with-avatar-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
      $(avatarNotification.toastElement).find('[data-dismiss="notification"]').on("click", function() {
        avatarNotification.hideToast();
      });
    });
    $("#notification-with-split-buttons-toggle").on("click", function() {
      let splitButtonsNotification = Toastify({
        node: $("#notification-with-split-buttons-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
      $(splitButtonsNotification.toastElement).find('[data-dismiss="notification"]').on("click", function() {
        splitButtonsNotification.hideToast();
      });
    });
    $("#notification-with-buttons-below-toggle").on("click", function() {
      Toastify({
        node: $("#notification-with-buttons-below-content").clone().removeClass("hidden")[0],
        duration: -1,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true
      }).showToast();
    });
  })();
})();

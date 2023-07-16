document.addEventListener("DOMContentLoaded", function() {
    var textOverlay = document.getElementByClass("text-overlay");
    textOverlay.style.opacity = "1";
  });

  document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector("header").offsetHeight;
    document.documentElement.style.setProperty("--header-height", headerHeight + "px");
  });
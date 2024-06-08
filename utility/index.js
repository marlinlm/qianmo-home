export const thrownutility = {
  btnHover() {
    var headerButtons = document.querySelectorAll(".header-button");
    headerButtons.forEach(function (button) {
      button.addEventListener("mouseenter", function (e) {
        var parentOffset = this.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left - window.scrollX,
          relY = e.pageY - parentOffset.top - window.scrollY;
        var span = this.querySelector("span");
        if (span) {
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      });

      button.addEventListener("mouseout", function (e) {
        var parentOffset = this.getBoundingClientRect(),
          relX = e.pageX - parentOffset.left - window.scrollX,
          relY = e.pageY - parentOffset.top - window.scrollY;
        var span = this.querySelector("span");
        if (span) {
          span.style.top = relY + "px";
          span.style.left = relX + "px";
        }
      });
    });
  },
  stickyHeader() {
    var wind = window;
    var sticky = document.getElementById("sticky-header");
    if (sticky) {
      wind.addEventListener("scroll", function () {
        var scroll = wind.scrollY || document.documentElement.scrollTop;
        if (scroll < 100) {
          sticky.classList.remove("sticky-nav");
        } else {
          sticky.classList.add("sticky-nav");
        }
      });
    }

    var wind = window;
    var navbar = document.getElementById("navbar");
    if (navbar) {
      wind.addEventListener("scroll", function () {
        var scroll = wind.scrollY || document.documentElement.scrollTop;

        if (scroll < 100) {
          navbar.classList.remove("sticky-menu");
        } else {
          navbar.classList.add("sticky-menu");
        }
      });
    }
  },
  scrollAnimation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  searchActive() {
    document.querySelector("body").classList.toggle("search-active");
  },
  sidebarToggle() {
    document.querySelector(".sidebar-group").classList.toggle("isActive");
  },
  scrollTop() {
    let scrollUp = document.querySelector(".go-top"),
      lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st > 110) {
        scrollUp.classList.add("active");
      } else {
        scrollUp.classList.remove("active");
      }
    });
  },
};

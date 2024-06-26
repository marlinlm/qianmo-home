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

  stickySubHeader(height) {
    var wind = window;
    var sticky = document.getElementById("sticky-subheader");
    if (sticky) {
      wind.addEventListener("scroll", function () {
        var scroll = wind.scrollY || document.documentElement.scrollTop;
        if (scroll < height) {
          sticky.classList.remove("sticky-nav");
        } else {
          sticky.classList.add("sticky-nav");
        }
      });
    }
  },

  stickySideBar() {
    var height = 600;
    var wind = window;
    var sticky = document.getElementById("sidebar");
    if (sticky) {
      wind.addEventListener("scroll", function () {
        var scroll = wind.scrollY || document.documentElement.scrollTop;
        if (scroll < height) {
          sticky.classList.remove("sticky-sidebar");
          sticky.style.top = (height - scroll) + "px"
        } else {
          sticky.classList.add("sticky-sidebar");
          sticky.style.top = (100) + "px"
        }
      });
    }
  },

  updateBackground(background) {
    // var wind = window;
    var bg = document.getElementById("background");
    if(bg){
      // alert("----" + background);
      // alert(bg.style.getPropertyPriority("background"));
      bg.style.background = "url(" +  background + ") center";
      bg.style.backgroundRepeat = "no-repeat";
      bg.style.backgroundSize = "cover";
      bg.style.backgroundPosition = "center";
      // alert(bg.style.getPropertyValue("background"));
    }
  },


  stickyHeader() {
    var wind = window;
    var navbar = document.getElementById("navbar");
    if (navbar) {
      wind.addEventListener("scroll", function () {
        var scroll = wind.scrollY || document.documentElement.scrollTop;

        if (scroll < 80) {
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

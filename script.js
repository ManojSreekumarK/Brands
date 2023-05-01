const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});
// Burger menus
document.addEventListener("DOMContentLoaded", function () {
  // open
  const burger = document.getElementById("hammenu");
  const navmenu = document.getElementById("easein");
  const backdrop = document.getElementById("backdrop");

  burger.addEventListener("click", function () {
    backdrop.classList.toggle("hidden");
    navmenu.classList.toggle("leftfull");
    document.body.style.overflow = "hidden";
  });

  // close
  const close = document.getElementById("close");
  close.addEventListener("click", function () {
    backdrop.classList.toggle("hidden");
    navmenu.classList.toggle("leftfull");
    document.body.style.overflow = "auto";
  });
  backdrop.addEventListener("click", function () {
    backdrop.classList.toggle("hidden");
    navmenu.classList.toggle("leftfull");
    document.body.style.overflow = "auto";
  });
});
///////////////////////////////////////carousal///////////////////////////////////////
(function ($) {
  var slide = function (ele, options) {
    var $ele = $(ele);

    var setting = {
      speed: 1000,
      interval: 2000,
    };

    $.extend(true, setting, options);

    var states = [
      {
        $zIndex: 3,
      },
      {
        $zIndex: 5,
      },
      {
        $zIndex: 7,
      },
      {
        $zIndex: 6,
      },
      {
        $zIndex: 4,
      },
    ];

    var $lis = $ele.find("li");
    var timer = null;

    $ele.find(".hi-next").on("click", function (event) {
      event.preventDefault();
      next();
    });
    $ele.find(".hi-prev").on("click", function (event) {
      event.preventDefault();
      states.push(states.shift());
      move();
    });
    $ele
      .on("mouseenter", function () {
        clearInterval(timer);
        timer = null;
      })
      .on("mouseleave", function () {
        autoPlay();
      });

    move();
    autoPlay();

    function move() {
      $lis.each(function (index, element) {
        var state = states[index];
        if (!state) {
          return;
        }
        $(element)
          .css("zIndex", state.$zIndex)
          .finish()
          .animate(state, setting.speed)
          .find("div");
        if (state.$zIndex === 7) {
          $(element).addClass("slide7");
        } else {
          $(element).removeClass("slide7");
        }
        if (state.$zIndex === 6) {
          $(element).addClass("slide6");
        } else {
          $(element).removeClass("slide6");
        }
        if (state.$zIndex === 5) {
          $(element).addClass("slide5");
        } else {
          $(element).removeClass("slide5");
        }
        if (state.$zIndex === 4) {
          $(element).addClass("slide4");
        } else {
          $(element).removeClass("slide4");
        }
        if (state.$zIndex === 3) {
          $(element).addClass("slide3");
        } else {
          $(element).removeClass("slide3");
        }
      });
    }

    function next() {
      states.unshift(states.pop());
      move();
    }

    function autoPlay() {
      timer = setInterval(next, setting.interval);
    }
  };

  $.fn.hiSlide = function (options) {
    $(this).each(function (index, ele) {
      slide(ele, options);
    });

    return this;
  };
})(jQuery);
$(".slide").hiSlide();

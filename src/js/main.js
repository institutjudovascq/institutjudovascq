// Get that hamburger menu cookin' //
async function sendContactForm() {
  const spinnerIcon = document.getElementById("spinnerIcon");
  const sendIcon = document.getElementById("sendIcon");

  spinnerIcon.classList.toggle("is-hidden");
  sendIcon.classList.add("is-hidden");
  try {
    const response = await fetch("https://formsubmit.co/ajax/edieval@msn.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      spinnerIcon.classList.toggle("is-hidden");
      sendIcon.classList.toggle("is-hidden");
    }
  } catch (e) {
    console.error(e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0,
  );
  const navbarItems = document.querySelectorAll(".navbar-item");

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
    navbarItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Close burger-menu
        document
          .getElementById(el.dataset.target)
          .classList.remove("is-active");
        el.classList.remove("is-active");
      });
    });
  });

  const contactFormElement = document.getElementById("contactForm");
  contactFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    sendContactForm();
  });
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500,
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).on("load", function () {
  const Body = $("body");
  Body.addClass("preloader-site");
});

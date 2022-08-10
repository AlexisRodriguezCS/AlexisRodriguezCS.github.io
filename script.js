// Reset form after hitting submit
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Nav bar hide/unhide when scrolling
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
let width = window.screen.width;

window.addEventListener("scroll", () => {
  if (width > 900) {
    if (lastScrollY < window.scrollY) {
      // Scrolling down
      nav.classList.add("hide");
    } else {
      // Scrolling up
      nav.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  }
});

// Mobile Hamburger calls open/close functions when clicked
const burgerIcon = document.querySelector(".burger_container");
isMenuOpen = false;
burgerIcon.addEventListener("click", (e) => {
  document.getElementById("topbar").classList.toggle("active");
  document.getElementById("btmbar").classList.toggle("active");
  if (!isMenuOpen) {
    openNav();
  } else {
    closeNav();
  }
});

// Opens mobile nav and clovers whole page
function openNav() {
  // console.log("Opening\n");
  // document.getElementById("arrow").style.display = "block";
  document.getElementById("mobile_links").style.display = "block";
  nav.classList.add("mobile_nav");
  isMenuOpen = true;
}

// Closes mobile nav and back to hamburger icon
function closeNav() {
  // console.log("Closing\n");
  nav.classList.remove("mobile_nav");
  document.getElementById("mobile_links").style.display = "none";
  // document.getElementById("arrow").style.display = "none";
  isMenuOpen = false;
}

// Close mobile nav when link is clicked
document.onclick = function (e) {
  if (e.target.id == "links" && isMenuOpen) {
    closeNav();
  }
};

// Close mobile nav if clicked outside the popout nav
window.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && isMenuOpen) {
    closeNav();
  }
});

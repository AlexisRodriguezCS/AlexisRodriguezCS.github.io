// Reset form after hitting submit
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
// Nav bar hide/unhide when scrolling
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    // Scrolling down
    nav.classList.add("hide");
  } else {
    // Scrolling up
    nav.classList.remove("hide");
  }
  lastScrollY = window.scrollY;
});

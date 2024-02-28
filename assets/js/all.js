AOS.init();

// ########### Scroll UP ############
let scroll_up = document.getElementById("scroll-up");

function scrollIndicator() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll_up.style.opacity = 1;
  } else {
    scroll_up.style.opacity = 0;
  }
}

scroll_up.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

window.addEventListener("scroll", scrollFunction);
window.addEventListener("scroll", scrollIndicator);

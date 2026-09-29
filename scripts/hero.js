(function () {
  var marquee = document.querySelector(".marquee");
  var track = document.querySelector(".marquee-track");
  if (!marquee || !track) return;
  // duplica il set di loghi una volta sola per il loop continuo
  track.innerHTML += track.innerHTML;

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          marquee.classList.toggle("is-offscreen", !entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    io.observe(marquee);
  }
})();

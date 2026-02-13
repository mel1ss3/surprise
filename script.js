document.addEventListener("DOMContentLoaded", function () {

  /* ========================= */
  /* COMPTEURS */
  /* ========================= */

  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    let current = 0;
    const increment = target / 120;

    function updateCounter() {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    }

    updateCounter();
  });


});
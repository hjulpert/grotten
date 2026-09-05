//countdown kode
const releaseDate = new Date("2026-10-13T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = "<div>Ude nu!</div>";
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  document.getElementById("cd-days").textContent = days;
  document.getElementById("cd-hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("cd-mins").textContent = mins.toString().padStart(2, "0");
  document.getElementById("cd-secs").textContent = secs.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

//kode til video på startsiden som fader når man scroller

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const fade = Math.max(0, 1 - window.scrollY / window.innerHeight);
  hero.style.opacity = fade;
});
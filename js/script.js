// countdown kode
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

if (document.querySelector(".countdown")) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// kode til hero-video og header (kun relevant på forsiden)
const hero = document.querySelector(".hero");
const header = document.querySelector(".site-header");

if (hero && header) {
  const hasSeenHero = sessionStorage.getItem("heroSeen");

  if (hasSeenHero) {
    // spring hero'en over, vis header med det samme
    window.scrollTo(0, hero.offsetHeight);
    header.classList.add("visible");
  } else {
    // første besøg i denne session - husk det til næste gang
    sessionStorage.setItem("heroSeen", "true");
  }

  window.addEventListener("scroll", () => {
    const fade = Math.max(0, 1 - window.scrollY / window.innerHeight);
    hero.style.opacity = fade;

    if (window.scrollY > 100) {
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
    }
  });
}
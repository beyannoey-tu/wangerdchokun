// Envelope popup
window.addEventListener("load", () => {
  const envelope = document.querySelector(".envelope");
  const popup = document.getElementById("envelope-popup");
  const sound = document.getElementById("openSound");
  const openBtn = document.getElementById("openButton");
  
  openBtn.addEventListener("click", () => {
    envelope.classList.add("open");
    sound.play();
    setTimeout(() => {
      popup.style.display = "none";
    }, 2500);
  });
});

// Fade-up animation
const fadeElements = document.querySelectorAll(".fade-up");
function fadeUpOnScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) el.classList.add("show");
  });
}
window.addEventListener("scroll", fadeUpOnScroll);
window.addEventListener("load", fadeUpOnScroll);

// 100 reasons
const reasons = [];
for (let i = 1; i <= 100; i++) reasons.push(`${i}. เพราะบี๋คือเหตุผลของทุกวันของเค้า`);
const perPage = 20;
let currentPage = 0;

function renderReasons() {
  const list = document.getElementById("reasonList");
  if (!list) return;
  list.innerHTML = "";
  const start = currentPage * perPage;
  for (let i = start; i < start + perPage && i < reasons.length; i++) {
    const li = document.createElement("li");
    li.textContent = reasons[i];
    list.appendChild(li);
  }
  document.getElementById("pageInfo").textContent = `Page ${currentPage+1} / ${Math.ceil(reasons.length/perPage)}`;
}
document.getElementById("nextBtn")?.addEventListener("click", () => {
  if ((currentPage + 1) * perPage < reasons.length) {
    currentPage++;
    renderReasons();
  }
});
document.getElementById("prevBtn")?.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    renderReasons();
  }
});
window.addEventListener("load", renderReasons);
// Popup
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup-overlay');
const openBtn = document.querySelector('.open-popup');
const closeBtn = document.querySelector('.close-popup');
const openSound = document.getElementById('openSound');

if (openBtn) {
  openBtn.addEventListener('click', () => {
    popup.classList.add('active');
    popupOverlay.classList.add('active');
    openSound.currentTime = 0;
    openSound.play();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    popupOverlay.classList.remove('active');
  });
}

if (popupOverlay) {
  popupOverlay.addEventListener('click', () => {
    popup.classList.remove('active');
    popupOverlay.classList.remove('active');
  });
}
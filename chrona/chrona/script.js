const showMsgBtn = document.getElementById('showMsgBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;
const clickSound = document.getElementById('clickSound');

const popup = document.getElementById('popupMsg');
const closePopup = document.getElementById('closePopup');

showMsgBtn.addEventListener('click', () => {
  playClick();
  showPopup("Hello, There! 🌟");
  glowEffect(showMsgBtn);
});

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  glowEffect(toggleThemeBtn);
  
  toggleThemeBtn.textContent = body.classList.contains('light-theme')
    ? "Change to Dark Theme"
    : "Change to Light Theme";
});

closePopup.addEventListener('click', () => {
  hidePopup();
});

function playClick() {
  clickSound.currentTime = 0;
  clickSound.volume = 0.3;
  clickSound.play();
}

function glowEffect(el) {
  el.style.boxShadow = '0 0 25px rgba(0,255,255,1), 0 0 50px rgba(0,255,255,0.6)';
  setTimeout(() => el.style.boxShadow = '', 400);
}

function showPopup(msg) {
  document.getElementById('popupText').textContent = msg;
  popup.classList.remove('hidden');
  setTimeout(() => popup.classList.add('show'), 10);
}

function hidePopup() {
  popup.classList.remove('show');
  setTimeout(() => popup.classList.add('hidden'), 300);
}

function updateClock() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateClock, 1000);
updateClock();

const showMsgBtn = document.getElementById('showMsgBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;
const clickSound = document.getElementById('clickSound');

showMsgBtn.addEventListener('click', () => {
  playClick(); 
  alert('Hello, There! 🌟');
  glowEffect(showMsgBtn);
});

toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  glowEffect(toggleThemeBtn);
  
  if (body.classList.contains('light-theme')) {
    toggleThemeBtn.textContent = "Change to Dark Theme";
  } else {
    toggleThemeBtn.textContent = "Change to Light Theme";
  }
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

function updateClock() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${jam}:${menit}:${detik}`;
}

setInterval(updateClock, 1000);
updateClock();
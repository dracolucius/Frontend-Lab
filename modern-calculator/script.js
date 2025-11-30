const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let resetNext = false;

function appendValue(value) {
  if (resetNext || display.innerText === 'Error') {
    display.innerText = /[0-9.]/.test(value) ? value : '0' + value;
    resetNext = false;
  } else if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    const ops = ['+', '-', '*', '/', '÷', '×', '−'];
    const lastChar = display.innerText.slice(-1);
    if (ops.includes(lastChar) && ops.includes(value)) return;
    if (display.innerText === '0' && ops.includes(value)) return;
    display.innerText += value;
  }
}
function clearDisplay() {
  display.innerText = '0';
  resetNext = false;
  display.classList.remove('result-flash');
}
function calculate() {
  try {
    let expr = display.innerText.replace(/÷/g, '/').replace(/×/g, '*').replace(/−/g, '-');
    if (/[^-()\d/*+.]/.test(expr)) throw 'Invalid';
    const result = new Function(`return (${expr})`)();
    display.innerText = (result !== undefined && result !== null) ? result : 'Error';
    resetNext = true;
    display.classList.add('result-flash');
    setTimeout(() => display.classList.remove('result-flash'), 300);
  } catch {
    display.innerText = 'Error';
    resetNext = true;
  }
}
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = e.offsetX + 'px';
    ripple.style.top = e.offsetY + 'px';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
    appendValue(key);
  }
  if (key === 'Enter' || key === '=') calculate();
  if (key.toLowerCase() === 'c') clearDisplay();
});

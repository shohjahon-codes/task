document.getElementById('Create').addEventListener('click', (e) => {
    e.preventDefault()
    const inputwidth = document.getElementById('width').value;
    const inputheight = document.getElementById('height').value;
    const inputbg = document.getElementById('bg').value;
    const inputborder = document.getElementById('num').value;
    
    const box = document.querySelector('.card');

   
    box.innerHTML = `
        <div style="width: ${inputwidth}px; height: ${inputheight}px; background-color: ${inputbg}; border: ${inputborder}px solid black;">
        </div>
    `;  
});
let interval;

function startCountdown() {
  const input = document.getElementById('numberInput').value;
  const circle = document.getElementById('circle');
  let count = parseInt(input);

  if (isNaN(count) || count <= 0) {
    alert("Iltimos, musbat son kiriting!");
    return;
  }

  circle.classList.remove('hidden');  // Aylana ko'rinadigan bo'ladi
  circle.textContent = count;

  // Har soniya hisobni kamaytiradi
  interval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(interval);
      circle.classList.add('hidden');  // Aylana yo'qoladi
    } else {
      circle.textContent = count;  // Yangi qiymatni ko'rsatadi
    }
  }, 1000);
}




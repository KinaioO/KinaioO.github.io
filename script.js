particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  }
});
window.addEventListener('scroll', function() {
  const elements = document.querySelectorAll('.parallax');
  elements.forEach(element => {
    const speed = element.getAttribute('data-speed') || 0.5;
    const yPos = -(window.pageYOffset * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});
const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);

let isDown = false;
document.addEventListener('mousemove', (e) => {
  glow.style.left = e.pageX + 'px';
  glow.style.top = e.pageY + 'px';
  glow.classList.add('active');
  setTimeout(() => {
    glow.classList.remove('active');
  }, 300);
});

// 鼠标按下时变大效果
document.addEventListener('mousedown', () => {
  isDown = true;
  glow.style.width = '80px';
  glow.style.height = '80px';
});
document.addEventListener('mouseup', () => {
  isDown = false;
  glow.style.width = '50px';
  glow.style.height = '50px';
});

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("spaceCanvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let stars = [];
    const numStars = 150;
  
    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    }
  
    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }
  
    function updateStars() {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    }
  
    function animate() {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    }
  
    createStars();
    animate();
  });
  
export function exp164words() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
  
    resizeCanvas();
  
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 9;
  
    const alphabetObjects = [];

    let mouseX = 0;
    let mouseY = 0;
  
    canvas.addEventListener('mousemove', function(event) {
      mouseX = event.clientX - canvas.offsetLeft;
      mouseY = event.clientY - canvas.offsetTop;
    });
    
    function createAlphabetObject() {
      const alphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
  
      const alphabetObject = {
        alphabet: alphabet,
        fontSize: fontSize,
        x: Math.random() * canvas.width,
        y: -fontSize,
        vy: 0,
        gravity: 0.2,
        bounceFactor: 0.8
      };
  
      alphabetObjects.push(alphabetObject);
    }
  
    function generateArt() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < alphabetObjects.length; i++) {
        const alphabetObject = alphabetObjects[i];
        ctx.font = `${alphabetObject.fontSize}px monospace`;
        ctx.fillText(alphabetObject.alphabet, alphabetObject.x, alphabetObject.y);
  
        alphabetObject.vy += alphabetObject.gravity;
        alphabetObject.y += alphabetObject.vy;
  
        if (alphabetObject.y + alphabetObject.fontSize > canvas.height) {
          alphabetObject.y = canvas.height - alphabetObject.fontSize;
          alphabetObject.vy *= -alphabetObject.bounceFactor;
        }
  
        // Remove alphabet object if it goes off-screen
        if (alphabetObject.y - alphabetObject.fontSize > canvas.height) {
          alphabetObjects.splice(i, 1);
          i--;
        }
      }
    }
  
    // Handle window resizing
    window.addEventListener('resize', resizeCanvas);
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    function animate() {
      generateArt();
      createAlphabetObject();
  
      requestAnimationFrame(animate);
    }
  
    animate();
  
    // Save canvas as image when the 's' key is pressed
    document.addEventListener('keydown', function(event) {
      if (event.key === 's' || event.key === 'S') {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'generative_art.png';
        link.click();
      }
    });
};

export function exp82colors() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const cubeSize = 50; // Size of each cube
    const numRows = Math.floor(height / cubeSize);
    const numCols = Math.floor(width / cubeSize);
    
    const cubes = [];
    for (let i = 0; i < numRows; i++) {
      cubes[i] = [];
      for (let j = 0; j < numCols; j++) {
        cubes[i][j] = {
          x: j * cubeSize,
          y: i * cubeSize,
          color: "rgb(255, 255, 255)",
        };
      }
    }
    
    function drawCubes() {
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const cube = cubes[i][j];
          ctx.fillStyle = cube.color;
          ctx.fillRect(cube.x, cube.y, cubeSize, cubeSize);
        }
      }
    }
    
    function updateCubeColor(event) {
      const x = Math.floor(event.clientX / cubeSize);
      const y = Math.floor(event.clientY / cubeSize);
      if (x >= 0 && x < numCols && y >= 0 && y < numRows) {
        cubes[y][x].color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        })`;
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawCubes();
      requestAnimationFrame(animate);
    }
    
    document.addEventListener("mousemove", updateCubeColor);
    animate();    
}

function playSpecialSong() {
    document.getElementById('special-music-btn').style.display = 'none';
    specialMusic.play();
    
    // THIS LINE ENABLES THE SCROLL ONLY NOW
    document.body.classList.add('allow-scroll');

    document.getElementById('final-message').style.display = 'block';
    const imgs = document.querySelectorAll('.photo-gallery img');
    imgs.forEach((img, i) => {
        setTimeout(() => {
            img.style.setProperty('--r', (Math.random() * 10 - 5) + "deg");
            img.classList.add('show');
        }, i * 1000);
    });
}
// Function for both Button clicks and Key presses
function move(direction) {
    if (document.getElementById('maze-container').style.display === 'none') return;
    
    let newX = playerPos.x;
    let newY = playerPos.y;

    if (direction === 'ArrowUp') newY--;
    if (direction === 'ArrowDown') newY++;
    if (direction === 'ArrowLeft') newX--;
    if (direction === 'ArrowRight') newX++;

    if (newX >= 0 && newX < 15 && newY >= 0 && newY < 15 && mazeLayout[newY][newX] !== 1) {
        playerPos.x = newX;
        playerPos.y = newY;
        drawMaze();
        if (mazeLayout[newY][newX] === 3) setTimeout(revealEnvelope, 400);
    }
}

// Keep the keyboard support too
window.addEventListener('keydown', (e) => move(e.key));
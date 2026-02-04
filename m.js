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
// This function moves the heart
function move(direction) {
    // Check if the maze is actually visible
    if (document.getElementById('maze-container').style.display === 'none') return;
    
    let newX = playerPos.x;
    let newY = playerPos.y;

    if (direction === 'ArrowUp') newY--;
    else if (direction === 'ArrowDown') newY++;
    else if (direction === 'ArrowLeft') newX--;
    else if (direction === 'ArrowRight') newX++;

    // Check for walls and boundaries
    if (newX >= 0 && newX < 15 && newY >= 0 && newY < 15 && mazeLayout[newY][newX] !== 1) {
        playerPos.x = newX;
        playerPos.y = newY;
        drawMaze(); // Redraw the heart in the new spot
        
        // Check if Bebii reached the end
        if (mazeLayout[newY][newX] === 3) {
            setTimeout(revealEnvelope, 400);
        }
    }
}

// This handles the keyboard for computer users
window.addEventListener('keydown', (e) => {
    move(e.key);
});
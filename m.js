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
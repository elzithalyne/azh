function spawnHearts() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    // Set random horizontal position
    heart.style.left = Math.random() * 100 + 'vw';

    // Dynamically set the animation duration and starting position
    const pageHeight = document.body.scrollHeight;
    heart.style.top = pageHeight + 'px';

    document.body.appendChild(heart);

    // Remove the heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate multiple hearts at intervals
function startHeartAnimation() {
    const intervalId = setInterval(spawnHearts, 25); // Generate a heart every 300ms

    setTimeout(() => {
       clearInterval(intervalId); 
    }, 2500);
}

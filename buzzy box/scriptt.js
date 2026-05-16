// Select the Buzz Mode box
const buzzBox = document.querySelector('.buzz-box');

// Add click event
buzzBox.addEventListener('click', () => {
    // Add buzzing class
    buzzBox.classList.add('buzzing');

    // Remove buzzing after 2 seconds
    setTimeout(() => {
        buzzBox.classList.remove('buzzing');
    }, 2000);
});
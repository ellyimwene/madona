// Music Player Setup
const bgMusic = document.getElementById('bgMusic');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');

// Auto-play music (some browsers require user interaction first)
function initMusic() {
    bgMusic.volume = volumeSlider.value / 100;
    bgMusic.play().catch(err => {
        console.log('Auto-play prevented:', err);
        // Music will start on user interaction
    });
}

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    bgMusic.volume = volume / 100;
    volumeLabel.textContent = volume + '%';
});

// Play music on any user interaction
document.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(err => console.log('Play error:', err));
    }
}, { once: true });

// Initialize music on load
window.addEventListener('load', initMusic);

// Stage Navigation
let currentStage = 1;
const totalStages = 4;

function showStage(stageNumber) {
    // Hide all stages
    document.querySelectorAll('.stage').forEach(stage => {
        stage.classList.remove('active');
    });

    // Show the target stage
    const targetStage = document.getElementById(`stage${stageNumber}`);
    if (targetStage) {
        targetStage.classList.add('active');

        // Create animations based on stage
        if (stageNumber === 2) {
            createHeartBurst();
        } else if (stageNumber === 3) {
            createSparkles();
        } else if (stageNumber === 4) {
            createConfetti();
        }
    }

    // Update stage indicator
    document.getElementById('currentStage').textContent = stageNumber;

    // Ensure music is playing
    if (bgMusic.paused) {
        bgMusic.play().catch(err => console.log('Play error:', err));
    }
}

function nextStage() {
    if (currentStage < totalStages) {
        currentStage++;
        showStage(currentStage);
    }
}

function prevStage() {
    if (currentStage > 1) {
        currentStage--;
        showStage(currentStage);
    }
}

// Heart Burst Animation for Stage 2
function createHeartBurst() {
    const burstContainer = document.getElementById('heartBurst');
    burstContainer.innerHTML = ''; // Clear previous hearts

    const hearts = ['💕', '💗', '💖', '💝', '💞', '❤️'];
    const heartCount = 12;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        heart.textContent = hearts[i % hearts.length];

        // Calculate burst direction
        const angle = (i / heartCount) * Math.PI * 2;
        const distance = 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.setProperty('--tx', `translate(${tx}px, ${ty}px)`);

        burstContainer.appendChild(heart);
    }
}

// Sparkle Animation for Stage 3
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    sparklesContainer.innerHTML = ''; // Clear previous sparkles

    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const x = Math.random() * 400 - 200;
        const y = Math.random() * 400 - 200;
        const delay = Math.random() * 1.5;

        sparkle.style.left = '50%';
        sparkle.style.top = '50%';
        sparkle.style.setProperty('--tx', `${x}px`);
        sparkle.style.setProperty('--ty', `${y}px`);
        sparkle.style.animationDelay = `${delay}s`;

        sparklesContainer.appendChild(sparkle);

        // Recreate sparkles in a loop
        setTimeout(() => {
            if (currentStage === 3) {
                createSparkles();
            }
        }, 2000);
    }
}

// Confetti Animation for Stage 4
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = ''; // Clear previous confetti

    const confettiPieces = ['🎉', '✨', '💖', '💝', '🎊', '⭐', '💕', '🌟'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiPieces[Math.floor(Math.random() * confettiPieces.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

        confettiContainer.appendChild(confetti);
    }
}

// Initialize first stage
showStage(1);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextStage();
    if (e.key === 'ArrowLeft') prevStage();
    if (e.key === ' ') {
        e.preventDefault();
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    }
});

// Optional: Add class with delay for staggered animations
function applyAnimationDelay(elements, baseDelay = 0.1) {
    elements.forEach((el, index) => {
        el.style.animationDelay = (baseDelay * index) + 's';
    });
}

// Apply delays to floating hearts on stage load
window.addEventListener('load', () => {
    const floatingHearts = document.querySelectorAll('.floating-heart');
    applyAnimationDelay(floatingHearts, 0.2);
});

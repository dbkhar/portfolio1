// Birthday webpage interactive functionality

// Blow candles animation
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    const button = document.querySelector('.blow-candles-btn');
    
    // Add blow effect
    button.style.transform = 'scale(0.95)';
    button.innerHTML = '🎉 Wish Made! 🎉';
    
    // Extinguish flames
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.style.opacity = '0';
            flame.style.transform = 'translateX(-50%) scale(0)';
        }, index * 200);
    });
    
    // Show celebration message
    setTimeout(() => {
        button.innerHTML = '✨ Your wish will come true! ✨';
        button.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
        
        // Create celebration particles
        createCelebrationParticles();
    }, 1000);
    
    // Reset after 3 seconds
    setTimeout(() => {
        flames.forEach(flame => {
            flame.style.opacity = '1';
            flame.style.transform = 'translateX(-50%) scale(1)';
        });
        button.innerHTML = '🌬️ Make a Wish & Blow the Candles!';
        button.style.background = 'linear-gradient(45deg, #ff6b9d, #c44569)';
        button.style.transform = 'scale(1)';
    }, 3000);
}

// Create celebration particles
function createCelebrationParticles() {
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#3742fa', '#2ed573', '#ff4757'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        
        const startX = window.innerWidth / 2;
        const startY = window.innerHeight / 2;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 100 + Math.random() * 100;
        const endX = startX + Math.cos(angle) * velocity;
        const endY = startY + Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Show love message popup
function showLoveMessage() {
    const popup = document.getElementById('lovePopup');
    popup.classList.add('show');
    
    // Add floating hearts effect
    createFloatingHearts();
    
    // Play romantic sound effect (if you want to add audio)
    // playRomanticSound();
}

// Close love message popup
function closeLoveMessage() {
    const popup = document.getElementById('lovePopup');
    popup.classList.remove('show');
}

// Create floating hearts effect
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '💘'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1001';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(heart);
        
        // Animate heart floating up
        heart.animate([
            { 
                transform: 'translateY(0) rotate(0deg) scale(1)', 
                opacity: 1 
            },
            { 
                transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg) scale(0.5)`, 
                opacity: 0 
            }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'ease-out'
        }).onfinish = () => {
            heart.remove();
        };
    }
}

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) { // Only create sparkles occasionally
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.fontSize = '1rem';
    
    document.body.appendChild(sparkle);
    
    sparkle.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 1 },
        { transform: 'scale(1.5) rotate(180deg)', opacity: 0 }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => {
        sparkle.remove();
    };
}

// Add scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.message-card, .photo-frame, .wish-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Add typing effect to romantic text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const romanticText = document.querySelector('.romantic-text');
    const originalText = romanticText.textContent;
    
    setTimeout(() => {
        typeWriter(romanticText, originalText, 30);
    }, 2000);
});

// Add heart rain effect on special button click
function createHeartRain() {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '❤️', '💜', '🧡', '💛', '💚'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.top = '-50px';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.opacity = '0.8';
            
            document.body.appendChild(heart);
            
            const fallDuration = Math.random() * 3000 + 2000;
            const sway = Math.random() * 100 - 50;
            
            heart.animate([
                { 
                    transform: 'translateY(0) translateX(0) rotate(0deg)', 
                    opacity: 0.8 
                },
                { 
                    transform: `translateY(${window.innerHeight + 100}px) translateX(${sway}px) rotate(360deg)`, 
                    opacity: 0 
                }
            ], {
                duration: fallDuration,
                easing: 'linear'
            }).onfinish = () => {
                heart.remove();
            };
        }, i * 100);
    }
}

// Trigger heart rain when clicking on the main title
document.querySelector('.main-title').addEventListener('click', createHeartRain);

// Add gentle background music control (optional)
// You can add this if you want background music
/*
let backgroundMusic = null;

function toggleBackgroundMusic() {
    if (!backgroundMusic) {
        backgroundMusic = new Audio('path-to-romantic-music.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.3;
    }
    
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
}

// Add music toggle button
const musicButton = document.createElement('button');
musicButton.innerHTML = '🎵';
musicButton.style.position = 'fixed';
musicButton.style.bottom = '20px';
musicButton.style.left = '20px';
musicButton.style.background = 'rgba(255, 255, 255, 0.8)';
musicButton.style.border = 'none';
musicButton.style.borderRadius = '50%';
musicButton.style.width = '50px';
musicButton.style.height = '50px';
musicButton.style.fontSize = '1.5rem';
musicButton.style.cursor = 'pointer';
musicButton.style.zIndex = '1000';
musicButton.onclick = toggleBackgroundMusic;
document.body.appendChild(musicButton);
*/
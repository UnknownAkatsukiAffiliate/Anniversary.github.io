// ============================================
// ANNIVERSARY WEBSITE - JAVASCRIPT
// Animations, interactivity, and dynamic effects
// ============================================

// ============ FLOATING HEARTS ANIMATION ============
// Creates floating hearts that drift upward from random positions
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝'];
    
    // Create a new heart every 2-3 seconds
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random heart symbol
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random horizontal position
        const randomX = Math.random() * window.innerWidth;
        heart.style.left = randomX + 'px';
        heart.style.top = window.innerHeight + 'px';
        
        // Random animation duration between 3-5 seconds
        const duration = 3 + Math.random() * 2;
        heart.style.animationDuration = duration + 's';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart from DOM after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 2500);
}

// ============ SCROLL ANIMATIONS ============
// Observes elements and triggers animations when they come into view
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all song cards and gallery items
    document.querySelectorAll('.song-card, .gallery-item').forEach(element => {
        observer.observe(element);
    });
}

// ============ SMOOTH SCROLL FOR NAVIGATION ============
// Ensures navigation links have smooth scrolling behavior
function setupNavigationScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============ INTERACTIVE SONG CARDS ============
// Adds click handlers for potential future Spotify integration
function setupSongCardInteraction() {
    const songCards = document.querySelectorAll('.song-card');
    
    songCards.forEach(card => {
        const playOverlay = card.querySelector('.play-overlay');
        
        // Show interaction hint
        playOverlay.style.cursor = 'pointer';
        
        // Future: Connect to Spotify or add play functionality
        playOverlay.addEventListener('click', function() {
            // REPLACE THIS: Add your Spotify embed link or music player integration here
            console.log('Play button clicked! Connect to Spotify embed here.');
            // Example: You could open a modal, play music, or redirect to Spotify
        });
    });
}

// ============ GALLERY LIGHTBOX (Optional) ============
// Simple lightbox for gallery images
function setupGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.gallery-image');
            const caption = this.querySelector('.gallery-caption');
            
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                cursor: pointer;
            `;
            
            const lightboxContent = document.createElement('div');
            lightboxContent.style.cssText = `
                background: white;
                border-radius: 15px;
                overflow: hidden;
                max-width: 90vw;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
            `;
            
            const lightboxImage = document.createElement('img');
            lightboxImage.src = img.src;
            lightboxImage.style.cssText = `
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
            `;
            
            const lightboxCaption = document.createElement('p');
            lightboxCaption.textContent = caption.textContent;
            lightboxCaption.style.cssText = `
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 16px;
                background: #f5f5f5;
            `;
            
            lightboxContent.appendChild(lightboxImage);
            lightboxContent.appendChild(lightboxCaption);
            lightbox.appendChild(lightboxContent);
            
            // Close lightbox on click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox || e.target === lightboxContent) {
                    lightbox.remove();
                }
            });
            
            // Close with Escape key
            document.addEventListener('keydown', function closeLightbox(e) {
                if (e.key === 'Escape') {
                    lightbox.remove();
                    document.removeEventListener('keydown', closeLightbox);
                }
            });
            
            document.body.appendChild(lightbox);
        });
    });
}

// ============ PARALLAX EFFECT (Optional) ============
// Creates subtle parallax effect on scroll
function setupParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (hero && scrollPosition < window.innerHeight) {
            hero.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
        }
    });
}

// ============ NAVBAR ACTIVE STATE ============
// Updates active nav link based on current section
function setupNavbarActiveState() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.style.color = 'var(--primary-color)';
            } else {
                link.style.color = 'var(--text-color)';
            }
        });
    });
}

// ============ DYNAMIC MESSAGE PERSONALIZATION ============
// Helper function to personalize messages (for future use)
function updatePersonalMessage(newMessage) {
    const messageText = document.querySelector('.message-text');
    if (messageText && newMessage) {
        messageText.textContent = newMessage;
    }
}

// ============ DYNAMIC SONG DATA ============
// Helper function to update song cards with real data
function updateSongCard(index, songData) {
    const cards = document.querySelectorAll('.song-card');
    if (cards[index]) {
        const card = cards[index];
        
        // Update image
        const img = card.querySelector('.song-image');
        if (songData.imageUrl) {
            img.src = songData.imageUrl;
        }
        
        // Update title
        const title = card.querySelector('.song-title');
        if (songData.title) {
            title.textContent = songData.title;
        }
        
        // Update artist
        const artist = card.querySelector('.song-artist');
        if (songData.artist) {
            artist.textContent = songData.artist;
        }
        
        // Update note
        const note = card.querySelector('.song-note');
        if (songData.note) {
            note.textContent = '✨ ' + songData.note;
        }
    }
}

// ============ DYNAMIC GALLERY IMAGE ============
// Helper function to update gallery images
function updateGalleryImage(index, imageUrl, caption) {
    const items = document.querySelectorAll('.gallery-item');
    if (items[index]) {
        const item = items[index];
        
        const img = item.querySelector('.gallery-image');
        if (imageUrl) {
            img.src = imageUrl;
        }
        
        const captionText = item.querySelector('.gallery-caption');
        if (caption) {
            captionText.textContent = caption;
        }
    }
}

// ============ SURPRISE HEART FUNCTIONALITY ============
// Shows surprise image when heart is clicked
function setupSurpriseHeart() {
    const surpriseHeart = document.getElementById('surpriseHeart');
    
    if (surpriseHeart) {
        surpriseHeart.addEventListener('click', function(e) {
            e.stopPropagation();
            showSurpriseModal();
        });
    }
}

// ============ SURPRISE MODAL ============
// Creates and shows the surprise modal with playlist image
function showSurpriseModal() {
    // Create modal
    const modal = document.createElement('div');
    modal.classList.add('surprise-modal');
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('surprise-modal-content');
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('surprise-modal-close');
    closeBtn.textContent = '✕';
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    // Create image
    const img = document.createElement('img');
    img.src = '/image/Playlist.jpeg';
    img.alt = 'Surprise Playlist';
    img.classList.add('surprise-modal-image');
    
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(img);
    modal.appendChild(modalContent);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function closeSurpriseModal(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeSurpriseModal);
        }
    });
    
    document.body.appendChild(modal);
}

// ============ PAGE LOAD ANIMATION ============
// Triggers animations when the page fully loads
function onPageLoad() {
    // Give the page a moment to settle before starting animations
    setTimeout(() => {
        createFloatingHearts();
        setupScrollAnimations();
        setupNavigationScroll();
        setupSongCardInteraction();
        setupGalleryLightbox();
        setupParallaxEffect();
        setupNavbarActiveState();
        setupSurpriseHeart();
    }, 100);
}

// ============ INITIALIZE ON DOM CONTENT LOADED ============
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onPageLoad);
} else {
    onPageLoad();
}

// ============ EXPORT FUNCTIONS FOR PERSONALIZATION ============
// These functions can be called from the browser console or other scripts
window.AnniversaryWebsite = {
    updatePersonalMessage,
    updateSongCard,
    updateGalleryImage,
    // Helper function to update multiple songs at once
    updateAllSongs: function(songsArray) {
        songsArray.forEach((song, index) => {
            updateSongCard(index, song);
        });
    },
    // Helper function to update all gallery images
    updateAllGalleryImages: function(imagesArray) {
        imagesArray.forEach((image, index) => {
            updateGalleryImage(index, image.url, image.caption);
        });
    }
};

// Example usage (uncomment to use):
/*
// Update a single song
AnniversaryWebsite.updateSongCard(0, {
    title: 'Song Name',
    artist: 'Artist Name',
    imageUrl: 'https://example.com/image.jpg',
    note: 'Your personalized note here'
});

// Update all songs at once
AnniversaryWebsite.updateAllSongs([
    { title: 'Song 1', artist: 'Artist 1', imageUrl: 'url1', note: 'Note 1' },
    { title: 'Song 2', artist: 'Artist 2', imageUrl: 'url2', note: 'Note 2' },
    // ... more songs
]);

// Update personal message
AnniversaryWebsite.updatePersonalMessage('Your heartfelt message here');

// Update gallery image
AnniversaryWebsite.updateGalleryImage(0, 'https://example.com/image.jpg', 'Caption');
*/

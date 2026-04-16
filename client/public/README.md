# 💕 Anniversary Website - A Romantic Single-Page Experience

A beautiful, modern, and romantic single-page website built with vanilla HTML, CSS, and JavaScript. Perfect for expressing your feelings to someone special.

## 🎨 Features

✨ **Modern & Aesthetic Design**
- Soft color palette (pinks, purples, pastels)
- Smooth animations and transitions
- Premium Google Fonts (Playfair Display + Poppins)
- Fully responsive (mobile, tablet, desktop)

🎭 **Interactive Sections**
- **Hero Section** - Beautiful welcome with animated background shapes
- **Songs Section** - 6 song cards with hover effects (ready for Spotify integration)
- **Message Section** - Heartfelt personal message
- **Gallery Section** - Photo memories with lightbox effect
- **Navigation** - Smooth scrolling with fixed navbar

✨ **Special Animations**
- Floating hearts throughout the page
- Fade-in animations as you scroll
- Interactive hover effects
- Parallax scrolling

## 📂 File Structure

```
public/
├── anniversary.html    # Main HTML structure
├── anniversary.css     # All styling and animations
├── anniversary.js      # Interactivity and animations
└── README.md          # This file
```

## 🚀 How to Use

### Step 1: Open the Website
Simply open `anniversary.html` in your web browser. No server setup required!

**Direct Link:** Open `client/public/anniversary.html` in your browser

### Step 2: Customize Your Content

#### 📝 Update the Personal Message
Open `anniversary.html` and find the **Message Section**. Replace the placeholder text with your heartfelt message:

```html
<p class="message-text">
    Your heartfelt message here...
</p>
```

Or use JavaScript from the browser console:
```javascript
AnniversaryWebsite.updatePersonalMessage('Your custom message here');
```

#### 🎵 Add Your Songs

**Method 1: Direct HTML Edit**
Open `anniversary.html` and find each `<!-- Song Card -->` section. Replace:
- `https://via.placeholder.com/280x280?text=Song+1` with your Spotify album image URL
- Song title placeholder
- Artist name
- Personal note

**Method 2: JavaScript (From Browser Console)**
```javascript
AnniversaryWebsite.updateSongCard(0, {
    title: 'Song Name',
    artist: 'Artist Name',
    imageUrl: 'https://your-image-url.jpg',
    note: 'Why this song reminds me of you'
});
```

**Method 3: Update All Songs at Once**
```javascript
AnniversaryWebsite.updateAllSongs([
    {
        title: 'Perfect',
        artist: 'Ed Sheeran',
        imageUrl: 'https://example.com/image1.jpg',
        note: 'Our song'
    },
    {
        title: 'Falling',
        artist: 'Harry Styles',
        imageUrl: 'https://example.com/image2.jpg',
        note: 'How I feel about you'
    },
    // Add more songs...
]);
```

#### 🎵 Add Spotify Embeds (Optional)

To embed actual Spotify players, replace the play overlay:

```html
<div class="play-overlay">
    <!-- Replace with Spotify embed code -->
    <iframe src="https://open.spotify.com/embed/track/TRACK_ID" 
            width="100%" height="100%"></iframe>
</div>
```

Or get Spotify Track ID and embed like:
```html
<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/SPOTIFY_TRACK_ID?utm_source=generator" 
        width="100%" height="100%" frameBorder="0" allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
```

#### 🖼️ Add Your Photos to Gallery

**Method 1: Direct HTML Edit**
Find each `<!-- Gallery Item -->` and replace:
- `https://via.placeholder.com/400x300?text=Memory+1` with your image URL
- Update the caption text

**Method 2: JavaScript**
```javascript
AnniversaryWebsite.updateGalleryImage(0, 'https://your-image-url.jpg', 'Caption text');
```

**Method 3: Update All Gallery Images**
```javascript
AnniversaryWebsite.updateAllGalleryImages([
    { url: 'https://image1.jpg', caption: 'Our First Adventure' },
    { url: 'https://image2.jpg', caption: 'Sunset Together' },
    { url: 'https://image3.jpg', caption: 'Laughing Like Always' },
    // ... more images
]);
```

## 🎨 Customization Guide

### Change Colors
Edit `:root` variables in `anniversary.css`:

```css
:root {
    --primary-color: #ff69b4;      /* Main pink */
    --secondary-color: #dda0dd;    /* Plum purple */
    --accent-color: #ffc0cb;       /* Light pink */
    --dark-color: #2d1b4e;         /* Dark purple */
    --light-color: #fff5f8;        /* Very light pink */
}
```

### Change Fonts
The site uses Google Fonts:
- **Playfair Display** - Serif, elegant titles
- **Poppins** - Sans-serif, modern body text

You can change them in the `<head>` of `anniversary.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update CSS:
```css
body {
    font-family: 'YourFont', sans-serif;
}
```

### Adjust Animations
- **Floating hearts speed**: Change `2500` in `anniversary.js` (line ~16)
- **Animation duration**: Edit `durations` in CSS animations
- **Fade effects**: Modify `@keyframes` in `anniversary.css`

### Remove/Add Sections
Simply comment out or remove sections in the HTML. Navigation links will auto-update.

## 📱 Responsive Design

The website is fully responsive:
- **Desktop (1024px+)**: Full experience with all animations
- **Tablet (768px-1023px)**: Optimized layout and touch-friendly
- **Mobile (< 768px)**: Simplified navigation, single-column layouts

## 🌐 Browser Compatibility

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## 💡 JavaScript Helper Functions

You can use these from the browser console (F12 → Console tab):

```javascript
// Update a single song
AnniversaryWebsite.updateSongCard(index, songData);

// Update all songs
AnniversaryWebsite.updateAllSongs(songsArray);

// Update personal message
AnniversaryWebsite.updatePersonalMessage(message);

// Update gallery image
AnniversaryWebsite.updateGalleryImage(index, imageUrl, caption);

// Update all gallery images
AnniversaryWebsite.updateAllGalleryImages(imagesArray);
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Push your `public` folder to GitHub
2. Enable GitHub Pages in repository settings
3. Your site goes live at `username.github.io/anniversary`

### Option 2: Netlify (Free)
1. Connect your GitHub repo
2. Set build folder to `client/public`
3. Deploy with one click

### Option 3: Vercel (Free)
1. Connect your GitHub repo
2. Vercel auto-detects and deploys
3. Get a custom domain

### Option 4: Simple Hosting
Upload `anniversary.html`, `anniversary.css`, and `anniversary.js` to any web host.

## 💝 Tips for Maximum Impact

1. **Use High-Quality Images** - Professional photos make a huge difference
2. **Personalize Everything** - Replace all placeholders with real content
3. **Add Your Own Songs** - Pick songs that are meaningful to your relationship
4. **Write a Genuine Message** - The personal note is the heart of the site
5. **Consider the Occasion** - Time it for an anniversary, birthday, or surprise
6. **Share the Link** - Send the URL to make it easy for them to view

## 🎁 Extra Ideas

- Add a music player for the background
- Connect to a real Spotify account
- Add a comment section or guestbook
- Include a timeline of your relationship
- Add a "reasons I love you" section
- Include a video embed
- Add interactive games or quizzes
- Create a countdown timer

## 📝 Notes

- All code is commented for easy customization
- No external dependencies required (pure vanilla JS)
- Fully self-contained - works offline
- Google Fonts load from CDN for best typography

## 💬 Support

If you need help customizing:
1. Check the comments in the code
2. Look at the example code snippets
3. Use the browser console to test JavaScript functions
4. Test on different devices to ensure responsiveness

---

**Made with ❤️ and love for someone special**

Remember: It's not about the technology, it's about the feeling you're sharing. ✨

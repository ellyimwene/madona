# 💝 Valentine's Day Interactive Card

A beautiful, modern 4-stage interactive Valentine's Day card with smooth animations, background music, and WhatsApp integration.

## Features

✨ **4 Interactive Stages:**
1. **Introduction** - Warm welcome with floating hearts
2. **Valentine Question** - Heart burst and falling rose petals
3. **Love Message** - Sparkle trails with emotional message
4. **WhatsApp Confirmation** - Direct WhatsApp integration with confetti

🎵 **Background Music**
- Continuous music across all stages
- Adjustable volume control (0-100%)
- Auto-plays when user interacts with the page

💖 **Smooth Animations**
- Floating hearts with glow effects
- Heart burst particles
- Falling rose petals
- Sparkle trails synchronized with music
- Confetti celebration animation
- Zoom-in, fade-in, and bounce effects

📱 **WhatsApp Integration**
- Pre-filled message: "I love you ❤️"
- Phone number: +0113750027
- Animated button with hover effects

## File Structure

```
vl/
├── index.html      # Main HTML structure
├── styles.css      # All animations and styling
├── script.js       # JavaScript for interactivity
└── README.md       # Documentation (this file)
```

## How to Use

### 1. **Open the Card**
Simply open `index.html` in your web browser.

### 2. **Navigate Between Stages**
- Click the action buttons to move to the next stage
- Click "← Back" buttons to return to previous stages
- Use arrow keys: `← →` for navigation
- Use `Space` to toggle music play/pause

### 3. **Control Music**
- Use the volume slider in the top-right corner (0-100%)
- Music automatically plays on user interaction
- Space key toggles play/pause

### 4. **Complete the Experience**
- Progress through all 4 stages
- Send the final message via WhatsApp

## Customization

### Change the Love Message (Stage 3)
Edit the text in `index.html`, line with `love-message` class:
```html
<p class="love-message fade-in">
    Your custom message here...
</p>
```

### Change the WhatsApp Number
Edit the link in `index.html`:
```html
<a href="https://wa.me/YOUR_NUMBER_HERE?text=I%20love%20you%20%E2%9D%A4%EF%B8%8F" ...>
```

### Customize Colors
Edit the color gradients in `styles.css`:
- Stage 1: `.stage-1 .stage-content`
- Stage 2: `.stage-2 .stage-content`
- Stage 3: `.stage-3 .stage-content`
- Stage 4: `.stage-4 .stage-content`

### Change Button Text
Update button text in `index.html` to customize labels.

### Modify Animations
All animations are defined in `styles.css` under `@keyframes`. Adjust timing and effects:
```css
@keyframes float {
    /* Modify this animation */
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Requires JavaScript enabled
- Works with or without internet (after first load)

## Music Source

The background music is sourced from Pixabay's free audio library. You can replace the music source by updating the audio URL in `index.html`:
```html
<audio id="bgMusic" loop preload="auto">
    <source src="YOUR_MUSIC_URL_HERE" type="audio/mpeg">
</audio>
```

## Tips for the Best Experience

1. **Desktop viewing** - Best experienced on desktop/tablet
2. **Enable sound** - Allow audio in browser settings
3. **Full screen** - Use F11 for full-screen mode
4. **Mobile** - Works great on mobile with touch controls
5. **Volume** - Start with moderate volume (30-50%)

## Interactive Elements

- **Floating Hearts** (Stage 1) - Gentle animation in the background
- **Heart Burst** (Stage 2) - Explosive animation on button click
- **Falling Petals** (Stage 2) - Romantic rose petals falling
- **Sparkles** (Stage 3) - Magical sparkle trails
- **Pulse Light** (Stage 3) - Synced with music rhythm
- **Confetti** (Stage 4) - Celebration animation

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` Arrow Right | Next Stage |
| `← Arrow Left` | Previous Stage |
| `Space` | Play/Pause Music |

## Performance

- Optimized animations using CSS transforms
- Efficient JavaScript with minimal DOM manipulation
- Smooth 60 FPS animations
- Low memory footprint

---

**Created with 💖 for a special someone**

Enjoy this romantic experience! 🎉

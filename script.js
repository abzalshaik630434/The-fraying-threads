// Toggle dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const profile = document.getElementById('ayeshaProfile');
  const dropdown = document.getElementById('dropdownMenu');

  profile.addEventListener('click', function() {
    if(dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  });

  // Close dropdown if clicked outside
  window.addEventListener('click', function(e) {
    if(!profile.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});
// Get buttons
const oldBtn = document.getElementById('oldBtn');
const nowBtn = document.getElementById('nowBtn');

// Get paragraphs
const oldPara = document.querySelector('.old');
const nowPara = document.querySelector('.now');

// Highlight old paragraph
oldBtn.addEventListener('click', () => {
    oldPara.classList.toggle('highlight-old');  // toggle on/off
    nowPara.classList.remove('highlight-now');  // remove highlight from other
});

// Highlight now paragraph
nowBtn.addEventListener('click', () => {
    nowPara.classList.toggle('highlight-now');  // toggle on/off
    oldPara.classList.remove('highlight-old');  // remove highlight from other
});
// Select audio element
const audio = document.getElementById('audioPlayer');

// Select button
const musicBtn = document.getElementById('testBtn');

// Track if audio is playing
let isPlaying = false;

// Button click event
musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();                        // start music
    musicBtn.textContent = "Pause Music"; // change button text
    isPlaying = true;
  } else {
    audio.pause();                        // pause music
    musicBtn.textContent = "Play Music";  // change button text
    isPlaying = false;
  }
});

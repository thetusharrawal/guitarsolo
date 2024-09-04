const solos = {
  chill: "https://www.youtube.com/embed/7VBex8zbDRs",  // "Gravity" live link
  energetic: "https://www.youtube.com/embed/ZoEwR9_Sy_M",  // "Belief" live link
  melancholy: "https://www.youtube.com/embed/F2RjWmhdr0w",  // "Stop This Train" live link
  happy: "https://www.youtube.com/embed/ua58lk4dwBI",  // "No Such Thing" live link
  passionate: "https://www.youtube.com/embed/EEKUgCvA3aU"  // "Edge of Desire" live link
};

const buttons = document.querySelectorAll('.mood-btn');
const videoContainer = document.getElementById('video-container');
const youtubeVideo = document.getElementById('youtube-video');
const noSelectionMessage = document.getElementById('no-selection-message');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    youtubeVideo.src = solos[mood];
    videoContainer.style.display = 'block';
    noSelectionMessage.style.display = 'none';
  });
});

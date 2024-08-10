const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volume');
const playlist = document.getElementById('playlist');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '⏯️';
    }
});
volumeControl.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});
playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        const songName = e.target.parentNode.textContent.trim();
        const songSrc = songName.toLowerCase().replace(' ', '') + '.mp3'; 
        audioPlayer.src = songSrc;
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    }
});
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
let currentSongIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs.length - 1;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex < songs.length - 1) ? currentSongIndex + 1 : 0;
    audioPlayer.src = songs[currentSongIndex];
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});
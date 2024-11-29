export function togglePlay() {
    return false;
}

export function isPlaying() {
    return true;
}

// function togglePlay() {
//     const svg = document.querySelector('body > nav > div:nth-child(1) > button > svg > use');
//     audioplayer.paused ? svg.setAttribute('href','/MegaPuzzle2024/Common/icons.svg#ppi-unmuted') : svg.setAttribute('href','/MegaPuzzle2024/Common/icons.svg#ppi-muted');
//     return audioplayer.paused ? audioplayer.play() : audioplayer.pause();
// }
// function toggleNowPlaying() {
//     return audioplayer.paused ? nowplaying.style.opacity = 0 : nowplaying.style.opacity = 1;
// }
// if (audioplayer) {
//     const puzzle = document.getElementsByTagName('html')[0].getAttribute('data-puzzle');
//     audioplayer.setAttribute('src','/MegaPuzzle2024/Common/audio/'+audioLibrary[puzzle][0]);
//     audioplayer.loop = true;
//     audioplayer.style.display = 'none';
//     document.getElementsByClassName('card-title')[0].innerText = audioLibrary[puzzle][1];
//     document.getElementsByClassName('card-text')[0].innerText = audioLibrary[puzzle][2];
//     audioplayer.addEventListener("canplaythrough", () => {
//         audioplayer.play().catch(e => {
//         window.addEventListener('click', () => {
//             audioplayer.play()
//         }, { once: true })
//         })
//     });
//     audioplayer.addEventListener('pause', toggleNowPlaying);
//     audioplayer.addEventListener('play', toggleNowPlaying);
    
//     document.querySelector('nav > div:nth-child(1) > button').addEventListener("click", togglePlay);
// }
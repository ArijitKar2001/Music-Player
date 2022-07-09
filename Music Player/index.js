
const songs = [
    {
        name : 's1',
        title : 'Sun',
        artist : 'Eugenio Mininni'
    },
    {
        name : 's2',
        title : 'Hazy',
        artist : 'Alejandro Magaña'
    },
    {
        name : 's3',
        title : 'Hip Hop',
        artist : 'Lily J'
    },
    {
        name : 's4',
        title : 'Tech House vibes',
        artist : 'Alejandro Magaña'
    },
    {
        name : 's5',
        title : 'Happy Christmas',
        artist : 'Michael Ramir'
    }
]

const audio = document.querySelector("audio");
const image = document.querySelector('img');
const play = document.getElementById('main');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');


let btnValue = false;
let songIndex = 0;

const playMusic = () =>{
    btnValue = true;
    audio.play();
    image.classList.add('animation');
    play.classList.replace('fa-play','fa-pause');
    
}

const pauseMusic = () =>{
    btnValue = false;
    audio.pause();
    image.classList.remove('animation');
    play.classList.replace('fa-pause','fa-play');   
}

play.addEventListener('click',()=>{
    btnValue ? pauseMusic() : playMusic();
})

const songDetails = (song) =>{
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = `./musics/${song.name}.mp3`;
    image.src = `./images/${song.name}.jpg`;
}

const nextSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    songDetails(songs[songIndex]);
    playMusic();
}

const prevSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    songDetails(songs[songIndex]);
    playMusic();
}

prev.addEventListener('click',prevSong)
next.addEventListener('click',nextSong)
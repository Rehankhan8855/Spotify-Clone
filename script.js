console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItem =  Array.from(document.getElementsByClassName('songItem'))


let songs = [
    {songName:"Salam-e-Ishq", filePath:"/songs/1.mp3", coverPath:"/covers/1.jpg"},
    {songName:"sakhiya", filePath:"/songs/2.mp3", coverPath:"/covers/2.jpg"},
    {songName:"o mahi", filePath:"/songs/3.mp3", coverPath:"/covers/3.jpg"},
    {songName:"tu jo mila", filePath:"/songs/4.mp3", coverPath:"/covers/4.jpg"},
    {songName:"oonchi diware", filePath:"/songs/5.mp3", coverPath:"/covers/5.jpg"},
    {songName:"husn", filePath:"/songs/6.mp3", coverPath:"/covers/6.jpg"},
]

songItem.forEach((element)=>{
    console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[1].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[1].songName;
   

})

// audio.play();
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
     

     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
     
     })

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


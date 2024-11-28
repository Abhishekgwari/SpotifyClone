console.log("Welcome to spotify")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[

    
        { songName: "Let Me Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Shape of You", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Blinding Lights", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Despacito", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Closer", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Stay", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
        { songName: "Believer", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
        { songName: "Cheap Thrills", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
        { songName: "Bad Guy", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
        { songName: "Memories", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
    
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');  
        gif.style.opacity =1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play'); // Add play icon
        gif.style.opacity =0;
    }
    
})


//Listen of Events
audioElement.addEventListener('timeupdate',()=>{
  
  //Update seekbar

  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
audioElement.currentTime = myProgressBar.value *audioElement.duration/100;

})

const  makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        gif.style.opacity=1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.pla4y();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
  
})



document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
  
})
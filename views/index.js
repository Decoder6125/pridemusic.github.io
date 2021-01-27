	const img = document.querySelector("img");
	const music = document.querySelector("audio");
	 const play = document.getElementById("play");
	 const title = document.getElementById("title");
	 const singer = document.getElementById("singer");
	 const prev = document.getElementById("prev");
	 const next = document.getElementById("next");
     let imPlay = false;


    
const songs = [
{
 name : "taro",
 title: "Taaro Ke Seher",
 image: "taro",
 singer: "Jubin Nautiyal/ Neha Kakkar",    
},
{
 name : "hawayein",
 title: "Hawayein",
 image: "hawayein",
 singer: "Arijit Singh",    
},

{
 name : "malang",
 title: "Malang",
 image: "malang",
 singer: "Ved Sharma",    
},

];




const playMusic = () => {
	  imPlay = true;
      music.play();
      play.classList.replace("fa-play", "fa-pause");
      img.classList.add("anime");

};

const pauseMusic = () => {
	  imPlay = false;
      music.pause();
      play.classList.replace("fa-pause", "fa-play");
      img.classList.remove("anime");

};

 play.addEventListener('click', () => {
 	if (imPlay) {
        pauseMusic();
 	} else {
        playMusic();
 	}
 });





const loadSongs = (songs) => {
   title.textContent = songs.title;
   singer.textContent = songs.singer;
   music.src = "music/"+ songs.name+".mp3"; 
   img.src = "banner/"+ songs.image+".jpg";    
};


songIndex = 0;

 const nextSong = () => {
 	songIndex = (songIndex + 1) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();

 };

 const prevSong = () => {
 	songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();

 }

 


 next.addEventListener("click", nextSong);
 prev.addEventListener("click",prevSong);
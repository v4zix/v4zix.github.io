// script for audio
var myAudio = document.getElementById("playAudio");
var volumeBtn = document.getElementById('volumeBtn');
var isMuted = false;

myAudio.addEventListener('loadedmetadata', function() {
  console.log('Đã tải xong đối tượng âm thanh');
}); 

window.addEventListener('load', function() {
  var audio = document.getElementById('playAudio');
  audio.volume = 0.5;
});

document.documentElement.addEventListener('click', function(event) {
  // Xử lý sự kiện click ở bất kỳ đâu trên trang web
  myAudio.play();
});

volumeBtn.addEventListener('click', function() {
  if (!isMuted) {
    myAudio.volume = 0;
    volumeBtn.src = "img/volume-off.png";
    isMuted = true;
  } else {
    myAudio.volume = 0.5;
    volumeBtn.src = "img/volume-on.png";
    isMuted = false;
  }
});
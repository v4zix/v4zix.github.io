document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');

  var startDate = new Date('2023-06-04T22:04:00');
  days.innerText = Math.floor((new Date - startDate)/86400000);
  countTime();

  function countTime() {
    let today = new Date();
    var tmp;
    let ms = (today - startDate) % 86400000;
    tmp = Math.floor(ms / 3600000);
    hour.innerText = tmp < 10 ? "0" + tmp : tmp;
    tmp = Math.floor(ms % 3600000 / 60000);
    min.innerText = tmp < 10 ? "0" + tmp : tmp;
    tmp = Math.floor(ms % 3600000 % 60000 / 1000);
    second.innerText = tmp < 10 ? "0" + tmp : tmp;
  }

  setInterval(countTime, 1000);

}, false);


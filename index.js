const hourEl = document.getElementById('Hour')

const minuteEl = document.querySelector('.Minutes');

const secondsEl = document.querySelector('.seconds');

const amPmEl = document.querySelector('.ampm');


 function updateTime(){

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
 let am = "AM";

 console.log(h);

  if(h>12){
  h= h-12;
  am="PM";
}

 h = h<10? "0"+h:h;
 m = m<10? "0"+m:m;
 s = s<10?"0"+s:s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondsEl.innerText = s;
  amPmEl.innerText = am;

  setTimeout(() => {
   
    updateTime();
   }, 1000);
}

updateTime();

 
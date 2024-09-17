

// js power 

const sending = document.querySelector('.sending-box');
const receiving = document.querySelector('.receiving');

// event tigger on window load
window.addEventListener("load",()=>{
  
//   sending loading box
  let sending_loading_box = document.createElement('div');
  
  sending.appendChild(sending_loading_box)
  

//   create span 
  for(let i=1; i<=128; i++){
    
      let span = document.createElement('span');
    
    span.className = "loading";
    
    if(i <= 8){
      span.style="--i:1s";
    }
    
    if(i <= 16 && i > 8){
      span.style="--i:1.1s";
    }
    
    if(i <= 24 && i > 16){
      span.style="--i:1.2s";
    }
    
    if(i <= 32 && i > 24){
      span.style="--i:1.3s";
    }
    
    if(i <= 40 && i > 32){
      span.style="--i:1.4s";
    }
    
    if(i <= 48 && i > 40){
      span.style="--i:1.5s";
    }
    
    if(i <= 56 && i > 48){
      span.style="--i:1.6s";
    }
    
    if(i <= 64 && i > 56){
      span.style="--i:1.7s";
    }
    
    if(i <= 72 && i > 64){
      span.style="--i:1.8s";
    }
    
    if(i <= 80 && i > 72){
      span.style="--i:1.9s";
    }
    
    if(i <= 88 && i > 80){
      span.style="--i:2s";
    }
    
    if(i <= 96 && i > 88){
      span.style="--i:2.1s";
    }
    
    if(i <= 104 && i > 96){
      span.style="--i:2.2s";
    }
    
    if(i <= 112 && i > 104){
      span.style="--i:2.3s";
    }
    
    if(i <= 120 && i > 112){
      span.style="--i:2.4s";
    }
    
    if(i <= 128 && i > 120){
      span.style="--i:2.5s";
    }
    
    sending_loading_box.appendChild(span);
    
  }
  
  
  //   receiving loading box
  let receiving_loading_box = document.createElement('div');
  
  receiving.appendChild(receiving_loading_box)
  

//   create span 
  for(let i=1; i<=128; i++){
    
      let span = document.createElement('span');
    
    span.className = "loading";
    
    if(i <= 8){
      span.style="--i:2.6s";
    }
    
    if(i <= 16 && i > 8){
      span.style="--i:2.5s";
    }
    
    if(i <= 24 && i > 16){
      span.style="--i:2.4s";
    }
    
    if(i <= 32 && i > 24){
      span.style="--i:2.3s";
    }
    
    if(i <= 40 && i > 32){
      span.style="--i:2.2s";
    }
    
    if(i <= 48 && i > 40){
      span.style="--i:2.1s";
    }
    
    if(i <= 56 && i > 48){
      span.style="--i:2s";
    }
    
    if(i <= 64 && i > 56){
      span.style="--i:1.9s";
    }
    
    if(i <= 72 && i > 64){
      span.style="--i:1.8s";
    }
    
    if(i <= 80 && i > 72){
      span.style="--i:1.7s";
    }
    
    if(i <= 88 && i > 80){
      span.style="--i:1.6s";
    }
    
    if(i <= 96 && i > 88){
      span.style="--i:1.5s";
    }
    
    if(i <= 104 && i > 96){
      span.style="--i:1.4s";
    }
    
    if(i <= 112 && i > 104){
      span.style="--i:1.3s";
    }
    
    if(i <= 120 && i > 112){
      span.style="--i:1.2s";
    }
    
    if(i <= 128 && i > 120){
      span.style="--i:1s";
    }
    
    receiving_loading_box.appendChild(span);
    
  }
  
  
  
//   signal calulation
  
  let satellites = document.querySelectorAll(".message .message-signal ul li span");
  let audio = document.querySelector(".press-keys audio");
  
setInterval(function(){
  
  let num = Math.floor(Math.random() * 99);
  
  let num2 = (num == 0)? 1 : num;
  
  let number = (num2 < 10)? "0"+num : num;
  
  satellites[1].innerText = number;
  
  satellites[2].innerText = (Math.floor(number / 2) < 10)? "0"+Math.floor(number / 2):Math.floor(number / 2);
  
  satellites[5].innerText =(Math.floor(number / 1.321) < 10)? "0"+Math.floor(number / 1.321):Math.floor(number / 1.321);
  
  satellites[7].innerText = (Math.floor(number / 1.5 * 0.97 * 1.8) < 10)? "0"+Math.floor(number / 1.5 * 0.97 * 1.8):Math.floor(number / 1.5 * 0.97 * 1.8);
  
//   for month
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  let date = new Date();
  
  satellites[4].innerText = month[date.getMonth()];
  
}, 1000);
  
  
  document.addEventListener("keydown",(e)=>{
    
    // Create a MediaQueryList object
    let x = window.matchMedia("(min-width: 0px) and (max-width: 700px)");
    
    
    if(x.matches){
      
    }else{
      
      
//     for B audio
    if(e.key == "B" || e.key == "b" || e.key == "066"){
      audio.src = "https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/B.mp3";
      audio.play();
    }
    
//     for c audio
    if(e.key == "C" || e.key == "c" || e.key == "067"){
      audio.src = "https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/C.mp3";
      audio.play();
    }
    
//     for D audio
    if(e.key == "D" || e.key == "d" || e.key == "068"){
      audio.src = "https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/D.mp3";
      audio.play();
    }
    
//     for E audio
    if(e.key == "E" || e.key == "e" || e.key == "069"){
      audio.src = "https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/E.mp3";
      audio.play();
    }
    
//     for E audio
    if(e.key == "F" || e.key == "f" || e.key == "070"){
      audio.src = "https://github.com/Short-Zed/Movie-Responsive-Site/raw/main/F.mp3";
      audio.play();
    }
      
    }

    
  })
  
}); // load event end


   let num=5;

   if(num%2===0){
    console.log("even");
   }
   else{
    console.log("odd");
  }
for (let i = 1; i <=5; i++){
  for (let j = 1; j <=i; j++){
  console.log("*");
  }
  console.log(" ");
}
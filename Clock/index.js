console.log('Welcome to JavaScript') ; 
const secondHand = document.querySelector('.sec-hand') ; 
const minuteHand = document.querySelector('.minute-hand') ; 
const hourHand = document.querySelector('.hour-hand') ;

function setdate(){
    const now = new Date() ; 
    const seconds = now.getSeconds() ;
    const secondDegree = (seconds*6) + 90 ; 
    secondHand.style.transform = `rotate(${secondDegree}deg)` ; 
    console.log(seconds) ; 
    const minute = now.getMinutes() ;
    const minuteDegree = (minute*6) + 90 ;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)` ;
    console.log(minute) ;
    const hour = now.getHours() ;
    const hourDegree = (hour*30) + 90 ;
    hourHand.style.transform = `rotate(${hourDegree}deg)` ;
} 

setInterval(setdate,1000) ; 
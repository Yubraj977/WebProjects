setInterval(setclock,1000);
const hourhand=document.querySelector('[data-hour-hand]')
const minutehand=document.querySelector('[data-minute-hand]')
const secondhand=document.querySelector('[data-second-hand]')
function setclock(){
    const currentdate=new Date();
    const secondsr=currentdate.getSeconds() / 60;
    const minutesr=(secondsr + currentdate.getMinutes()) / 60;
    const hoursr=(minutesr + currentdate.getHours()) / 12;
    setrotation(secondhand,secondsr);
    setrotation(minutehand,minutesr);
    setrotation(hourhand,hoursr);
    
}

function setrotation(element,rotationr){
    element.style.setProperty('--rotation',rotationr*360)

}


// const date=new Date();
// console.log(date);
// const sec=date.getSeconds();
// console.log(sec);
// console.log(date.getMinutes());
// console.log(date.getHours());
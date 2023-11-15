const changebtn = document.getElementsByClassName("switch")[0]; 
const main = document.getElementsByTagName("body")[0]


changebtn.addEventListener('click', function () {
  
  main.classList.toggle("mode");
});




function updateClock(){
  const updateElement=document.getElementsByClassName("time")[0]
  const updatemilli=document.getElementsByClassName("millisec")[0]
  const now=new Date();
  const hours=String(now.getHours()).padStart(2,"0")
  const minutes=String(now.getMinutes()).padStart(2,"0")
  const seconds=String(now.getSeconds()).padStart(2,"0")
  const millisec=String(now.getMilliseconds()).padStart(3,"0")
  
 
  timestring=`${hours}:${minutes}:${seconds}`
  updateElement.innerText=timestring
}
updateClock();
setInterval(updateClock,200)


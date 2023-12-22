//Getting the values from the html
const joke=document.getElementById("setup")
const line=document.getElementById("punchline");

const newJokeBtn = document.getElementById("newJOkeBtn");

console.log(newJokeBtn);
//generated jokes using the fetech api by the internet
function generateJoke(){
  joke.innerHTML="Loading...."
  line.innerHTML=""
fetch("https://official-joke-api.appspot.com/random_joke").then((datas)=>{
return datas.json()
}).then((data)=>{
const {setup,punchline}=data
  joke.innerHTML=setup;
  line.innerHTML=punchline


})}
generateJoke();
newJokeBtn.addEventListener('click',generateJoke)
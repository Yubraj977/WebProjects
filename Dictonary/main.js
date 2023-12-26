let btn=document.getElementById('find')
let result=document.getElementById('result1')
let word=document.getElementById('word')
let ph=document.getElementById('phonetic')
let audiofile;
let play=document.getElementById('play');
let speech=document.getElementById('speech')
let defi=document.getElementById('definations')
let synonyms=document.getElementById('synonyms')
let antonyms=document.getElementById('antonyms')
let examples=document.getElementById('examples')
play.addEventListener('click',function(){
    let audio=new Audio(audiofile);
    audio.play()
})
  let empty='';




//Data from the fetch

btn.addEventListener('click',find)
function find(){
 let val=document.getElementById('inpurword').value;
 let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`
 console.log(val);
 console.log(url);
fetch(url).then((data)=>{
return data.json();
}).then((data)=>{
    
   
audiofile=data[0].phonetics[0].audio;


word.innerHTML=data[0].word

ph.innerHTML=data[0].phonetic;
 result.innerHTML=` 
 <div class="speech"><h1>Part of speech</h1>
 <p>${data[0].meanings[0].partOfSpeech}</p>
 </div>

 <div class="definations">
   <h1>Definations</h1>
 <p>${data[0].meanings[0].definitions[0].definition},</p>
 <p>${data[0].meanings[0].definitions[1].definition}</p>
 </div>

 <div class="synonyms">
   <h1>Synonyms</h1>
   <p>${data[0].meanings[0].synonyms[0]==undefined?empty:data[0].meanings[0].synonyms[0]}</p>
 </div>
 <div class="antonyms">
   <h1>Antonyms</h1>
   <p>${data[0].meanings[0].antonyms[0]==undefined?empty:data[0].meanings[0].antonyms[0]}</p>
 </div>
 <div class="examples">
   <h1>Examples</h1>
   <p>${data[0].meanings[0].definitions[0].examples==undefined?empty:data[0].meanings[0].definitions[0].examples}</p>
 </div> `



// 
}).catch((err)=>{
  result.innerHTML="<h1 id='err'>Not Found! </h1>"
  console.log(err);
})
  



}

























// fetch(url).then((data)=>{
// return data.json();
// }).then((data)=>{
//     // console.log(data);
// audiofile=data[0].phonetics[0].audio;
// // console.log(audiofile);

// let bigData;
// console.log(bigData);
  



// for(let i=0;i<data.length;i++){
    
// console.log(data[i].word);
// word.innerHTML=data[i].word;


// for(let j=0;j<data[i].phonetics.length;j++){

//     // console.log(data[i].phonetics[j].text);
//     ph.innerHTML=data[i].phonetics[0].text
//     // console.log(data[i].phonetics[j].audio);
// //for the play btn

    
// }



// for(let k=0;k<data[i].meanings.length;k++){
//     console.log(data[i].meanings[k].partOfSpeech);
//     bigData+=data[i].meanings[k].partOfSpeech
//     // speech.innerHTML+=data[i].meanings[k].partOfSpeech
//     for(let l=0;l<data[i].meanings[k].definitions.length;l++){
       
       
 
// defi.innerHTML+=data[i].meanings[k].definitions[l].definition;

//         // console.log(data[i].meanings[k].definitions[l].definition);
//         // console.log(data[i].meanings[k].definitions[l].example);
//         result.innerHTML=`<div class="partofspeech" id="speech"></div>
//         <div class="definations">hello</div>
//         <div class="synonyms">Hi</div>
//         <div class="antonyms">Bye</div>
//         <div class="examples"></div>`
//     }
//     for(let m=0;m<data[i].meanings[k].synonyms.length;m++){
// // console.log(data[i].meanings[k].synonyms[m]);
//     }
//     for(let n=0;n<data[i].meanings[k].antonyms.length;n++){
//         // console.log(data[i].meanings[k].antonyms[n]);

       
        
//             }
        
// }





// }

// }).then((err)=>{
// console.log("No item found" + err);
// })
// }
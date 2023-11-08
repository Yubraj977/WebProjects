const input=document.querySelector('input')

buttons=Array.from(document.querySelectorAll('.button'))

buttons.forEach((button)=>{
const btnvalue=button.value;

button.addEventListener('click',()=>{
    
   
if(btnvalue=="="){
    console.log("i am clicked");
    input.value=eval(input.value)
}
else if(btnvalue=="A"){
input.value=""
}
else if(btnvalue=="D"){
    input.value+=""
    }
    else if(btnvalue=="←"){

        input.value=input.value.slice(0, -1);
        console.log(input.value);
        
        }
else{
    input.value+=btnvalue
}

})
    
})


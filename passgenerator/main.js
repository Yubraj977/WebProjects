const range=document.getElementById('range');
const lengthShow=document.getElementById('lengthShow')
 const valueShow=document.getElementById('valueShow');
 
 const numberCheckbox=document.getElementById('numberCheckbox')
 const charCheckbox=document.getElementById('charCheckbox')
 const copyButton=document.getElementById('copy')
let passLength=range.value;
valueShow.value="PSsSsWorDd";


range.addEventListener('input',function(){
    lengthShow.innerText=`Length: ${this.value}`
   
   
})


let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"
let num="1234567890"
let sym="!@#$$%%^^&*()_+"




range.addEventListener('change',function(){
    
   if(numberCheckbox.checked==false&&charCheckbox.checked==false){
    let PassNewLength=range.value
    let pass='';
    for(let i=1; i<=PassNewLength;i++){
        index=Math.floor(Math.random()*52)
        pass+=str[index];   
    }
 valueShow.value=pass;
   }
   
  if(numberCheckbox.checked==true&&charCheckbox.checked==true){
    let PassNewLength=range.value
    let pass='';
    str="@#$345$()_ABCDEFGHIJKLM%%^^&*NOPQRS1267890TUVWXYZabcdefghijklmnopqurstuvwxy"
    for(let i=1; i<=PassNewLength;i++){
        index=Math.floor(Math.random()*52)
        pass+=str[index];   
    }
 valueShow.value=pass;

  }

  if(numberCheckbox.checked==true&&charCheckbox.checked==false){
    let PassNewLength=range.value
    let pass='';
    str="15PQRSTUVWXs67890AYZabcdeCDEFGHIJKLMNOfghijkl234mnopqurBtuvwxy"
    for(let i=1; i<=PassNewLength;i++){
        index=Math.floor(Math.random()*52)
        pass+=str[index];   
    }
 valueShow.value=pass;
  }
  if(numberCheckbox.checked==false&&charCheckbox.checked==true){
    let PassNewLength=range.value
    let pass='';
    str="ABCQR!@#$$%%^^&*()_+%^^&*(efgDEF)_+GHIJKLWXYZabcd!@#STUV$$%MNOPqurstuvwxyz";
    
    for(let i=1; i<=PassNewLength;i++){
        index=Math.floor(Math.random()*52)
        pass+=str[index];   
    }
 valueShow.value=pass;
  }

})

copyButton.addEventListener('click', function () {
    // Select the text in the input box
    valueShow.select();
    valueShow.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Optionally, provide some visual feedback
    alert('Text copied to clipboard: ' + valueShow.value);
});

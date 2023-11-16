let addBtn=document.getElementById('addBtn')
let input=document.getElementById('inputText')
let li=document.createElement('li')

function addtask(){
  
    addBtn.addEventListener('click',function(){

        let li=document.createElement('li')
        let ul=document.getElementById('ul');
       
        let val=input.value;
        if (val.trim() === "") {
            alert("Please enter a task!");
            return;
        }
        li.innerHTML=`${val}   <button onclick="removeTask()" id="changing"><i class="fa fa-close"></i></button>`
        li.setAttribute('id',"taskslists")
        ul.appendChild(li);
        li.addEventListener('click',function(){
            li.classList.toggle('completed')
            
        })
       
    

       
    // Clear the input field
   input.value = "";




   
    


    })
    

}




addtask();




function removeTask(){
    let task=document.getElementById('changing');
    
   task.parentNode.remove();
}




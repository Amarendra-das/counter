let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0;

console.log(saveEl)

function increment(){
       count += 1;
       countEl.textContent = count;
    }
   
    // 1. create a function,save(),which log out the count when it's called
   
    function save(){
       let countStr = count +" _ ";
       saveEl.textContent += countStr;
       countEl.textContent = 0;
       count =0; 
    }
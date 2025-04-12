let inputs = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}<button class="removeBtn">Delete</button>`;
        text.appendChild(newEle);
        inputs.value = ""; 
        newEle.querySelector(".removeBtn").addEventListener("click", remove);
        
        function remove() {
            newEle.remove();
        }
    }
}

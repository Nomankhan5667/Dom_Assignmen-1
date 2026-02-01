// step 1st
let heading = document.getElementById("heading")
heading.innerText = "Welcome to javascript";

// step 2   
    // let ChangeParagraph = document.getElementById("ChangeParagraph")

 function ChangeParagraph() {
    document.getElementById("para")
    para.innerText = "I am Muhammad Noman!";
}

// Step 3
// let ChangeBackgroundcolor = document.getElementById("ChangeBackgroundcolor")

function ChangeBackgroundcolor(){
    document.body.style.backgroundColor = "lightblue" 
}

// Step 4
// let ShowAlert = document.getElementById("ShowAlert")

function ShowAlert() {
    alert("Dom is Working")
}

// Step 5
let input_field=document.getElementById("input-field")
let pera=document.getElementById("pera")

function update(){
pera.innerHTML=input_field.value
}
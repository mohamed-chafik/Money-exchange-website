function make(){
// Create a new div element
const divElement = document.createElement('div');
const lastname = document.createElement('p');
// Set the content of the div
divElement.innerHTML = localStorage.getItem("amount");
lastname.innerHTML = localStorage.getItem("mail");


// Append the div element to the parent element
const parentElement = document.getElementById('parent');
parentElement.appendChild(divElement);
parentElement.appendChild(lastname);

}
const btn = document.getElementById("ss");

btn.addEventListener("submit", make);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

    var id = document.getElementById("name14").value;
    let datareceiever = document.getElementById(datasection);

    function grass(){
        if(id = 14){
            const newgrass = document.createElement("div");
            newgrass.classList.add("grass"); //to add class to the 
            
        datareceiever.appendChild(newgrass);
        }
    }
    const button = document.getElementById("make-submit-btn")
    button.addEventListener("click", grass);

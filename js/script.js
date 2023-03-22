window.onload = () => {
 const form = document.querySelector("form");
 form.onsubmit = (e) => {
    e.preventDefault();
    const animal = document.getElementById("animal").value;


    let tortuga = document.getElementById("tortuga");
    tortuga.setAttribute("class", "hidden");
    let Mariposa = document.getElementById("Mariposa");
    Mariposa.setAttribute("class", "hidden");
    
    if (animal === "tortuga") {
        tortuga.removeAttribute("class","hidden");
    }
    else if (Mariposa){
        Mariposa.removeAttribute("class", "hidden");
    }
    
 }; 
};
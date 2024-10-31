const textarea = document.getElementById('autoExpand');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';  // Resetear altura
    this.style.height = `${this.scrollHeight}px`;  // Ajustar a la altura del contenido
    
});

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "navbar"){
        i.className += " responsive"; 
    } else {
        i.className = "navbar";
    }
}

gsap.set(".flair", {xPercent: -50, yPercent: -50});

let xSetter = gsap.quickSetter(".flair", "x", "px") //apply it to the #id element's x property and append a "px" unit
let ySetter = gsap.quickSetter(".flair", "y", "px") //apply it to the #id element's x property and append a "px" unit

window.addEventListener("mousemove", e => {  
  xSetter(e.x)
  ySetter(e.y)
});
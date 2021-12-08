window.addEventListener("DOMContentLoaded", () => {
    
    const carres = document.querySelectorAll(".carre")
    const body = document.querySelector("body")
    
    carres.forEach(carre => {
        carre.addEventListener("click", function() {
            carre.classList.toggle("active")
    
            if(!carre.classList.contains("active")){
                body.style.backgroundColor = "rgb(192, 192, 192)"
            } else {
                body.style.backgroundColor = carre.dataset.color
            }
        })
    })
})

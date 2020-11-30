
const openButtons = document.querySelectorAll(".open"); 
for(let i = 0; i < openButtons.length; i++) {
    console.dir(openButtons[i]); 

    openButtons[i].onclick = function () {

        if(this.parentElement.classList.contains("show")) {
            this.parentElement.classList.remove("show"); 
            this.parentElement.classList.add("hide"); 
            this.parentElement.nextElementSibling.classList.remove("hide"); 
            this.parentElement.nextElementSibling.classList.add("show");
        }   

} 
}
const closeButtons = document.querySelectorAll(".close-box"); 
for(let i = 0; i < closeButtons.length; i++) {
    console.dir(closeButtons[i]); 

    closeButtons[i].onclick = function () {

        if(this.parentElement.classList.contains("show")) {
            this.parentElement.classList.remove("show"); 
            this.parentElement.classList.add("hide"); 
            this.parentElement.previousElementSibling.classList.remove("hide"); 
            this.parentElement.previousElementSibling.classList.add("show");

    }
}
}
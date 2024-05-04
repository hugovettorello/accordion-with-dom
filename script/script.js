const accordion = document.getElementsByClassName('content-container');

console.log(accordion.length);



for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", () => {
        this.classList.toggle('active');
    })
}
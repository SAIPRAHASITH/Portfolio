greetings ();

function   greetings () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
};
let index=0;
const span=document.querySelector(".developer");
const text=document.querySelector(".developer").innerHTML;
function showLetter(){
    if(index<text.length){
        span.textContent=text.slice(0,index+1);
        index++;
    }
    else{
        index=0;
        showletter();
    }
}
const interval = setInterval(showLetter, 300);

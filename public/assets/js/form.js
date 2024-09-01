const Form1 = document.getElementById('Form1');
const Form2 = document.getElementById('Form2');
const Form3 = document.getElementById('Form3');
const Form4 = document.getElementById('Form4');
const Form5 = document.getElementById('Form5');
const Form6 = document.getElementById('Form6');
const Form7 = document.getElementById('Form7');

const Next1 = document.getElementById('Next1');
const Next2 = document.getElementById('Next2');
const Next3 = document.getElementById('Next3');
const Next4 = document.getElementById('Next4');
const Next5 = document.getElementById('Next5');
const Next6 = document.getElementById('Next6');

const Back1 = document.getElementById('Back1');
const Back2 = document.getElementById('Back2');
const Back3 = document.getElementById('Back3');
const Back4 = document.getElementById('Back4');
const Back5 = document.getElementById('Back5');
const Back6 = document.getElementById('Back6');



const progress = document.getElementById('progress');

Next1.addEventListener("click", () => {
    Form1.style.left = "-1000px";
    Form2.style.left = "0px";
    progress.style.width = "28%";
});

Back1.addEventListener("click", () => {
    Form1.style.left = "0px";
    Form2.style.left = "1000px";
    progress.style.width = "14%";
});

Next2.addEventListener("click", () => {
    Form2.style.left = "-1000px";
    Form3.style.left = "0px";
    progress.style.width = "42%"
});

Back2.addEventListener("click", () => {
    Form2.style.left = "0px";
    Form3.style.left = "1000px";
    progress.style.width = "28%";
});

Next3.addEventListener("click", () => {
    Form3.style.left = "-1000px";
    Form4.style.left = "0px";
    progress.style.width = "56%";
});

Back3.addEventListener("click", () => {
    Form3.style.left = "0px";
    Form4.style.left = "1000px";
    progress.style.width = "42%";
});

Next4.addEventListener("click", () => {
    Form4.style.left = "-1000px";
    Form5.style.left = "0px";
    progress.style.width = "70%";
})

Back4.addEventListener("click", () => {
    Form4.style.left = "0px";
    Form5.style.left = "1000px";
    progress.style.width = "56%";
})

Next5.addEventListener("click", () => {
    Form5.style.left = "-1000px";
    Form6.style.left = "0px";
    progress.style.width = "84%";
});

Back5.addEventListener("click", () => {
    Form5.style.left = "0px";
    Form6.style.left = "1000px";
    progress.style.width = "70%";
});

Next6.addEventListener("click", () => {
    Form6.style.left = "-1000px";
    Form7.style.left = "0px";
    progress.style.width = "100%";
});

Back6.addEventListener("click", () => {
    Form6.style.left = "0px";
    Form7.style.left = "1000px";
    progress.style.width = "84%"
})


// Next1.onclick = function() {
//     Form1.style.left = "-1000px";
//     Form2.style.left = "0px";
//     progress.style.width = "28%";
// }




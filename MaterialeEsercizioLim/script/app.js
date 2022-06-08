/*<!--HEADER SLOGAN-->*/
const sloganEl = document.querySelector(".animated-header-slogan");
let sloganTextEl = sloganEl.textContent;
let sloganSplitText = sloganTextEl.split("");
sloganEl.textContent = "";
/*<!--/HEADER SLOGAN-->*/

/*<!--HEADER SLOGAN ANIMATION WITH SPAN DYNAMIC ELEMENT-->*/
for (let i=0; i<sloganSplitText.length; i++) {
    sloganEl.innerHTML += `<span class="span">${sloganSplitText[i]}</span>`;
    
}

let sloganCount = 0;
let sloganTimer = setInterval(animated_header_slogan,90);

function animated_header_slogan(){
    const span = document.querySelectorAll(".span")[sloganCount++];
    span.classList.add("slogan-animated-span");

    if (sloganCount == sloganSplitText.length){
        resetSloganCount();
    }
}

function resetSloganCount () {
    sloganCount = 0;
}

/*<!--/HEADER SLOGAN ANIMATION WITH SPAN DYNAMIC ELEMENT-->*/

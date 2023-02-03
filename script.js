const input = document.querySelector("input");
const showHideBtn = document.querySelector(".showBtn");
const indicator = document.querySelector(".indicator");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const veryStrong = document.querySelector(".veryStrong");
const text = document.querySelector(".text");

let regExpWeak = /[a-z]/;
let regExpmedium = /\d+/;
let regExpStrong = /[A-Z]/;
let regExpVeryStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


function trigger() {
    if (input.value != "") {
        
        if(input.value.length <= 6 && (input.value.match(regExpWeak) || input.value.match(regExpmedium) || input.value.match(regExpStrong) || input.value.match(regExpVeryStrong)))no=1;
        if(input.value.length >= 6 && ((input.value.match(regExpWeak) && input.value.match(regExpmedium)) || (input.value.match(regExpmedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpVeryStrong)) || (input.value.match(regExpmedium) && input.value.match(regExpVeryStrong)) || (input.value.match(regExpStrong) && input.value.match(regExpVeryStrong))))no=2;
        if(input.value.length >= 6 && (input.value.match(regExpWeak) && input.value.match(regExpmedium) && input.value.match(regExpStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpmedium) && input.value.match(regExpVeryStrong)) || (input.value.match(regExpmedium) && input.value.match(regExpStrong) && input.value.match(regExpVeryStrong)) || (input.value.match(regExpWeak) && input.value.match(regExpStrong) && input.value.match(regExpVeryStrong)))no=3;
        if(input.value.length >= 6 && input.value.match(regExpWeak) && input.value.match(regExpmedium) && input.value.match(regExpStrong) && input.value.match(regExpVeryStrong))no=4;
        if(no == 1) {
            weak.classList.add("active");
            text.textContent = "Your Password is too weak";
            text.classList.add("weak");
        }
        if(no == 2) {
            medium.classList.add("active");
            text.textContent = "Your Password is medium";
            text.classList.add("medium");
        }
        else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if(no == 3) {
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your Password is strong";
            text.classList.add("strong");
        }
        else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        if(no == 4) {
            medium.classList.add("active");
            strong.classList.add("active");
            veryStrong.classList.add("active");
            text.textContent = "Your Password is very strong";
            text.classList.add("veryStrong");
        }
        else {
            veryStrong.classList.remove("active");
            text.classList.remove("veryStrong");
        }
        passWordDetailes();
        text.style.opacity = 1;
        showHideBtn.style.display = "block";
        showHideBtn.innerHTML = "Show"
        showHideBtn.onclick = function() {
            if(input.type == "password") {
                input.type = "text";
                showHideBtn.innerHTML = "Hide";
            }else{
                input.type = "password";
                showHideBtn.innerHTML = "Show";
            }
        }

    }
    else {
        weak.classList.remove("active");
        text.style.opacity = 0;
        showHideBtn.style.display = "none";
    }
}

input.addEventListener("keyup", trigger);

function passWordDetailes() {

    const passWordLength = document.querySelector(".passwordLength");
    const passWordLettersUp = document.querySelector(".passwordLettersUpper");
    const passWordLettersLow = document.querySelector(".passwordLettersLower");
    const passWordNumbers = document.querySelector(".passwordNumbers");
    const specialChrts = document.querySelector(".passwordSpecialChrts");
    
    if (input.value.length >= 6) {
        passWordLength.classList.add("active");
    }
    else {
        passWordLength.classList.remove("active");
    }
    
    if (/[A-Z]/.test(input.value)) {
        passWordLettersUp.classList.add("active");
    }
    else {
        passWordLettersUp.classList.remove("active");
    }
    
    if (/[a-z]/.test(input.value)) {
        passWordLettersLow.classList.add("active");
    }
    else {
        passWordLettersLow.classList.remove("active");
    }

    if (/\d+/.test(input.value)) {
        passWordNumbers.classList.add("active");
    }
    else {
        passWordNumbers.classList.remove("active");
    }
    
    if (/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/.test(input.value)) {
        specialChrts.classList.add("active");
    }
    else {
        specialChrts.classList.remove("active");
    }
}


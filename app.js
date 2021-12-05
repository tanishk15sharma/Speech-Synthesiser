const stopBtn = document.querySelector("#stop-btn");
const speakBtn = document.querySelector("#speak-btn");
const msg = new SpeechSynthesisUtterance();
const voiceDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type = 'range'],[name='text'] " );

let voices =[];

msg.text = document.querySelector("[name='text']").value;


function populateVoices(){
    let voice =   this.getVoices();
    // console.log(voice);
    
}

speechSynthesis.addEventListener("voiceschanged",populateVoices );


const stopBtn = document.querySelector("#stop-btn");
const speakBtn = document.querySelector("#speak-btn");
const msg = new SpeechSynthesisUtterance();
const voiceDropdown = document.querySelector("[name='voice']");
const options = document.querySelectorAll("[type = 'range'],[name='text'] ");

let voices = [];

msg.text = document.querySelector("[name='text']").value;


function populateVoices() {
     voices = this.getVoices();
    // console.log(voice);

    const voiceOptions = voices
        .map(v => `<option value ="${v.name}"> ${v.name} (${v.lang}) </option>`).join("")

    // console.log(voiceOptions);
    voiceDropdown.innerHTML = voiceOptions;


}


function setVoice() {
    msg.voice = voices.find(v => v.name === this.value  ); 
    // console.log(msg.voice);
    start_stop()

}

function start_stop (startOver = true) {
    speechSynthesis.cancel();
    if(startOver){
    speechSynthesis.speak(msg);
    }
}

function setOptions(){
    console.log(this.name,this.value ) ;
    msg[this.name] = this.value;
    start_stop();
}


speechSynthesis.addEventListener("voiceschanged", populateVoices);
voiceDropdown.addEventListener("change",setVoice );
options.forEach(items =>items.addEventListener("change",setOptions )  );
speakBtn.addEventListener("click",start_stop  );
stopBtn.addEventListener("click",() =>{
    start_stop(false)
}  )
// console.log(voices);



const video = document.querySelector("video")
const audio = document.querySelector("audio")

navigator.mediaDevices.getUserMedia({audio : true}).then(stream => {
    audio.srcObject = stream;
})
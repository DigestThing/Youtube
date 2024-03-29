
const video = document.querySelector("video")

navigator.mediaDevices.getUserMedia({video : {height : "640", width : "460"}, audio : true}).then(stream => {
    video.srcObject = stream;
})
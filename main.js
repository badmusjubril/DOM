var listItem = document.querySelector("li")
console.log(listItem)  

var select = document.querySelector("h1")
console.log(select)


var aaa = document.querySelectorAll("li")
console.log(aaa)

var sss = document.getElementById("firstli")
console.log(sss)


var www = document.getElementsByClassName("first")
console.log(www)

var ccc = document.getElementsByTagName("h3")
console.log(ccc)

var audio = document.querySelector("audio")
console.log(audio)
var audioAttribute = audio.getAttribute("controls")
console.log(audioAttribute)
audio.setAttribute("controls","true")


var video = document.querySelector("video")
console.log(video)
var videoAttribute = video.getAttribute("controls")
console.log(videoAttribute)
video.setAttribute("controls","true")
var videoAttribute = video.removeAttribute("controls")
console.log(videoAttribute)



function handleBtn( ){
    return alert("button has been clicked")
}


var btn = document.getElementById("btn")
btn.addEventListener("click", handleBtn)

function hoverBn(){
    return alert("Anchor has been hovered on")
}


var dbl = document.getElementById("anchor")
dbl.addEventListener("dblclick", hoverBn)


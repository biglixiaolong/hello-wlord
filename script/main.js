var myImage = document.querySelector("img");
var myTitle = document.querySelector("h1");
var myButton = document.querySelector("button");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/1.JPG");
    }
    else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

function setName() {
    var name = prompt("enter your name");
    localStorage.setItem("name", name);
    myTitle.innerHTML = name;
}

if (!localStorage.getItem("name")) {
    setName();
}
else {
    var name = localStorage.getItem("name");
    myTitle.innerHTML = name;
}

myButton.onclick = function () { setName(); } 
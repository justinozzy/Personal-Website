function darkMode() {
    var element = document.body;
    var socials = [];
    var mode = document.getElementById("mode");

    if (mode.attributes.src.nodeValue == "html/darkmode.png") {
        mode.src = "html/lightmode.png";
    }
    else {
        mode.src = "html/darkmode.png";
    }

    socials.push(document.getElementById("gh"));
    socials.push(document.getElementById("li"));
    socials.push(document.getElementById("gm"));

    element.classList.toggle("dark-mode");

    for (let j = 0; j < socials.length; j++) {
        socials[j].classList.toggle("invert");
    }
}
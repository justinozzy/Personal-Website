function darkMode() {
    var element = document.body;
    var socials = [];
    var mode = document.getElementById("mode");

    if (mode.attributes.src.nodeValue == "darkmode.png") {
        mode.src = "lightmode.png";
    }
    else {
        mode.src = "darkmode.png";
    }

    socials.push(document.getElementById("gh"));
    socials.push(document.getElementById("li"));
    socials.push(document.getElementById("gm"));

    element.classList.toggle("dark-mode");

    for (let j = 0; j < socials.length; j++) {
        socials[j].classList.toggle("invert");
    }
}
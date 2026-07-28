function dropdown(id) {
    document.getElementById(id).classList.toggle("show");
}

function dropdownmega() {
    dropdown("eva");
    dropdown("darling");
    dropdown("kind");
    dropdown("sigse");
    dropdown("medai");
    dropdown("genai");
}

function makeScrollable(name) {
    document.getElementById(name).classList.add("scrollable");
    document.getElementById(name + ".more").style.display = 'none';
}
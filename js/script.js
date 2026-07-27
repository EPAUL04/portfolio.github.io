function dropdown() {
    document.getElementById("ai").classList.toggle("show");
}

function makeScrollable(name) {
    document.getElementById(name).classList.add("scrollable");
    document.getElementById(name + ".more").style.display  = 'none';
}
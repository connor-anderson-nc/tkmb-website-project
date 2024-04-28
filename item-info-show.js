var current = "";

function show_info(t) {
    if (current != "") {
        current[0].style.display = "none";
    }

    var target = document.querySelectorAll(t + " > .item-info");

    if (target != current) {
        target[0].style.display = "block";
    }

    current = target;
}
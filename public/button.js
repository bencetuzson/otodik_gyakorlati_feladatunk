"use strict"

function buttonID() {
    return document.getElementById("TopButton");
}

buttonID().addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function whenNotOnTheTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        buttonID().style.display = "block";
    } else {
        buttonID().style.display = "none";
    }
}

window.onscroll = function() {whenNotOnTheTop()};

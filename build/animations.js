let titleText = document.getElementById("title");
title.addEventListener('load', titleAnimation());
function titleAnimation() {
    let duration = null;
    let speed = 0;
    let ongoing = 10;
    duration = setInterval(frame, 5);
    function frame() {
        if (speed >= ongoing) {
            clearInterval(duration);
        }
        else {
            ongoing += 1;
            speed += 1;
            title.style.transform = "rotateX("+speed+"deg)";
        }
    }
}

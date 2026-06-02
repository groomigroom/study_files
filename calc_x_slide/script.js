let slide_train = document.querySelector(".slide_train");
let count = 0;

setInterval(function () {
    count++;
    if (count > 2) {
        count = 0;
    }
    slide_train.style.transform = `translateX(calc((100vw - 200px) * (-${count}))`;
}, 2500)
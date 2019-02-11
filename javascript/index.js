function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const m = document.getElementById('ml1');
const l = document.getElementById('ml2');

setInterval(function() {
    let randomColor = randomColors();
    m.style.color = randomColor;
    l.style.color = randomColor;
    console.log(x.style.color);
}, 1000);
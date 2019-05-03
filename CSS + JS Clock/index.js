const secondHand = document.querySelector(".second-hand");

function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegree = ((second/60) * 360);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    console.log(second);
}

setInterval(setDate, 1000);
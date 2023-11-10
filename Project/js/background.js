const images = [
    "/img/0.jpg", "/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
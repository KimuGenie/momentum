const images = ["(1).jpg", "(2).jpg", "(3).jpg"];

const todaysImage = images[Math.floor(Math.random()*images.length)];

const BGImage = document.createElement("img");

BGImage.src = `backgroundimg/${todaysImage}`;

document.body.appendChild(BGImage);
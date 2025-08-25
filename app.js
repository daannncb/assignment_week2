const images = [
  {
    src: "./assignment_week2_assets/image1.jpg",
    alt: "An image of some moody clouds rolling over mossy cliffs.",
  },
  {
    src: "./assignment_week2_assets/image2.jpg",
    alt: "Durdle Door, a large natural stone arch on the Dorset coastline.",
  },
  {
    src: "./assignment_week2_assets/image3.jpg",
    alt: "A picturesque steep village street, with a thatch roof featuring prominently and steep, mossy cobbles.",
  },
  {
    src: "./assignment_week2_assets/image4.jpg",
    alt: "An image of a mountain lake in the Dolomites. There are blue mountain flowers blurred in the foreground, and white cliffs above the lea.",
  },
  {
    src: "./assignment_week2_assets/image5.jpg",
    alt: "A geometric image of some of the angled ceilings in the Sagrada Familia in Barcelona.",
  },
];

const imageThumbnail = document.querySelector("#thumbnail-container");

for (let i = 0; i < images.length; i++) {
  const thumb = document.createElement("img");
  thumb.src = images[i].src; //formatting here was interesting. Chat GPT helped point out my syntax error: prev. was images.[i]src
  thumb.alt = images[i].alt;
  thumb.className = "thumbnail";
  const imageObj = images[i];
  thumb.addEventListener("click", function () {
    generateLargeImage(imageObj);
  });
  imageThumbnail.appendChild(thumb);
}
//got stuck here for a long time, had to put the listener into the loop

const largeImageContainer = document.querySelector("#fullres-container");

function generateLargeImage(images) {
  largeImageContainer.innerHTML = "";
  let fullres = document.createElement("img");
  fullres.src = images.src;
  fullres.alt = images.alt;
  fullres.className = "fullres";
  largeImageContainer.appendChild(fullres);
}
//im not entirely certain, but I tried a few different things and landed on function generateLargeImage(images). Not having *images* in the brackets seems to make things collapse

let currentIndex = 0; // start at first image

function showImage(index) {
  currentIndex = index;
  generateLargeImage(images[currentIndex]);
}

// Left arrow
document.getElementById("arrow-left").addEventListener("click", function () {
  var newIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(newIndex);
});

//negative remainders possible, so added length to make positive when wrapping around. Could probably find a modulus thing but this is stretching the limits of my A level maths.

// Right arrow
document.getElementById("arrow-right").addEventListener("click", function () {
  var newIndex = (currentIndex + 1) % images.length;
  showImage(newIndex);
});

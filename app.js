console.log("hi world");

//functions!
//TODO: store image data - assetts folder
//you can use local sorted or web hosted(unsplash, pixa___)

//TOADD var img1 = document.createElement("img");
//TOADD img1.src = "http://path/to/image";

const images = [
  { src: "./assignment_week2_assets/image1.jpg", alt: "altText1" },
  { src: "./assignment_week2_assets/image2.jpg", alt: "altText2" },
  { src: "./assignment_week2_assets/image3.jpg", alt: "altText3" },
  { src: "./assignment_week2_assets/image4.jpg", alt: "altText4" },
  { src: "./assignment_week2_assets/image5.jpg", alt: "altText5" },
];

//TODO: create thumbnail images
//==================ATTEMPT 2===========================================
//grab thumbnail container
const imageThumbnail = document.querySelector("#thumbnail-container");
//loop thumbnails into container
for (let i = 0; i < images.length; i++) {
  const thumb = document.createElement("img");
  thumb.src = images[i].src;
  thumb.alt = images[i].alt;
  thumb.className = "thumbnail";
  imageThumbnail.appendChild(thumb);
}

//==================ATTEMPT 1 BELOW=====================================

// function generateThumbnails() {
//   const imageThumbnail = document.createElement("img");
//   document.imgSrc = images.src[0];
// }

// for (let i = 0; i < images.length; i++) {
//   generateThumbnails((src = images[i]));
// }

// images.forEach(generateThumbnails);
// generateThumbnails.addEventListenter("click", function (click) {
//   console.log("click");
// });

// const thumbnailContainer = document.getElementById("thumbnail-container");

// // generateThumbnails;

// for (let i = 0; i < images.length; i++) {
//   const imgBox = document.createElement("img");
//   imgBox.imageContent = src = images[i];
// }

//========================================================================

// function createThumbnails() {
//select the DOM element (thumnail-container) to contain thumbnails "getElement"
//   createThumbnails.;
// this is repetetive, use A LOOP! --> using length (of the images array) as i for
// inside the loop: need to:
// Create image element in HTML
// Update the src to match to array, to pull data from there
// The clue here is parameters (? not sure)
// append the created images to the thumbnail-container
// give each image a className; for i =1 className = image1
// give each image an eventListener -> event handler for this listener is the function you write to create large images

// }
//TODO: create large images

//TODO: create buttons stored in a box that create the large images (and delete the previous large image)

//for each comment, replace pseudo code with actual code; find/work out/big brain this

//TODO: Create image thumbnails
// this task is the event handler for the thumbnail event(s)
//TODO:          function createLargeImagesHandler(){}

// delete the current image
// 1) select large image container
// 2) delete current image in large image container
// 3) largeImageContainer.innerHTML = null OR ""

// 4) create an image
// 5) update the src and alt
// 6) give them className to style appropriately
// 7) append image to container

// add this event handler to the thumbnail event (so the end of the thumbnail triggers the function to create the large image)
// you call the createThumbnails function

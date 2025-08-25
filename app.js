const images = [
  { src: "./assignment_week2_assets/image1.jpg", alt: "altText1" },
  { src: "./assignment_week2_assets/image2.jpg", alt: "altText2" },
  { src: "./assignment_week2_assets/image3.jpg", alt: "altText3" },
  { src: "./assignment_week2_assets/image4.jpg", alt: "altText4" },
  { src: "./assignment_week2_assets/image5.jpg", alt: "altText5" },
];

const imageThumbnail = document.querySelector("#thumbnail-container");

for (let i = 0; i < images.length; i++) {
  const thumb = document.createElement("img");
  thumb.src = images[i].src;
  thumb.alt = images[i].alt;
  thumb.className = "thumbnail";
  const imageObj = images[i];
  thumb.addEventListener("click", function () {
    generateLargeImage(imageObj);
  });
  imageThumbnail.appendChild(thumb);
}

const largeImageContainer = document.querySelector("#fullres-container");

function generateLargeImage(images) {
  largeImageContainer.innerHTML = "";
  let fullres = document.createElement("img");
  fullres.src = images.src;
  fullres.alt = images.alt;
  fullres.className = "fullres";
  largeImageContainer.appendChild(fullres);
}

// thumb.addEventListener("click", () => generateLargeImage(images[i]));

// imageThumbnail.addEventListener("click", generateLargeImage());

//TODO: create thumbnail images
//==================ATTEMPT 2===========================================
//grab thumbnail container

//loop thumbnails into container

//TODO: create large images

//TODO: make thumbnails interactive (clickable) to create the large images (and delete the previous large image)

//for each comment, replace pseudo code with actual code; find/work out/big brain this

//TODO: Create image thumbnails
// this task is the event handler for the thumbnail event(s)
//TODO:          function createLargeImagesHandler(){}

// const largeImageCreator = document.getElementById("#fullres-container");

//    function createLargeImagesHandler() {}

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

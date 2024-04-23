var imgsList = Array.from(document.getElementsByClassName("img-item")); // 6 Images
var lightBoxContainer = document.querySelector(".light-box-container");
var lightBoxItem = document.querySelector(".light-box-item");
var nextButton = document.querySelector("#next");
var prevButton = document.querySelector("#prev");
var closeButton = document.querySelector("#close");
// OR
// var nextButton=document.getElementById('#next');
// var prevButton=document.getElementById('#prev');
// var closeButton=document.getElementById('#close');
console.log(imgsList); // html collection but not array
var currentIndex;
for (var i = 0; i < imgsList.length; i++) {
  imgsList[i].addEventListener("click", function (event) {
    console.log("hello world");
    console.log(event.target);
    console.log(event.target.getAttribute("src"));
    currentIndex = imgsList.indexOf(event.target);
    console.log(currentIndex);
    var imgSrc = event.target.getAttribute("src");
    lightBoxContainer.classList.replace("d-none", "d-flex");
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

// function nextSlide() {
//     currentIndex++;
//     // ! wrong if(currentIndex==6) static size wrong when change array
//     // if(currentIndex>imgsList.length)
//     if (currentIndex == imgsList.length) {
//         currentIndex = 0;
//     }
//     var imgSrc = imgsList[currentIndex].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// function prevSlide() {
//     currentIndex--;
//     // if(currentIndex==-1)
//     // OR
//     if (currentIndex < 0) {
//         currentIndex = imgsList.length - 1;
//     }
//     var imgSrc = imgsList[currentIndex].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
// }

// prevSlide , nextSlide in one function
function slide(index) {
  currentIndex = currentIndex + index;
  // prev slide
  if (currentIndex < 0) {
    currentIndex = imgsList.length - 1;
  }
  // next slide
  else if (currentIndex == imgsList.length) {
    currentIndex = 0;
  }
  // if , if OR if , else if
  var imgSrc = imgsList[currentIndex].getAttribute("src");
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
  lightBoxContainer.classList.replace("d-flex", "d-none");
}
// nextButton.addEventListener('click', nextSlide);
// //! wrong  nextButton.addEventListener('click', nextSlide());

// prevButton.addEventListener('click', prevSlide);
// //! wrong  prevButton.addEventListener('click', prevSlide());



// OR
// nextButton.addEventListener('click', function(e) {
//     nextSlide();
// })

// prevButton.addEventListener('click', function(e) {
//     prevSlide();
// })

//! wrong  nextButton.addEventListener('click', Slide(1));

//! wrong  prevButton.addEventListener('click', Slide(-1));
prevButton.addEventListener("click", function (e) {
  slide(-1);
});

nextButton.addEventListener("click", function (e) {
  slide(1);
});

// closeButton.addEventListener('click', CloseSlide);
// //! wrong  closeButton.addEventListener('click', closeSlide());
closeButton.addEventListener('click', function (e) {
  closeSlide();
})

document.addEventListener('keydown', function (e) {
  // keydown ==> when click on any key on the keyboard
  console.log(e);
  if (e.key == 'ArrowRight') {
    slide(1);
  }

  else if (e.key == 'ArrowLeft') {
    slide(-1);
  }
  else if (e.key == 'Escape') {
    closeSlide();
  }
})

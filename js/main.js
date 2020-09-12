function scaleFullImages(pageWidth) {
  var toleranceWidth = Math.min(pageWidth-100,800);
  var fullImages = document.getElementsByClassName('fullImage');

  for (var i = 0; i < fullImages.length; i++) {
    var imgWidth = fullImages[i].getAttribute("width");
    var imgHeight = fullImages[i].getAttribute("height");
    console.log(fullImages[i]);
    console.log(fullImages[i]);
    if (imgWidth > toleranceWidth) {
      fullImages[i].style.height = Math.round(toleranceWidth * ( imgHeight / imgWidth)) + 'px';
      fullImages[i].style.width = Math.round(toleranceWidth) + 'px';
    }
  }
}

function onResize() {
  scaleFullImages(document.documentElement.clientWidth);
}

window.addEventListener("resize", onResize)
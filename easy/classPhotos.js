function classPhotos(redShirtHeights, blueShirtHeights) {

  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);

  let redIsBack = true;
  let blueIsBack = true;
  
  for (let i = 0; i < redShirtHeights.length; i++) {
    if(redShirtHeights[i] >= blueShirtHeights[i]) {
      blueIsBack = false;
    } 
    
    if (redShirtHeights[i] <= blueShirtHeights[i]) {
      redIsBack = false;
    }
  }

  return redIsBack || blueIsBack
}


console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
let getRandom = function(min, max) {
  if (max < min) {
    return "The number range is incorrect. getRandom(min, max), where min <= max";
  }
  return Math.round(Math.random() * (max-min) + min);
}
let checkLength = function(string, maxLength) {
  return string.length <= maxLength;
}
let getPhotos = function() {
  let photos = [];
  for (let i  = 0; i <= 24; i++) {
    photos[i] = {
      id:i+1,
      url: `photos/${i+1}.jpg`,
      description: `фото под номером ${i+1}`,
      likes: getRandom(15, 200),
      comments: getRandom(0, 200)
    };
  }
  return photos;
}
let photos = getPhotos();
for (let i  = 0; i < photos.length; i++) {
  console.table(photos[i]);
}


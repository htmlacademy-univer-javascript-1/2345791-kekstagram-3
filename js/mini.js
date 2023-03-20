const drawMinis = function(photos) {
  const template = document.querySelector('#picture').content;
  const picture = template.querySelector('.picture');
  const pictures = template.querySelector('.pictures');
  for (let i = 0; i < photos.length; i++) {
    const newPicture = picture.cloneNode(true);
    const image = newPicture.querySelector('.picture__img');
    const comments = newPicture.querySelector('.picture__comments');
    const likes = newPicture.querySelector('.picture__likes');
    image.src = photos[i].url;
    comments.textContent= photos[i].comments;
    likes.textContent= photos[i].likes;
    pictures.createDocumentFragment(newPicture);
  }
};
export {drawMinis};

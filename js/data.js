import { getRandom, checkLength} from "./util.js";
const getPhotos = function() {
  let photos = [];
  for (let i  = 0; i <= 24; i++) {
    photos.push({
      id:i+1,
      url: `photos/${i+1}.jpg`,
      description: `фото под номером ${i+1}`,
      likes: getRandom(15, 200),
      comments: getRandom(0, 200)
    });
  };
  return photos;
};
export {getPhotos};

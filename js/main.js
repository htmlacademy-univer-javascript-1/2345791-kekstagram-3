import { getPhotos } from './data.js';
import { drawMinis } from './mini.js';
import { bigPicture } from './bigPicture.js';
drawMinis(getPhotos());
bigPicture();

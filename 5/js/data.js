import {createPhotoId, getRandomInteger, getRandomArrayElement, createCommentId} from './util.js';

const DESCRIPTIONS = [
  'Прекрасный летний день',
  'Закат на берегу моря',
  'Отличная прогулка с друзьями',
  'Мой любимый кофе по утрам',
  'Вечер в кругу семьи'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Борис',
  'Виктория',
  'Григорий',
  'Дарья'
];


const generatePhotoId = createPhotoId(1,25);

const createUrl = (id) => {
  const photoUrl = `photos/${id.toString()}.jpg`;
  return photoUrl;
};

const createDescription = (descriptionsList) => {
  const randomIndex = Math.floor(Math.random()*descriptionsList.length);
  return descriptionsList[randomIndex];
};

const createNumberOfLikes = (min, max) => {
  const numberOfLikes = Math.floor(Math.random() * (max-min + 1)) + min;
  return numberOfLikes;
};

const generateDescription = createDescription(DESCRIPTIONS);

const generateNumberOfLikes = createNumberOfLikes(15, 200);

const createMessage = () => {
  const count = getRandomInteger(1, 2);
  const messageParts = [];
  for (let i = 0; i < count; i++){
    messageParts.push(getRandomArrayElement(MESSAGES));
  }
  return Array.from(new Set(messageParts)).join(' ');
};

const generateCommentId = createCommentId();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger (0, 30);
  for( let i = 0; i < commentsCount; i ++){
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: createUrl(photoId),
    description: generateDescription(),
    likes: generateNumberOfLikes(),
    comments: createComments()
  };
};

const createPhotos = () => {
  const photos = [];
  for (let i = 0; i < 2; i ++) {
    photos.push(createPhoto());
  }
  return photos;
};

export {createPhotos};

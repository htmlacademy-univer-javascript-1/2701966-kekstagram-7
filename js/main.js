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



const createId = (min, max) => {
  let lastInteger = min-1;
  return function () {
    lastInteger += 1;
    if (lastInteger <= max) {return lastInteger;}
  };
};

const generatePhotoId = createId(1,25);

const createUrl = (id) => {
  let photoUrl = 'photos/' + id.toString() + '.jpg';
  return photoUrl;
};

const createDescription = (descriptionsList) => {
  return function () {
    const randomIndex = Math.floor(Math.random()*descriptionsList.length);
    return descriptionsList[randomIndex];
  };
};

const generateDescription = createDescription(DESCRIPTIONS);

const createNumberOfLikes = (min, max) => {
  return function () {
    return Math.floor(Math.random() * (max-min + 1)) + min;
  };
};

const generateNumberOfLikes = createNumberOfLikes(15, 200);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createMessage = () => {
  const count = getRandomInteger(1, 2);
  const messageParts = [];
  for (let i = 0; i < count; i++){
    messageParts.push(getRandomArrayElement(MESSAGES));
  };
  return Array.from(new Set(messageParts)).join(' ');
};

const createIdGenerator = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId
  };
};

const generateCommentId = createIdGenerator();

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
  };
  return photos;
};

createPhotos();

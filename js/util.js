const createPhotoId = (min, max) => {
  let lastInteger = min-1;
  return function () {
    lastInteger += 1;
    if (lastInteger <= max) {return lastInteger;}
  };
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createCommentId = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
};

export {createPhotoId};
export {getRandomInteger};
export {getRandomArrayElement};
export {createCommentId};


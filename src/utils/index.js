export const generateRandomLettersArray = (ranges, length) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const generateRandomCode = (firstCharCode, lastCharCode) =>
    Math.floor(Math.random() * (lastCharCode - firstCharCode)) + firstCharCode;

  let randomLettersArray = [];

  for (let i = 0; i < length; i++) {
    const arrIndex = getRandomInt(ranges.length - 1);

    const charCode = generateRandomCode(
      ranges[arrIndex][0],
      ranges[arrIndex][1]
    );

    randomLettersArray.push({
      charCode,
      symbol: String.fromCharCode(charCode),
      status: null
    });
  }

  return randomLettersArray;
};

export const formatTime = s => {
  const minuts = Math.floor(s / 60);
  const seconds = s - minuts * 60;
  return `${minuts}:${seconds < 10 ? '0' + seconds : seconds}`;
};

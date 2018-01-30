export const generateRandomLettersArray = (firstCharCode, lastCharCode, length) => {
    let randomLettersArray = [];

    for (let i = 0; i < length; i++) {
        const charCode =
            Math.floor(Math.random() * (lastCharCode - firstCharCode)) +
            firstCharCode;
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
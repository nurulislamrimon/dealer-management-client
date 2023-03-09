
// use random number using millisecond
export const useRandomNumberUsingDate = (digit = 8) => {
    const millisecond = new Date().valueOf();
    const init = millisecond.toString().length - digit - 3;
    return millisecond.toString().substring(init, digit + init);
}

export const useFirstTwoLettersFromInput = () => {
    const getFirstChars = (inputString) => {

        const inputWords = inputString.split(" ");
        const firstChar = inputWords[0]?.charAt(0).toUpperCase() || "";
        const lastChar = inputWords[1]?.charAt(0).toUpperCase() || "";

        return firstChar + lastChar;
    }
    return getFirstChars;
}

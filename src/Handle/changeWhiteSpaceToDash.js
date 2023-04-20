export const changeWhiteSpaceToDash = (str) => {
    let myString = str.replace(/\s+/g, '-');
    return myString;
} 
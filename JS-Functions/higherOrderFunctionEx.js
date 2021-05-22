const firstUpperWord = function (str) {
    const [firstWord, ...otherWords] = str.split(' ');
    return [firstWord.toUpperCase(), ...otherWords].join(' ');
}

//transform - It's an Higher order function as passging function (fn) as an argument
const transform = function (str, fn) {
    console.log(fn(str));
}
inputStr = 'Javascript is awesome!'
transform(inputStr, firstUpperWord);
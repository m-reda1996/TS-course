"use strict";
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(23, 32));
console.log(compare(33, 32));
console.log(compare(23, 23));
let article = [12, "sadf", true];
const [id, title, published] = article;
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging('asdfasdfsdf'));
var levels;
(function (levels) {
    levels[levels["kids"] = 9] = "kids";
    levels[levels["easy"] = 12] = "easy";
    levels[levels["mudium"] = 15] = "mudium";
    levels[levels["hard"] = 20] = "hard";
})(levels || (levels = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`the level is ${lvl} and the number of sec is ${levels.easy}`);
}

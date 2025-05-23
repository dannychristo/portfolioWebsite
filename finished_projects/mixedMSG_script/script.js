//who, what, where
const who = ["Thor", "Ironman", "Hulk", "Black Widow", "Captain America", "Hawkeye"];
const what = ["will kiss", "will marry", "will unalive"];
const who2 = ["you", "your mom", "your brother", "your uncle"];
const where = ["at the Avengers Tower", "at home", "at Nara Park Bandung"];
const when = ["tonight", "tomorrow"];

const components = [who, what, who2, where, when];

const sentenceArr = [];
for (let i = 0; i<components.length; i++) {
    let sentenceIndex = Math.floor(Math.random() * components[i].length);
    sentenceArr.push(components[i][sentenceIndex]);
}

const sentence = sentenceArr.join(" ");
console.log(`${sentence}.`);
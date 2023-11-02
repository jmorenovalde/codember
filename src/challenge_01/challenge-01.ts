import { readFileSync } from "fs";

export const challenge01 = (text: string): string => {
  let result = '';
  const words = text.toLowerCase().split(' ');
  const wordSet: { [key: string]: number } = {};
  words.forEach((word) => {
    if (wordSet[word]) {
      wordSet[word] = wordSet[word] + 1;
    } else {
      wordSet[word] = 1;
    }
  });
  const wordsResult = Object.keys(wordSet)
  wordsResult.forEach((word) => {
    result += `${word}${wordSet[word]}`;
  });
  return result;
}

export const callChallenge01 = () => {
  const text = readFileSync('./data/message_01.txt', { encoding: 'utf8' });
  console.log('-----------------------------------------------------------------------');
  console.log('- CHALLENGE 01                                                        -');
  console.log('-----------------------------------------------------------------------');
  console.log(` Result:\n${challenge01(text)}`);
  console.log('-----------------------------------------------------------------------');
}
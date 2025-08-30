export function reverseWords(sentence : string): string{
    const words = sentence.split(" ");
    return words.reverse().join(" ")

}
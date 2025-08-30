export function reverse(sentence: string): string{
    const words= sentence.split(" ");
    return words.reverse().join(" ");

}

if (require.main === module){
    console.log(reverse("Test the function"));
}
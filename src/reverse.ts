function reverse(sentence: string): string{
    const sent = sentence.split(" ")
    return sent.reverse().join(" ")
}

if(require.main===module){
    console.log(reverse("Best Practices"))
}
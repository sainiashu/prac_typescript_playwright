export function reverse(input: string): string{
    const sent = input.split(" ")
    return sent.reverse().join(" ")
}

if(require.main===module){
    console.log(reverse("Best Practices"))
}
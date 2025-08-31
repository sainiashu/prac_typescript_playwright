function titleCase(str : string ): string{
    return str
        .toLowerCase()
        .split(" ")
        .map( word=> word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

if(require.main === module){
    console.log(titleCase("john smith"))
}
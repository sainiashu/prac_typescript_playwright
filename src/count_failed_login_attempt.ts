interface LoginAttempt{user: string; success: boolean;}

export function countFailures( attempts: LoginAttempt[]): Record<string,number>{

    const result: Record<string,number>={};
    for (const attempt of attempts){
        if(!attempt.success){
            result[attempt.user] = (result[attempt.user]||0) +1;
        }
    }
    return result

}

if(require.main === module){
    console.log(countFailures([
        {user:"Alice",success:false},
        {user:"Bob",success:true},
        {user:"Alice",success:false}
    ])); 
}
export function validateAPI(response: any): boolean{
    const requiredFields = ["id", "status", "data"] ;
    for (const field of requiredFields){
        if(!(field in response))
            return false;
    };

    return response.status==="success";
            
    }

    if (require.main===module){
        console.log(validateAPI({id:1,status:"success",data:{}}))
    }

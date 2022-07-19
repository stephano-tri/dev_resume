import client from "../client";

const fetch = async () => {
    const response = await client().post('/v1/databases/3ad1af6f143e43c4ade9636f4df38e66/query')
    if(response){
        return response
    }
    else{
        console.log('failed in fetch databases(post)')
    }
}

export default fetch

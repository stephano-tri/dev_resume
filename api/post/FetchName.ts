import client from "../client";

const fetchName = async (pageId : string) => {
    const response = await client().get(`/pages/${pageId}/properties/Name`)
    if(response){
        return response
    }
    else{
        console.log('failed in fetch page-name databases(post)')
    }
}

export default fetchName

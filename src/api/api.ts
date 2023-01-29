import  axios  from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

const http =  axios.create({
    baseURL: BASE
});

export const api = {
    getAlbumPhoto : async (endPoint: string)=>{
        try{
            const response = await http.get(endPoint);
            return response.data;   
        }catch(error){
            console.log(error)
        }
        return [];
    }
}
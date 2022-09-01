import axios from "axios";

export type Cat = {
    id: string;
    name: string;
    description: string;
    temperament: string,
    origin: string;
    image: string;
}

type GetCatsResponse = {
    data: Cat;
}

export const getCats: () => Promise<boolean | GetCatsResponse> = async () => {
    try {
        const { data } = await axios.get<GetCatsResponse>('https://api.thecatapi.com/v1/breeds', {
            headers: {
                Accept: 'application/json',
            }
        });
         return data;
    } catch (error) {
        return axios.isAxiosError(error) 
    }
}
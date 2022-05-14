import axios from 'axios';

export const fetcher: (url: string) => Promise<any> = (url: string) => axios.get(url).then((res) => res.data);

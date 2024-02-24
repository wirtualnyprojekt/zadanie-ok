import axios from 'axios';

export const app = axios.create({ 
    baseURL: "https://ddh-front-default-rtdb.europe-west1.firebasedatabase.app/" 
});

export default app;

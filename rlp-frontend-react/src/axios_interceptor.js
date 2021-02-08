import axios from 'axios';

const instance = axios.create({baseURL:"http://localhost:8080/"})


instance.interceptors.request.use(req => {

    if (!sessionStorage.getItem('user')) {
        window.location.href="/login"
        return Promise.reject("ERROR");
    }
    else {
        const tokenData= JSON.parse(sessionStorage.getItem('user'))
        const token= tokenData.data.jwttoken;
        req.headers.Authorization =  `Bearer ${token}`;
        return req
    }

   },error=>{
    return Promise.reject(error);
   }
  );

instance.interceptors.response.use(response=>response,
    error=>{
        if(error.response.status === 401) {
            window.location.href="/login"
        }
       return Promise.reject(error);}
    );

export default instance;  
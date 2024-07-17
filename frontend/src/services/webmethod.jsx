import axios from 'axios';
class webmethod{
    postapi(url,data){
        return axios.post(url,data);
    }
}

export default new webmethod();

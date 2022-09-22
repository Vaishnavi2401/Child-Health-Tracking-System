import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/userlist";

class UserService{

    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

    postUser(User){
        return axios.post(USER_API_BASE_URL, User);
    }

    getUserByID(UserId){
        return axios.get(`http://localhost:8080/api/v1/userlist/${UserId}`);
    }
}

export default new UserService();
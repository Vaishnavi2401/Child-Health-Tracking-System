import axios from "axios";

const CHILD_API_BASE_URL = "http://localhost:8080/api/v1/child";

class ChildService{

    getChild(){
        return axios.get(CHILD_API_BASE_URL);
    }
}

export default new ChildService();
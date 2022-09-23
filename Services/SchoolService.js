import axios from "axios";

const SCHOOL_API_BASE_URL = "http://localhost:8080/api/v1/school";

class SchoolService{

    getSchool(){
        return axios.get(SCHOOL_API_BASE_URL);
    }

    postSchool(School){
        return axios.post(SCHOOL_API_BASE_URL, School);
    }

    getSchoolByID(SchoolId){
        return axios.get(`http://localhost:8080/api/v1/schoollist/${SchoolId}`);
    }
}

export default new SchoolService();
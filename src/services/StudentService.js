import axios from "axios";

const STUDENT_BASE_REST_API_URL='http://localhost:8080/student/getAll';

const STUDENT_BASE_REST_API_URL1='http://localhost:8080/student/addt';

const  STUDENT_BASE_REST_API_URL2='http://localhost:8080/student/getStudent';

const  STUDENT_BASE_REST_API_URL3='http://localhost:8080/student/update';

const  STUDENT_BASE_REST_API_URL4='http://localhost:8080/student/delete';

class StudentService {

    getAll(){

               return axios.get(STUDENT_BASE_REST_API_URL)
}

       addStudent(student){
           return axios.post(STUDENT_BASE_REST_API_URL1, student)
       }

       findStudent(id){
           return axios.get(STUDENT_BASE_REST_API_URL2 + '/' + id)

       }

       updateStudent(student, id) {

        return axios.put(STUDENT_BASE_REST_API_URL3 + '/' +  id , student )
    }

    deleteStudent(id) {

        return axios.delete(STUDENT_BASE_REST_API_URL4 + '/' +  id  )
    }

}
export default new StudentService();

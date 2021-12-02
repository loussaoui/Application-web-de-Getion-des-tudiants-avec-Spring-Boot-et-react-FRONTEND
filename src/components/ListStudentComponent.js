import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'


const ListStudentComponent = () => {

    const [student, setStudent] = useState([])

    useEffect(() => {

        getAll();

    }, [])

const getAll = () => {
    StudentService.getAll().then( (Response) =>{

        setStudent(Response.data)
        console.log(Response.data);

      }).catch(error =>{
          console.log(error);

      })
}

const deleteStudent= (id) =>{
  StudentService.deleteStudent(id).then((Response ) =>{
    getAll(); 
  } ).catch(error=> {console.log(error)})
}
    return (
        <div className="container">
             <h2 className="text-center">List Students</h2>
             <Link  to="/add-student" className="btn btn-primary mb-2"> Add Student  </Link>
             <table className="table table-bordered table-striped">
             <thead>
             <th> Student Id</th>
             <th> Student First Name</th>
             <th> Student Last Name</th>
             <th> Student Email Id</th>
             <th> Actions</th>
             </thead>
             <tbody>
                 {
                     student.map(
                        studentt =>  
                       <tr key = {studentt.id}>
                        <td> {studentt.id} </td>
                        <td> {studentt.first_name} </td>
                        <td> {studentt.last_name} </td>
                        <td> {studentt.email_id} </td>
                        <td> 
                        <Link className="btn btn-info" to={"/edit_student/"+ studentt.id }> UpDate  </Link>

                        <button className="btn btn-danger " onClick={() => deleteStudent(studentt.id) } 
                        style={{marginLeft:"10px"}}> delete </button>  
                       </td>
                        </tr>
                       
                     )

                 }
             </tbody>
             </table>

        </div>
    )
}

export default ListStudentComponent

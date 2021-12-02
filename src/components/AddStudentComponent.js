 import React, {useState, useEffect} from 'react'
import StudentService from '../services/StudentService'
import {useNavigate} from 'react-router-dom'
import { Link , useParams} from 'react-router-dom'




const AddStudentComponent = () => {

    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const [email_id, setemail_id] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    function saveOrUpdatestudent(e) {
        e.preventDefault()

        const student = { first_name, last_name, email_id }

        if(id){
            StudentService.updateStudent(student,id).then((response) => {
                navigate('/student')
            }).catch(error => {
                console.log(error)
            })

        }else{
            StudentService.findStudent(student,id).then((response) =>{

                console.log(response.data)
    
                navigate('/student');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {

        StudentService.findStudent(id).then((response) =>{
            setfirst_name(response.data.first_name)
            setlast_name(response.data.last_name)
            setemail_id(response.data.email_id)
       
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }
    return (

        <div>
              <div className="container stl" >
                 <div className="row">
                     <div className="card col-md-6 offset-md-3 offset-md-3">
                     {
                           title()
                       }
                                 <div className="card-body">
                                       <form>
                                              <div className="form-group mb-2">
                                                    <label className="form-label"> First Name :</label>
                                                            <input type ="text "
                                                            placeholder="Entrer first name"
                                                                name="first_name" 
                                                                className="form-control" 
                                                                value={first_name}
                                                                onChange = {(e) => setfirst_name(e.target.value)}
                                                                />
                                                                
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label className="form-label"> last Name :</label>
                                                            <input type ="text "
                                                            placeholder="Entrer last name"
                                                                name="last_name" 
                                                                className="form-control" 
                                                                value={last_name}
                                                                onChange = {(e) => setlast_name(e.target.value)}
                                                                />
                                                                
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label className="form-label"> Email Id :</label>
                                                            <input type ="text "
                                                            placeholder="Entrer email id"
                                                                name="email_id" 
                                                                className="form-control" 
                                                                value={email_id}
                                                                onChange = {(e) => setemail_id(e.target.value)}
                                                                />
                                                                
                                                </div>
                                                <button className="btn btn-success" onClick={(e=> saveOrUpdatestudent(e))} > Submit</button>
                                                <Link to ="/student" className="btn btn-danger "> Cancel</Link> 
                                             </form>

                                                    </div>
              
              </div>
              
              </div>
              </div>
        </div>
    )
}

export default AddStudentComponent

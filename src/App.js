import './App.css';

import { BrowserRouter as Router, Route, Routes ,Link  } from 'react-router-dom';
import ListStudentComponent from './components/ListStudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddStudentComponent from './components/AddStudentComponent';


function App() {
  return (
    <div > 
      <Router> 
      <HeaderComponent />
      <div className="container">   
      <Routes>  
      <Route path='/' element={<ListStudentComponent />} />  
      <Route path='/student' element={<ListStudentComponent />} /> 

        <Route path='/add-student' element={<AddStudentComponent />} />  
        <Route path='/edit_student/:id' element={<AddStudentComponent />} />  
        </Routes>  

        </div >
       <FooterComponent />
       </Router> 
    </div> 
  );
}

export default App;

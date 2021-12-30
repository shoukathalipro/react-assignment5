import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import Contact from './Components/Contact';
import { StudentProvider } from './Components/StudentContext';
import AddStudent from './Components/AddStudent';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <StudentProvider>
          <Router>
            <Header/>

                <Routes>
                    <Route path="/" element={   <Navigate   to={"/home"}/>}/>
                    <Route path="/home" element={ <Home/> }/>
                    <Route path="/students" element={ <Students/> }/>
                    <Route path="/edit-student/:studentId" element={  <EditStudent/> }/>
                    <Route path="/add-student" element={ <AddStudent/> }/>
                    <Route path="/contact" element={ <Contact/> }/>
                </Routes>
        </Router>
    </StudentProvider>

  );
}

export default App;




// Command to install react-router-dom:
// npm i react-router-dom
// 
// Commands required to install modules for the usage of material ui table:
// npm install material-table --save
// npm install "@material-ui/core" --save
// 
// Additional Commands to prevent error and to use Text Field:
// npm install @mui/material @emotion/react @emotion/styled

import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { StudentContext } from "./StudentContext";
import  TextField  from '@mui/material/TextField';
import styles from '../AppStyles.module.css';



const EditStudent = () => {
    const { studentId } = useParams();

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Course, setCourse] = useState("");
    const [Batch, setBatch] = useState("");

    const [students, setStudents] = useContext(StudentContext);

    useEffect(  () => {
        students.forEach(   (student) => {
            if(student.Id === studentId) {
                setName(student.Name);
                setAge(student.Age);
                setCourse(student.Course);
                setBatch(student.Batch);
            }
        } );
    }, [studentId, students])

    const handleChange1 = (event) => {
        setName(event.target.value);
    }

    const handleChange2 = (event) => {
        setAge(event.target.value);
    }

    const handleChange3 = (event) => {
        setCourse(event.target.value);    
    }

    const handleChange4 = (event) => {
        setBatch(event.target.value);
    }

    const handleAddClick = () => {
        setStudents(    (prevState) => prevState.map( (student) => student.Id === studentId? 
        {
            Id: studentId,
            Name: Name,
            Age: Age,
            Course: Course,
            Batch: Batch
        } 
        : student)
        );
    }


    return(
        <div className={styles.text_Field_Container_Main}>
            <div className={styles.text_Field_Container_Sub}>
                <div>
                    <TextField required type="text" name="Name" id="outlined-helperText" label="Name" value={Name} onChange={handleChange1}/>
                </div>
                <div>
                    <TextField required type="number" name="Age" id="outlined-helperText" label="Age" value={Age} onChange={handleChange2}/>
                </div>
                <div>
                    <TextField required type="text" name="Course" id="outlined-helperText" label="Course" value={Course} onChange={handleChange3}/>
                </div>
                <div>
                    <TextField required type="text" name="Batch" id="outlined-helperText" label="Batch" value={Batch} onChange={handleChange4}/>
                </div>
                <div>
                    <NavLink to="/students" className={styles.students_Cancel_Btn}>Cancel</NavLink>
                    <NavLink to="/students" onClick={handleAddClick} className={styles.students_Add_Btn}>Update</NavLink>
                </div>
            </div>
        </div>
    )

}

export default EditStudent;


//         setStudents(    [...students, {  Name: Name, Age: Age, Course: Course, Batch: Batch, Id: new Date().getTime().toString()  }]  )

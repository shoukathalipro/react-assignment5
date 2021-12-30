import React, { createContext, useState } from 'react'


export const StudentContext = createContext();

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([
        {
            "Name" : "John",
            "Age" : "26",
            "Course" : "MERN",
            "Batch" : "October",
            "Id"    : "1"
          },
          {
            "Name" : "Doe",
            "Age" : "25",
            "Course" : "MERN",
            "Batch" : "November",
            "Id"    : "2"
          },
          {
            "Name" : "Biden",
            "Age" : "26",
            "Course" : "MERN",
            "Batch" : "September",
            "Id"    : "3"
          },
          {
            "Name" : "Barar",
            "Age" : "22",
            "Course" : "Christ",
            "Batch" : "September",
            "Id"    : "4"
          },
          {
            "Name" : "Elent",
            "Age" : "23",
            "Course" : "MERN",
            "Batch" : "October",
            "Id"    : "5"
          }
    ]);

    return(
        <StudentContext.Provider value={[students, setStudents]} >
            {props.children}
        </StudentContext.Provider>
    )
}


import React, { useState } from 'react';

function CoursePlanner() {
  const [courseData, setCourseData] = useState([]);
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');

  const onClickHandler = () => {
  
      setCourseData(prevData => [...prevData, { subject, hours }]);
      
      setSubject('');
      setHours('');
   
  };



  return (
    <>
      <h1 style={{ textAlign: "center" }}>Plan Your Course</h1>
      <div style={{ display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
        <input
          type='text'
          placeholder='Subject'
          className='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type='number'
          placeholder='Hours'
          className='hours'
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button
          style={{ color: "white", backgroundColor: "blue", borderRadius: "10%" }}
          onClick={onClickHandler}
        >
          Add
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        
        <ul >
          {courseData.map((course, index) => (
            <li key={index}>
              <p>Subject: {course.subject}
              
              </p>
              <p >Hours: {course.hours
              }
              <button style={{backgroundColor:"green"}} onClick={(()=>{
                
                 
              })}
              >+</button>
              <button style={{backgroundColor:"red"}}>-</button></p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CoursePlanner;

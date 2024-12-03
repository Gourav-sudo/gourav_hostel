// import React from 'react'

// export const Adminattendance = () => {
//   return (
//     <div>Adminattendance</div>
//   )
// }




import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const markAttendance = async () => {
    try {
      await axios.post("http://localhost:5000/api/attendence/mark", { studentId, date, status });
      alert("Attendance marked");
      fetchAttendance();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAttendance = async () => {
    const res = await axios.get(`http://localhost:5000/api/attendence/${studentId}`);
    setAttendance(res.data);
  };

  useEffect(() => {
    fetchAttendance();
  }, [studentId]);

  return (
    <div>
      <h2>Attendance</h2>
      <label>
        Student ID:
        <input value={studentId} onChange={(e) => setStudentId(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Status:
        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </label>
      <button onClick={markAttendance}>Mark Attendance</button>
      <ul>
        {attendance.map((record) => (
          <li key={record.id}>
            {record.date}: {record.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAttendance;

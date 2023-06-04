/*import React, { useState, useEffect } from "react";
import axios from "axios";
//import "./fee-reminders.css"; // Import the CSS file

function FeeReminders() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const getFeeReminders = () => {
    const filteredStudents = students.filter((student) => {
      const semester = parseInt(student.semester);
      const firstYearFees = student.firstYearFees && student.firstYearFees.toLowerCase();
      const secondYearFees = student.secondYearFees && student.secondYearFees.toLowerCase();
      const thirdYearFees = student.thirdYearFees && student.thirdYearFees.toLowerCase();
      const fourthYearFees = student.fourthYearFees && student.fourthYearFees.toLowerCase();

      if ((semester === 1 || semester === 2) && firstYearFees === "not paid") {
        return true;
      }

      if ((semester === 3 || semester === 4) && secondYearFees === "not paid") {
        return true;
      }

      if ((semester === 5 || semester === 6) && thirdYearFees === "not paid") {
        return true;
      }

      if ((semester === 7 || semester === 8) && fourthYearFees === "not paid") {
        return true;
      }

      return false;
    });

    return filteredStudents;
  };

  const feeReminders = getFeeReminders();

  return (
    <div className="table-layout">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Caste</th>
            <th>Category</th>
            <th>Plus Two Mark Percentage</th>
            <th>Tenth Mark Percentage</th>
            <th>First Year Fees</th>
            <th>Second Year Fees</th>
            <th>Third Year Fees</th>
            <th>Fourth Year Fees</th>
          </tr>
        </thead>
        <tbody>
          {feeReminders.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.registerNumber}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td>{student.semester}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.religion}</td>
              <td>{student.caste}</td>
              <td>{student.category}</td>
              <td>{student.plusTwoPercentage}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.firstYearFees}</td>
              <td>{student.secondYearFees}</td>
              <td>{student.thirdYearFees}</td>
              <td>{student.fourthYearFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeReminders;*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeeReminders.css"; // Import the CSS file

function FeeReminders() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const filteredStudents = students.length > 0 ? students.filter((student) => {
    const semester = parseInt(student.semester);
    const firstYearFeesPaid = student.firstYearFees === "paid";
    const secondYearFeesPaid = student.secondYearFees === "paid";
    const thirdYearFeesPaid = student.thirdYearFees === "paid";
    const fourthYearFeesPaid = student.fourthYearFees === "paid";

    if (
      ((semester === 1 || semester === 2) &&
      !firstYearFeesPaid) ||((semester === 3 || semester === 4) &&
      !secondYearFeesPaid) ||((semester === 5 || semester === 6) &&
      thirdYearFeesPaid) ||((semester === 7 || semester === 8) &&
      !fourthYearFeesPaid)
    ) {
      return true;
    }


    return false;
  }) : [];

  return (
    <div className="table-layout">
      <h2>Fee Reminders</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Caste</th>
            <th>Category</th>
            <th>Plus Two Mark Percentage</th>
            <th>Tenth Mark Percentage</th>
            <th>First Year Fees</th>
            <th>Second Year Fees</th>
            <th>Third Year Fees</th>
            <th>Fourth Year Fees</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.registerNumber}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td>{student.semester}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.religion}</td>
              <td>{student.caste}</td>
              <td>{student.category}</td>
              <td>{student.plusTwoPercentage}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.firstYearFees}</td>
              <td>{student.secondYearFees}</td>
              <td>{student.thirdYearFees}</td>
              <td>{student.fourthYearFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeReminders;
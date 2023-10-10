import * as React from "react";
import { Link } from "react-router-dom";

export default function EmployeeList() {
  const getEmployees = () => {
    // const employees = JSON.parse(localStorage.getItem("employees"));

    return "Bonjour";

    // {
    //   data: employees,
    //   columns: [
    //     { title: "First Name", data: "firstName" },
    //     { title: "Last Name", data: "lastName" },
    //     { title: "Start Date", data: "startDate" },
    //     { title: "Department", data: "department" },
    //     { title: "Date of Birth", data: "dateOfBirth" },
    //     { title: "Street", data: "street" },
    //     { title: "City", data: "city" },
    //     { title: "State", data: "state" },
    //     { title: "Zip Code", data: "zipCode" },
    //   ],
    // };
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      {getEmployees()}
      <Link to="/">Home</Link>
    </div>
  );
}

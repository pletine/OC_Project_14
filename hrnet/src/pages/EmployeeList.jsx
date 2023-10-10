import "./employeeList.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function EmployeeList() {
  const employees = JSON.parse(localStorage.getItem("employees"));

  if (employees === null) {
    return (
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <p>No employees to display</p>
        <Link to="/">Home</Link>
      </div>
    );
  } else {
    return (
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>

        <button
          onClick={() => {
            localStorage.clear("employees");
          }}
        >
          Effacer les données
        </button>

        <DataTable dataInput={employees} />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

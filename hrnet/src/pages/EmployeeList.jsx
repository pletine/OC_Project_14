import "./employeeList.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../store.js";
import { useState } from "react";

export default function EmployeeList() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [employeesState, setEmployeesState] = useState(employees);

  if (employeesState === null || employeesState.length === 0) {
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
            dispatch(deleteAll());
            setEmployeesState(null);
          }}
        >
          Effacer les données
        </button>

        <DataTable dataInput={employeesState} />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

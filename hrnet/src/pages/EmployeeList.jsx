import "./employeeList.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import DataTable from "../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "../store.js";
import { useState } from "react";

/**
 * List of employees page
 * Use DataTable element to print the list of employees and their data
 * Get data from the Redux store
 * @returns {JSX.Element}
 */
export default function EmployeeList() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  const [employeesState, setEmployeesState] = useState(employees);

  const title = <h1>Current Employees</h1>;
  const linkHome = <Link to="/">Home</Link>;
  let content = null;

  if (employeesState === null || employeesState.length === 0) {
    content = <p>No employees to display</p>;
  } else {
    content = (
      <>
        <button
          onClick={() => {
            dispatch(deleteAll());
            setEmployeesState(null);
          }}
        >
          Effacer les données
        </button>
        <DataTable dataInput={employeesState} />
      </>
    );
  }

  return (
    <div id="employee-div" className="container">
      {title}
      {content}
      {linkHome}
    </div>
  );
}

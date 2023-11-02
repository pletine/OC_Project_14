import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import "./dataTable.scss";

/**
 * Create the DataTable element view with the data in parameter
 * @param {Object} dataInput - contains the employee data (firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode)
 * @returns {JSX.Element}
 */
export default function DataTable({ dataInput }) {
  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
        size: 50,
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
        size: 50,
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        size: 50,
      },
      {
        header: "Department",
        accessorKey: "department",
        size: 50,
      },
      {
        header: "Date of Birth",
        accessorKey: "dateOfBirth",
        size: 50,
      },
      {
        header: "Street",
        accessorKey: "street",
        size: 50,
      },
      {
        header: "City",
        accessorKey: "city",
        size: 50,
      },
      {
        header: "State",
        accessorKey: "state",
        size: 50,
      },
      {
        header: "Zip Code",
        accessorKey: "zipCode",
        size: 50,
      },
    ],
    []
  );

  return (
    <div id="employee-table" className="display">
      <MaterialReactTable
        columns={columns}
        data={dataInput}
        enableColumnActions={false}
        enableColumnFilters={false}
      />
    </div>
  );
}

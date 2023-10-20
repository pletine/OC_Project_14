import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import "./dataTable.scss";

export default function DataTable({ dataInput }) {
  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
        size: 200,
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
        size: 200,
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        size: 200,
      },
      {
        header: "Department",
        accessorKey: "department",
        size: 200,
      },
      {
        header: "Date of Birth",
        accessorKey: "dateOfBirth",
        size: 200,
      },
      {
        header: "Street",
        accessorKey: "street",
        size: 200,
      },
      {
        header: "City",
        accessorKey: "city",
        size: 200,
      },
      {
        header: "State",
        accessorKey: "state",
        size: 200,
      },
      {
        header: "Zip Code",
        accessorKey: "zipCode",
        size: 200,
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

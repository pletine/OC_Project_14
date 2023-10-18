import "./dataTable.scss";
import { useMemo } from "react";
import {
  useFilters,
  useSortBy,
  useTable,
  usePagination,
  useGlobalFilter,
} from "react-table";

export default function DataTable({ dataInput }) {
  const data = useMemo(() => dataInput, [dataInput]);
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "dateOfBirth",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const pageCount = page.length; // state.pageCount; // Obtenez pageCount depuis l'état
  const onChangePageSize = (e) => {
    setPageSize(Number(e.target.value));
  };

  const goToPage = (pageIndex) => {
    // Utilisez setPage pour aller à la page souhaitée
    setGlobalFilter("");
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      goToPage(pageIndex - 1);
    }
  };

  const nextPage = () => {
    if (pageIndex < pageCount - 1) {
      goToPage(pageIndex + 1);
    }
  };

  return (
    <div id="employee-table" className="display">
      <input
        type="text"
        placeholder="Recherche"
        // onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => previousPage()} disabled={pageIndex === 0}>
          Précedent
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} / {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={pageIndex >= pageCount - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

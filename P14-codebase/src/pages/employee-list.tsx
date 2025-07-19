import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectEmployees } from "../store/selectors/employeeSelectors";
import { useEffect } from "react";
import { loadEmployeesFromStorage } from "../store/slices/employeeSlice";
import { NavLink } from "react-router";

const EmployeeList = () => {
  const employees = useAppSelector(selectEmployees);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(loadEmployeesFromStorage());
    }
  }, [dispatch, employees.length]);
  const columns: GridColDef[] = [
    { field: "firstName", headerName: "First Name" },
    { field: "lastName", headerName: "Last Name" },
    { field: "department", headerName: "Department" },
    { field: "startDate", headerName: "Start Date" },
    { field: "dateofbirth", headerName: "Date of Birth" },
    { field: "street", headerName: "Street" },
    { field: "city", headerName: "City" },
    { field: "state", headerName: "State" },
    { field: "zipCode", headerName: "Zip Code" },
  ];

  const rows: GridRowsProp = employees.map((employee) => ({
    id: Math.random().toString(36),
    firstName: employee.firstName,
    lastName: employee.lastName,
    startDate: employee.startDate,
    department: employee.department,
    dateofbirth: employee.dateOfBirth,
    street: employee.street,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
  }));

  return (
    <main className="container">
      <div className="title">
        <h1>Current Employees</h1>
      </div>
      <DataGrid
        pageSizeOptions={[5, 10, 20]}
        rows={rows}
        columns={columns}
        className="data-grid"
      />
      <NavLink to={"/"}>Home</NavLink>
    </main>
  );
};

export default EmployeeList;

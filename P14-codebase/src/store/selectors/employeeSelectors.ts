import type { RootState } from "../store";
import type { Employee } from "../types/employee.types";

export const selectEmployees = (state: RootState): Employee[] =>
  state.employees.employees;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Employee, EmployeeState } from "../types/employee.types";

export const loadEmployeesFromStorage = createAsyncThunk(
  "employees/loadFromStorage",
  async (_, { rejectWithValue }) => {
    try {
      const stored = localStorage.getItem("employees");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return rejectWithValue(
        `Failed to load employees from localStorage: ${error}`
      );
    }
  }
);

export const addEmployeeToStorage = createAsyncThunk(
  "employees/addToStorage",
  async (employee: Employee, { getState, rejectWithValue }) => {
    try {
      const newEmployee: Employee = {
        ...employee,
      };

      const state = getState() as { employees: EmployeeState };
      const updatedEmployees = [...state.employees.employees, newEmployee];

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return newEmployee;
    } catch (error) {
      return rejectWithValue(
        `Failed to add employee to localStorage: ${error}`
      );
    }
  }
);

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEmployeesFromStorage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadEmployeesFromStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(loadEmployeesFromStorage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(addEmployeeToStorage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployeeToStorage.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload);
      })
      .addCase(addEmployeeToStorage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = employeeSlice.actions;
export default employeeSlice.reducer;

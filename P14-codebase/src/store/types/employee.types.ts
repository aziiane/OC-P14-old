export interface Employee {
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  startDate: string | null;
  street: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  department: string | null;
}

export interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

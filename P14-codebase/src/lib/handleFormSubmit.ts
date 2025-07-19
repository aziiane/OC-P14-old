import type { AppDispatch } from "../store/store";
import { addEmployeeToStorage } from "../store/slices/employeeSlice";
import type { Employee } from "../store/types/employee.types";

export async function handleSubmit(
  formData: FormData,
  onOpenModal: () => void,
  dispatch: AppDispatch
) {
  const employeeData: Omit<Employee, "id"> = {
    firstName: formData.get("first-name") as string,
    lastName: formData.get("last-name") as string,
    dateOfBirth: formData.get("date-of-birth") as string,
    startDate: formData.get("start-date") as string,
    street: formData.get("street") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zipCode: formData.get("zip-code") as string,
    department: formData.get("department") as string,
  };

  try {
    console.log("employeeData", employeeData);
    await dispatch(addEmployeeToStorage(employeeData)).unwrap();
    onOpenModal();
  } catch (error) {
    console.log("error", error);
  }
}

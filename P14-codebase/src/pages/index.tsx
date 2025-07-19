import inputStyles from "../styles/input.module.css";
import buttonStyles from "../styles/button.module.css";
import datePickerStyles from "../styles/datepicker.module.css";
import { NavLink } from "react-router";
import { handleSubmit } from "../lib/handleFormSubmit";
import { DatePicker } from "@mui/x-date-pickers";
import { Input } from "@base-ui-components/react/input";
import Selector from "../components/select";
import { departments, states } from "../constants/constants";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { loadEmployeesFromStorage } from "../store/slices/employeeSlice";
import { Modal, useModalStates } from "my-react-modal-oc-p14";

const Index = () => {
  const { isOpen, onClose, onOpen } = useModalStates();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadEmployeesFromStorage());
  }, [dispatch]);
  return (
    <main className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <NavLink to="/employee-list">View Current Employees</NavLink>
      <h2>Create Employee</h2>
      <form
        action={(formData) => handleSubmit(formData, onOpen, dispatch)}
        id="create-employee"
        className="create-employee"
      >
        <div className="formInput">
          <label htmlFor="first-name">First Name</label>
          <Input
            className={inputStyles.Input}
            name="first-name"
            id="first-name"
          />
        </div>
        <div className="formInput">
          <label htmlFor="last-name">Last Name</label>
          <Input
            className={inputStyles.Input}
            name="last-name"
            id="last-name"
          />
        </div>
        <div className="formInput">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            name="date-of-birth"
            className={datePickerStyles.DatePicker}
          />
        </div>
        <div className="formInput">
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            name="start-date"
            className={datePickerStyles.DatePicker}
          />
        </div>
        <fieldset className="input-full-width">
          <legend>Address</legend>
          <div className="formInput">
            <label htmlFor="street">Street</label>
            <Input
              className={inputStyles.Input}
              id="street"
              type="text"
              name="street"
            />
          </div>
          <div className="formInput">
            <label htmlFor="city">City</label>
            <Input
              className={inputStyles.Input}
              id="city"
              type="text"
              name="city"
            />
          </div>
          <div className="formInput">
            <label htmlFor="state">State</label>
            <Selector content={states} name="state" />
          </div>
          <div className="formInput">
            <label htmlFor="zip-code">Zip Code</label>
            <Input
              className={inputStyles.Input}
              id="zip-code"
              type="number"
              name="zip-code"
            />
          </div>
        </fieldset>
        <div className="formInput input-full-width">
          <label htmlFor="department">Department</label>
          <Selector content={departments} name="department" />
        </div>
        <button
          type="submit"
          className={`${buttonStyles.Button} input-full-width`}
        >
          Save
        </button>
      </form>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Confirmation"
        size="md"
        showCloseButton
      >
        <p>Employee created successfully!</p>
      </Modal>
    </main>
  );
};

export default Index;

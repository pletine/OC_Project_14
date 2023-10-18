import "./home.scss";
import { Link } from "react-router-dom";
import { useState, useId } from "react";
import Modal from "pierreletine-modal";
import { useDispatch } from "react-redux";
import { addUser } from "../store.js";
import formValidation from "../scripts/formValidation.js";

export default function Home() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const firstName = useId();
  const lastName = useId();
  const dateOfBirth = useId();
  const startDate = useId();
  const department = useId();
  const street = useId();
  const city = useId();
  const state = useId();
  const zipCode = useId();

  const saveEmployee = () => {
    const firstNameElement = document.getElementById(firstName);
    const lastNameElement = document.getElementById(lastName);
    const dateOfBirthElement = document.getElementById(dateOfBirth);
    const startDateElement = document.getElementById(startDate);
    const departmentElement = document.getElementById(department);
    const streetElement = document.getElementById(street);
    const cityElement = document.getElementById(city);
    const stateElement = document.getElementById(state);
    const zipCodeElement = document.getElementById(zipCode);

    let { valid, employee } = formValidation({
      firstNameElement,
      lastNameElement,
      dateOfBirthElement,
      startDateElement,
      departmentElement,
      streetElement,
      cityElement,
      stateElement,
      zipCodeElement,
    });

    if (valid) {
      dispatch(addUser(employee));
      setModal(true);
    }
  };

  return (
    <div className="home">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor={firstName}>First Name</label>
          <input type="text" id={firstName} />

          <label htmlFor={lastName}>Last Name</label>
          <input type="text" id={lastName} />

          <label htmlFor={dateOfBirth}>Date of Birth</label>
          <input id={dateOfBirth} type="date" name="last-name" />

          <label htmlFor={startDate}>Start Date</label>
          <input id={startDate} type="date" name="start-date" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor={street}>Street</label>
            <input id={street} type="text" />

            <label htmlFor={city}>City</label>
            <input id={city} type="text" />

            <label htmlFor={state}>State</label>
            <select name="state" id={state}>
              <option value="">-- Select State --</option>
              <option value="AL">Alabama (AL)</option>
              <option value="AK">Alaska (AK)</option>
              <option value="AZ">Arizona (AZ)</option>
              <option value="AR">Arkansas (AR)</option>
              <option value="CA">California (CA)</option>
              <option value="CO">Colorado (CO)</option>
              <option value="CT">Connecticut (CT)</option>
              <option value="DE">Delaware (DE)</option>
              <option value="DC">District Of Columbia (DC)</option>
              <option value="FL">Florida (FL)</option>
              <option value="GA">Georgia (GA)</option>
              <option value="HI">Hawaii (HI)</option>
              <option value="ID">Idaho (ID)</option>
              <option value="IL">Illinois (IL)</option>
              <option value="IN">Indiana (IN)</option>
              <option value="IA">Iowa (IA)</option>
              <option value="KS">Kansas (KS)</option>
              <option value="KY">Kentucky (KY)</option>
              <option value="LA">Louisiana (LA)</option>
              <option value="ME">Maine (ME)</option>
              <option value="MD">Maryland (MD)</option>
              <option value="MA">Massachusetts (MA)</option>
              <option value="MI">Michigan (MI)</option>
              <option value="MN">Minnesota (MN)</option>
              <option value="MS">Mississippi (MS)</option>
              <option value="MO">Missouri (MO)</option>
              <option value="MT">Montana (MT)</option>
              <option value="NE">Nebraska (NE)</option>
              <option value="NV">Nevada (NV)</option>
              <option value="NH">New Hampshire (NH)</option>
              <option value="NJ">New Jersey (NJ)</option>
              <option value="NM">New Mexico (NM)</option>
              <option value="NY">New York (NY)</option>
              <option value="NC">North Carolina (NC)</option>
              <option value="ND">North Dakota (ND)</option>
              <option value="OH">Ohio (OH)</option>
              <option value="OK">Oklahoma (OK)</option>
              <option value="OR">Oregon (OR)</option>
              <option value="PA">Pennsylvania (PA)</option>
              <option value="RI">Rhode Island (RI)</option>
              <option value="SC">South Carolina (SC)</option>
              <option value="SD">South Dakota (SD)</option>
              <option value="TN">Tennessee (TN)</option>
              <option value="TX">Texas (TX)</option>
              <option value="UT">Utah (UT)</option>
              <option value="VT">Vermont (VT)</option>
              <option value="VA">Virginia (VA)</option>
              <option value="WA">Washington (WA)</option>
              <option value="WV">West Virginia (WV)</option>
              <option value="WI">Wisconsin (WI)</option>
              <option value="WY">Wyoming (WY)</option>
            </select>

            <label htmlFor={zipCode}>Zip Code</label>
            <input id={zipCode} type="number" />
          </fieldset>

          <label htmlFor={department}>Department</label>
          <select name="department" id={department}>
            <option value="">-- Select Working Department --</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>

      <Modal onClose={() => setModal(false)} show={modal}>
        <h2>Inscription succeeded !</h2>
        <p>Employee Created!</p>
      </Modal>
    </div>
  );
}

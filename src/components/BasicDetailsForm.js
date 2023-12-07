import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFormCompletion } from "../redux/action";

const BasicDetailsForm = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const isFormValid = formData.name !== '' && formData.email !== '' ;

    if (isFormValid) {
      // Dispatch action to update Redux store with validated form data
      // dispatch(updateFormData({ basicDetails: formData }));

      // Dispatch action to update form completion status
      dispatch(updateFormCompletion('basicDetails', true));
      alert("This Section Submitted Go To Document Collection");
    } else {
      // Handle errors or display error messages
      setErrors({ message: 'Please fill in all required fields.' });
    }
  };

  return (
    <div className="m-20">
      <div className="mb-5">
        <h2 className="m-0">Preview</h2>
        <p className="m-0 p-0">
          You will be able to customize the fields in the later stage
        </p>
      </div>
      <div className="bg-white">
        <div className="text-3xl bg-sky-200">
          <div className="m-5 p-2">
            <h3 className="m-0">Name of the Enquiry Form</h3>
            <div className="m-0 p-0 text-gray-500 font-semibold">
              One line description of the form
            </div>
            <p className="text-gray-500">
              Provide the following information to process your application
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-10 p-5">
          <div className="mb-4">
            <label>1. Name*</label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>2. Email*</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your valid email id"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>

          <div className="mb-4">
            <label>4. Date of Birth</label>
            <br />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="Date of Birth"
              
              className="border border-gray-300 rounded-md p-2 "
            />
          </div>
          <div className="mb-4">
            <label>3. Mobile Number</label>
            <br />
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasicDetailsForm;

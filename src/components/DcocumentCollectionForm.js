import React, { useState } from "react";

const DocumentCollectionForm = () => {
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
            <label>1. 10th Marksheet*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>1. 12th Marksheet*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>

          <div className="mb-4">
            <label>1. Graduation Marksheet*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>4. Post Graduation Marksheet*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>5. Offer Letters*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>6. Salary Slips*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>7. Bank Statement*</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>8. Increment Letter(if any)</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          <div className="mb-4">
            <label>9. Others(if any)</label>
            <br />
            <input
              type="file"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              accept=".pdf"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>
          {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default DocumentCollectionForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFormCompletion } from "../redux/action";

const DocumentCollectionForm = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    marksheet10: null,
    marksheet12: null,
    graduationMarksheet: null,
    postGraduationMarksheet: null,
    offerLetters: null,
    salarySlips: null,
    bankStatement: null,
    incrementLetter: null,
    others: null,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Assuming you only want to store one file per input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    const requiredFields = [
      'marksheet10',
      'marksheet12',
      'graduationMarksheet',
      'postGraduationMarksheet',
      'offerLetters',
      'salarySlips',
      'bankStatement',
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        isError = true;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "This field is required.",
        }));
      }
    });

    if (!isError) {
      // All required fields are filled, proceed with form submission
      // Handle form submission logic here
      alert("Form submitted!  Go to Statement Of Purpose");
      dispatch(updateFormCompletion('documentCollection', true));
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
            <label>1. 10th Marksheet*</label>
            <br />
            <input
              type="file"
              name="marksheet10"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.marksheet10 && (
              <p className="text-red-500">{errors.marksheet10}</p>
            )}
          </div>

          <div className="mb-4">
            <label>2. 12th Marksheet*</label>
            <br />
            <input
              type="file"
              name="marksheet12"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.marksheet12 && (
              <p className="text-red-500">{errors.marksheet12}</p>
            )}
          </div>

          <div className="mb-4">
            <label>3. Graduation Marksheet*</label>
            <br />
            <input
              type="file"
              name="graduationMarksheet"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.graduationMarksheet && (
              <p className="text-red-500">{errors.graduationMarksheet}</p>
            )}
          </div>

          <div className="mb-4">
            <label>4. Post Graduation Marksheet*</label>
            <br />
            <input
              type="file"
              name="postGraduationMarksheet"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.postGraduationMarksheet && (
              <p className="text-red-500">{errors.postGraduationMarksheet}</p>
            )}
          </div>

          <div className="mb-4">
            <label>5. Offer Letters*</label>
            <br />
            <input
              type="file"
              name="offerLetters"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.offerLetters && (
              <p className="text-red-500">{errors.offerLetters}</p>
            )}
          </div>

          <div className="mb-4">
            <label>6. Salary Slips*</label>
            <br />
            <input
              type="file"
              name="salarySlips"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.salarySlips && (
              <p className="text-red-500">{errors.salarySlips}</p>
            )}
          </div>

          <div className="mb-4">
            <label>7. Bank Statement*</label>
            <br />
            <input
              type="file"
              name="bankStatement"
              onChange={handleInputChange}
              accept=".pdf"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.bankStatement && (
              <p className="text-red-500">{errors.bankStatement}</p>
            )}
          </div>

          <div className="mb-4">
            <label>8. Increment Letter (if any)</label>
            <br />
            <input
              type="file"
              name="incrementLetter"
              onChange={handleInputChange}
              accept=".pdf"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>

          <div className="mb-4">
            <label>9. Others (if any)</label>
            <br />
            <input
              type="file"
              name="others"
              onChange={handleInputChange}
              accept=".pdf"
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentCollectionForm;

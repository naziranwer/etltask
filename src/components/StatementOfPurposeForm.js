import React, { useState } from "react";
import { updateFormCompletion } from "../redux/action";
import { useDispatch } from "react-redux";

const StatementOfPurposeForm = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [errors, setErrors] = useState({});

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    const requiredFields = ['question1', 'question2', 'question3'];

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
      alert("Form submitted! Go to Interview Availability");
      dispatch(updateFormCompletion('statementOfPurpose', true));
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
            <label>
              1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?
            </label>
            <br />
            <textarea
              name="question1"
              value={formData.question1}
              onChange={handleTextareaChange}
              placeholder="Enter a description for the long answer"
              required
              maxLength={300}
              className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            />
            {errors.question1 && (
              <p className="text-red-500">{errors.question1}</p>
            )}
            <div className="text-right text-gray-500">
              {formData.question1.length}/300 words
            </div>
          </div>

          <div className="mb-4">
            <label>
              2. Tell me about the last time something significant didn't go according to plan at work. What was your role? What was the outcome?
            </label>
            <br />
            <textarea
              name="question2"
              value={formData.question2}
              onChange={handleTextareaChange}
              placeholder="Enter a description for the long answer"
              required
              maxLength={300}
              className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            />
            {errors.question2 && (
              <p className="text-red-500">{errors.question2}</p>
            )}
            <div className="text-right text-gray-500">
              {formData.question2.length}/300 words
            </div>
          </div>

          <div className="mb-4">
            <label>
              3. What are the three things that are most important to you in a job?
            </label>
            <br />
            <textarea
              name="question3"
              value={formData.question3}
              onChange={handleTextareaChange}
              placeholder="Enter a description for the long answer"
              required
              maxLength={300}
              className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            />
            {errors.question3 && (
              <p className="text-red-500">{errors.question3}</p>
            )}
            <div className="text-right text-gray-500">
              {formData.question3.length}/300 words
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StatementOfPurposeForm;

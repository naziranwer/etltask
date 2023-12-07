import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  // Get form completion status from Redux store
  const formCompletion = useSelector(
    (state) => state.form.formCompletion || {}
  );

  // Check if all forms are completed
  console.log(formCompletion, "formstatus");
  const allFormsCompleted = Object.values(formCompletion).every(
    (completed) => completed
  );
  console.log("alll form status", allFormsCompleted);

  const handleNextButtonClick = () => {
    if (allFormsCompleted) {
      // Perform action on Next button click when all forms are completed
      alert("Form submitted!");
    } else {
      alert("Please complete all forms before proceeding.");
    }
  };

  return (
    <div className="bg-white p-4 flex justify-end shadow">
      <div className="shadow-md" style={{ marginTop: "-4px" }}>
        <button
          onClick={handleNextButtonClick}
          // disabled={!allFormsCompleted}
          className={`bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md 
          
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;

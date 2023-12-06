import React, { useState } from "react";
import BasicDetailsForm from "./components/BasicDetailsForm";
import DocumentCollectionForm from "./components/DcocumentCollectionForm";
import StatementOfPurposeForm from "./components/StatementOfPurposeForm";
import InterviewAvailabilityForm from "./components/InterviewAvailabilityForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [selectedForm, setSelectedForm] = useState("basicDetails");

  const handleFormSelection = (formName) => {
    // Set the selected form based on the clicked card
    setSelectedForm(formName);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/4 p-4">
          <h1 className="text-3xl text-center">New Form</h1>

          <div
            className={` rounded-lg shadow-lg p-4 mb-4 cursor-pointer ${
              selectedForm === "basicDetails" ? "bg-sky-200" : "bg-gray-200"
            }`}
            onClick={() => handleFormSelection("basicDetails")}
          >
            <h2 className="font-semibold">Basic Details</h2>
            <p className="text-gray-600">Enter your basic information here.</p>
          </div>
          <div
            className={` rounded-lg shadow-lg p-4 mb-4 cursor-pointer ${
              selectedForm === "documentCollection"
                ? "bg-sky-200"
                : "bg-gray-200"
            }`}
            onClick={() => handleFormSelection("documentCollection")}
          >
            <h2 className="text-2xl font-semibold">Document Collection</h2>
            <p className="text-gray-600">Upload your academic documents.</p>
          </div>
          <div
            className={` rounded-lg shadow-lg p-4 mb-4 cursor-pointer ${
              selectedForm === "statementOfPurpose"
                ? "bg-sky-200"
                : "bg-gray-200"
            }`}
            onClick={() => handleFormSelection("statementOfPurpose")}
          >
            <h2 className="text-2xl font-semibold">Statement of Purpose</h2>
            <p className="text-gray-600">
              Answer some questions about your experiences.
            </p>
          </div>
          <div
            className={`rounded-lg shadow-lg p-4 mb-4 cursor-pointer ${
              selectedForm === "interviewAvailability"
                ? "bg-sky-200"
                : "bg-gray-200"
            }`}
            onClick={() => handleFormSelection("interviewAvailability")}
          >
            <h2 className="text-2xl font-semibold">Interview Availability</h2>
            <p className="text-gray-600">Provide your interview schedule.</p>
          </div>
        </div>
        <div className="w-3/4 p-4 rightsection">
          {/* Right side content displaying forms */}
          {selectedForm === "basicDetails" && <BasicDetailsForm />}
          {selectedForm === "documentCollection" && <DocumentCollectionForm />}
          {selectedForm === "statementOfPurpose" && <StatementOfPurposeForm />}
          {selectedForm === "interviewAvailability" && (
            <InterviewAvailabilityForm />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

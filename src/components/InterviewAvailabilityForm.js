// import React, { useState, useEffect } from "react";

// const InterviewAvailabilityForm = () => {
//   const [formData, setFormData] = useState({
//     location: "",
//     email: "",
//     selectedTime: "",
//     dateOfInterview: "",
//     selectedTimeZone: [],
//     selectedInterviewMedium: "",
//   });
//   const [errors, setErrors] = useState({});

//   var aryIanaTimeZones = Intl.supportedValuesOf("timeZone");

//   let date = new Date();
//   aryIanaTimeZones.forEach((timeZone) => {
//     let strTime = date.toLocaleString("en-US", { timeZone: `${timeZone}` });
//     //console.log(timeZone, strTime);
//     formData.selectedTimeZone.push(timeZone);
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="m-20">
//       <div className="mb-5">
//         <h2 className="m-0">Preview</h2>
//         <p className="m-0 p-0">
//           You will be able to customize the fields in the later stage
//         </p>
//       </div>
//       <div className="bg-white">
//         <div className="text-3xl bg-sky-200">
//           <div className="m-5 p-2">
//             <h3 className="m-0">Name of the Enquiry Form</h3>
//             <div className="m-0 p-0 text-gray-500 font-semibold">
//               One line description of the form
//             </div>
//             <p className="text-gray-500">
//               Provide the following information to process your application
//             </p>
//           </div>
//         </div>
//         <form onSubmit={handleSubmit} className="m-10 p-5">
//           <div className="mb-4">
//             <label>1. Email*</label>
//             <br />
//             <input
//               type="text"
//               name="name"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter Your Email ID"
//               required
//               className="border border-gray-300 rounded-md p-2 w-2/3"
//             />
//           </div>
//           <div className="mb-4">
//             <label>2. Location*</label>
//             <br />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your location"
//               required
//               className="border border-gray-300 rounded-md p-2 w-2/3"
//             />
//           </div>

//           <div className="mb-4">
//             <label>3. Interview Date</label>
//             <br />
//             <input
//               type="date"
//               name="dateOfInterview"
//               value={formData.dateOfInterview}
//               onChange={handleInputChange}
//               required
//               className="border border-gray-300 rounded-md p-2 "
//             />
//           </div>
//           <div className="mb-4">
//             <label>4. Interview Time*</label>
//             <br />
//             <input
//               type="time"
//               name="selectedTime"
//               value={formData.selectedTime}
//               onChange={handleInputChange}
//               required
//               className="border border-gray-300 rounded-md p-2 w-2/3"
//             />
//           </div>
//           <div className="mb-4">
//             <label>5. Time Zone*</label>
//             <br />
//             <select
//               name="selectedTimeZone"
//               value={formData.selectedTimeZone}
//               onChange={handleInputChange}
//               required
//               className="border border-gray-300 rounded-md p-2 w-2/3"
//             >
//               <option value="">Select Time Zone</option>
//               {/* Dynamically generate options based on fetched time zones */}
//               {formData.selectedTimeZone &&
//                 formData.selectedTimeZone?.map((timeZone, index) => (
//                   <option key={index} value={timeZone}>
//                     {timeZone}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <label>6. Interview Medium*</label>
//             <br />
//             <select
//               name="selectedInterviewMedium"
//               value={formData.selectedInterviewMedium}
//               onChange={handleInputChange}
//               required
//               className="border border-gray-300 rounded-md p-2 w-2/3"
//             >
//               <option value="">Select Interview Medium</option>
//               <option value="In-person">In-person</option>
//               <option value="Phone">Google meet</option>
//               {/* Add more interview mediums as needed */}
//             </select>
//           </div>

//           {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//             Submit
//           </button> */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default InterviewAvailabilityForm;

import React, { useState } from "react";
import { updateFormCompletion } from "../redux/action";
import { useDispatch } from "react-redux";

const InterviewAvailabilityForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    location: "",
    email: "",
    selectedTime: "",
    dateOfInterview: "",
    selectedTimeZone: [],
    selectedInterviewMedium: "",
  });
  const [errors, setErrors] = useState({});

  var aryIanaTimeZones = Intl.supportedValuesOf("timeZone");

  let date = new Date();
  aryIanaTimeZones.forEach((timeZone) => {
    let strTime = date.toLocaleString("en-US", { timeZone: `${timeZone}` });
    //console.log(timeZone, strTime);
    formData.selectedTimeZone.push(timeZone);
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    // Validation checks
    if (!formData.email) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required.",
      }));
    }

    if (!formData.location) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: "Location is required.",
      }));
    }

    if (!formData.selectedTime) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedTime: "Interview time is required.",
      }));
    }

    if (!formData.dateOfInterview) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateOfInterview: "Interview date is required.",
      }));
    }

    if (!formData.selectedTimeZone) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedTimeZone: "Time zone is required.",
      }));
    }

    if (!formData.selectedInterviewMedium) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        selectedInterviewMedium: "Interview medium is required.",
      }));
    }

    if (!isError) {
      // If there are no errors, proceed with form submission logic
      // Handle form submission logic here
      alert("Form submitted! Go to Final Submission");
      dispatch(updateFormCompletion("interviewAvailability", true));
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
          {/* ... (rest of your form inputs) */}
          <div className="mb-4">
            <label>1. Email*</label>
            <br />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email ID"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label>2. Location*</label>
            <br />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter your location"
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            />
            {errors.location && (
              <p className="text-red-500">{errors.location}</p>
            )}
          </div>
          {/* ... (rest of your form inputs) */}
          <div className="mb-4">
            <label>3. Interview Date*</label>
            <br />
            <input
              type="date"
              name="dateOfInterview"
              value={formData.dateOfInterview}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2"
            />
            {errors.dateOfInterview && (
              <p className="text-red-500">{errors.dateOfInterview}</p>
            )}
          </div>
          <div className="mb-4">
            <label>4. Interview Time*</label>
            <br />
            <input
              type="time"
              name="selectedTime"
              value={formData.selectedTime}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 "
            />
            {errors.selectedTime && (
              <p className="text-red-500">{errors.selectedTime}</p>
            )}
          </div>
          <div className="mb-4">
            <label>5. Time Zone*</label>
            <br />
            <select
              name="selectedTimeZone"
              value={formData.selectedTimeZone}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            >
              <option value="">Select Time Zone</option>
              {/* Dynamically generate options based on fetched time zones */}
              {formData.selectedTimeZone &&
                formData.selectedTimeZone?.map((timeZone, index) => (
                  <option key={index} value={timeZone}>
                    {timeZone}
                  </option>
                ))}
            </select>
            {errors.selectedTimeZone && (
              <p className="text-red-500">{errors.selectedTimeZone}</p>
            )}
          </div>
          <div className="mb-4">
            <label>6. Interview Medium*</label>
            <br />
            <select
              name="selectedInterviewMedium"
              value={formData.selectedInterviewMedium}
              onChange={handleInputChange}
              required
              className="border border-gray-300 rounded-md p-2 w-2/3"
            >
              <option value="">Select Interview Medium</option>
              <option value="In-person">In-person</option>
              <option value="Phone">Phone</option>
              <option value="Video Call">Video Call</option>
              {/* Add more interview mediums as needed */}
            </select>
            {errors.selectedInterviewMedium && (
              <p className="text-red-500">{errors.selectedInterviewMedium}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterviewAvailabilityForm;

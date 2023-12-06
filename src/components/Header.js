// import React from "react";

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center bg-gray-200 p-4">
//       <div className="flex items-center">
//         <StepItem completed={true}>Form Selection</StepItem>
//         <StepItem>Set Up</StepItem>
//         <StepItem>Form Creation</StepItem>
//         <StepItem>Review</StepItem>
//       </div>
//     </div>
//   );
// };

// const StepItem = ({ completed = false, children }) => {
//   return (
//     <div className="flex items-center">
//       <div
//         className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${
//           completed
//             ? "bg-green-500 border-green-500"
//             : "bg-gray-300 border-gray-500"
//         }`}
//       >
//         {completed && <span className="text-white">&#10003;</span>}
//       </div>
//       <div className="ml-2">{children}</div>
//     </div>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <StepItem completed={true}>Form Selection</StepItem>
        <hr className="border-gray-400 flex-1" />
        <StepItem>Set Up</StepItem>
        <hr className="border-gray-400 flex-1" />
        <StepItem>Form Creation</StepItem>
        <hr className="border-gray-400 flex-1" />
        <StepItem>Review</StepItem>
      </div>
    </div>
  );
};

const StepItem = ({ completed = false, children }) => {
  return (
    <div className="flex items-center">
      <div
        className={`rounded-full w-8 h-8 flex items-center justify-center border-2 ${
          completed
            ? "bg-blue-500 border-blue-500"
            : "bg-gray-200 border-gray-600"
        }`}
      >
        {completed && <span className="text-white">&#10003;</span>}
      </div>
      <div className="ml-2">{children}</div>
    </div>
  );
};

export default Header;


import React, { useState } from "react";
import "./MultiStepForm.css"; // Custom CSS file
import ClientDetails from "../ClientDetails/ClientDetails";
import ProjectInterest from "../ProjectInterest/ProjectInterest";
import Budget from "../Budget/Budget";
import AdditionalRequ from "../AdditionalRequ/AdditionalReq";
import AssignLeads from "../AssignLead/AssignLead";
import Preview from "../Preview/Preview";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const steps = [
  "Client Details",
  "Project Interest",
  "Budget",
  "Additional Requirements & Notes",
  "Assign Lead",
  "Preview",
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);




  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    alert(`Do you want to proceed Further`) ;
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    alert(`Do you want to go back`);

  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ClientDetails />;
      case 1:
        return <ProjectInterest />;
      case 2:
        return <Budget />;
      case 3:
        return <AdditionalRequ />;
      case 4:
        return <AssignLeads />;

        case 5:
          return <Preview />;

      default:
        return <Preview />;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="stepper-container mb-8 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-item ${index <= currentStep ? "active" : ""}`}
          >
            <div className="stepper-circle-container">
              <div className="stepper-circle" style={{border:'3px solid white', outline:'3px solid #632E04'}}></div>
              {index < steps.length - 1 && (
                <div
                  //  style={{border:'3px solid white', outline:'3px solid rgba(99, 46, 4, 1)'}}
                  className={`stepper-line ${
                    index < currentStep ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
            <div className="stepper-label">{step}</div>
          </div>
        ))}
      </div>
      <div
        className="brown"
        style={{
          padding: "24px 75px",
          height: "auto",
          border: "3px solid #632E04",
          borderRadius: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {renderStep()}

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  style={{
                    width: "64px",
                    height: "44px",
                    padding: "10px 40px 10px 40px",
                    fontSize: "18px",
                    textAlign: "start",
                    gap: "24px",
                    borderRadius: "8px",
                    opacity: "0px",
                    background: "rgba(99, 46, 4, 1)",
                    color: "rgba(255, 255, 255, 1)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaArrowLeftLong
                    style={{
                      position: "relative",
                      top: "3px",
                      left: "-7px",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  />{" "}
                </button>
              )}
            </div>

            <div>
              {currentStep <= 3 && (
                <button
                  onClick={nextStep}
                  // className="bg-brown-500 text-white px-4 py-2 rounded ml-auto"
                  style={{
                    width: "140px",
                    height: "45px",
                    padding: "10px 40px 10px 40px",
                    fontSize: "18px",
                    textAlign: "start",
                    gap: "24px",
                    borderRadius: "8px",
                    opacity: "0px",
                    background: "rgba(99, 46, 4, 1)",
                    color: "rgba(255, 255, 255, 1)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Next
                  <FaArrowRightLong
                    style={{
                      position: "relative",
                      top: "3px",
                      left: "10px",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "400",
                      fontSize: "18px",
                    }}
                  />{" "}
                </button>
              )}

              <Link to="/Preview">
                {currentStep > 3 && (
                  <button
                    onClick={nextStep}
                    // className="bg-brown-500 text-white px-4 py-2 rounded ml-auto"
                    style={{
                      width: "140px",
                      height: "45px",
                      padding: "10px 40px 10px 40px",
                      fontSize: "18px",
                      textAlign: "start",
                      gap: "24px",
                      borderRadius: "8px",
                      opacity: "0px",
                      background: "rgba(99, 46, 4, 1)",
                      color: "rgba(255, 255, 255, 1)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    //     </div>
    // </div>
  );
};

export default MultiStepForm;

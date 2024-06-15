import rof from "../../Images/image 1.png";
import enroll from "../../Images/Rectangle 3.png";
import "./ClientPage.css";
import React, { useState } from "react";
import ClientDetails from "../ClientDetails/ClientDetails";
import ProjectInterest from "../ProjectInterest/ProjectInterest";
import Budget from "../Budget/Budget";
import AdditionalRequ from "../AdditionalRequ/AdditionalReq";
import AssignLeads from "../AssignLead/AssignLead";
import Preview from "../Preview/Preview";
import MultiStepForm from "../Stepper/MultiStepForm";

const steps = [
  "Client Details",
  "Project Interest",
  "Budget",
  "Additional Requirements & Notes",
  "Assign Lead",
  "Preview",
];

const ClientPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    // alert(``);
    
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  // alert('');


  const renderStep = () => {
    switch (currentStep) {
      // case 0:
      //   return <ClientDetails />;
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
        return ;
    }
  };
  return (
    <div className="hero_comp">
      <div
        style={{
          height: "80px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
        className="main_comp"
      >
        {/* ROF image */}
        <div style={{ textAlign: "justify" }} className="logo">
          <img
            className="logo1"
            src={rof}
            style={{
              margin: "0px 60px",
            }}
          />
        </div>

        <div style={{ display: "flex", marginTop:'20px'}} className="div_comp">
          <>
            {/* //Enrollment */}
            <>
              <text
                className="textF"
                style={{
                  position: "absolute",
                  top: "124px",
                  left: "25px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "Americana BT",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "37.69px",
                  textAlign: "left",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                {" "}
                CLIENT INFORMATION FORM{" "}
              </text>
            </>
            <img src={enroll} className="enrol" />
          </>

          <div style={{ width: "100%" }} className="div-2">
            {/* progress bar */}
            <div
              style={{
                height: "74px",
                padding: "40px 75px",
              }}
            >
             <MultiStepForm/>
            </div>

            {/* client details */}

            {/* <ClientDetails /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;

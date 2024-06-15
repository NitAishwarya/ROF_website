import React from "react";

import { Link } from "react-router-dom";

import rof from "../../Images/image 1.png";
import  { useState } from "react";

import './Preview.css';


const steps = [
  "Client Details",
  "Project Interest",
  "Budget",
  "Additional Requirements & Notes",
  "Assign Lead",
  "Preview",
];

function Preview() {

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
    <>

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
      </div>
<br /><br />
      <div >

      <div className="stepper-container w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-item ${index>5 <= currentStep ? "active" : ""}`}
          >
            <div className="stepper-circle-container">
              <div className="stepper-circle" style={{border:'3px solid white', outline:'3px solid #632E04'}}></div>
              {index < steps.length - 1 && (
                <div
                
                  className={`stepper-line ${
                    index < currentStep ? "completed" : ""
                  }`}
                ></div>
              )}
            </div>
            <div className="stepper-label">
              {step}

              </div>
          </div>
        ))}
      </div>

      </div>

      <div class="container mx-auto p-6">
        <div
          class="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 border-4 border-[#632E04]"
          style={{ border: "3px solid #632E04" }}
        >
          <div style={{ display: "flex", alignItems:'center'}}>
            <div
              style={{
                width: "150px",
 height: "150px",
 border: "2px dashed #6F6F6F",
 textAlign:'-webkit-center',
 alignContent:'center',
 gap:'10px',
              }}
            >
              <div style={{
 width: "130px",
 height: "130px",
 background:'#D9D9D9'
              }}> </div>

            </div>
            <div style={{width:'80%'}}>
              <h2 class="text-2xl font-bold text-center mb-8">
                CLIENT INFORMATION FORM
              </h2>
            </div>
          </div>

          <form>
            {/* <!-- Client Details --> */}

            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4"
                style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
              >
                Client Details
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    placeholder="  John Doe  "
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                  >
                    Contact no*
                  </label>
                  <input
                    type="tel"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    placeholder=" +917768961497"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                  >
                    Email ID*
                  </label>
                  <input
                    type="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    placeholder="  JohnDoe492@gmail.com "
                  />
                </div>
              </div>
            </div>

            {/* <!-- Project Interest --> */}
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4"
                style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
              >
                Project Interest
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="block text-sm font-medium text-gray-700"
                  >
                    Type of Project
                  </label>
                  <select
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                  >
                    <option>Choose Project</option>
                    <option>Project A</option>
                    <option>Project B</option>
                    <option>Project C</option>
                    <option>Project D</option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
                  >
                    Project Timeline
                  </label>
                  <select
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                  >
                    <option>TentativeTimeline</option>
                    <option>Immediately</option>
                    <option>Within 3 months</option>
                    <option>Within 6 months</option>
                    <option>Not Sure</option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
                  >
                    Project Location
                  </label>
                  <input
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    type="text"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    placeholder="Enter Project Location"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Budget --> */}
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4"
                style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
              >
                Budget
              </h3>
              <div>
                <label
                  style={{ fontFamily: "Manrope", color: "#353535" }}
                  class="block text-sm font-medium text-gray-700"
                >
                  Estimated Budget
                </label>
                <input
                  style={{ fontFamily: "Manrope", color: "#353535" }}
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                  placeholder="Enter Your Budget  "
                />
              </div>
            </div>

            {/* <!-- Additional Requirements & Notes --> */}
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4"
                style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
              >
                Additional Requirements & Notes
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="block text-sm font-medium text-gray-700"
                  >
                    Specific Requirements or Preferences
                  </label>
                  <textarea
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    rows="3"
                    placeholder="Enter any specific requirements or preferences"
                  ></textarea>
                </div>
                <div>
                  <label
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="block text-sm font-medium text-gray-700"
                  >
                    Notes
                  </label>
                  <textarea
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                    rows="3"
                    placeholder="Internal Notes"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <!-- Assign Lead --> */}
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4"
                style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
              >
                Assign Lead
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="block text-sm font-medium text-gray-700"
                  >
                    Assign to Team
                  </label>
                  <select
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                  >
                    <option>Choose Team</option>
                    <option>Teams 1</option>
                    <option>Teams 2</option>
                    <option>Teams3</option>
                    <option>Teams4</option>
                  </select>
                </div>
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    style={{ fontFamily: "Poppins", color: "#7F7F7F" }}
                  >
                    Assign to Sales Executive
                  </label>
                  <select
                    style={{ fontFamily: "Manrope", color: "#353535" }}
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border-2 border-text-gray p-1"
                  >
                    <option>Choose Sales Executive</option>
                    <option>Sales Executive 1</option>
                    <option>Sales Executive 2</option>
                    <option>Sales Executive3</option>
                    <option>Sales Executive4</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Form Actions --> */}
            <div class="flex  space-x-4 justify-center">
              <Link to="/Edit">
                <button
                  style={{ fontFamily: "Manrope", color: "#353535", border:'2px solid #632E04', color:'#632E04', width:'270px' }}
                  type="button"
                  class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium  text-red-950 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-1"
                >
                  Edit
                </button>
              </Link>

              <Link to="/DashBoard">
                <button
                  style={{ fontFamily: "Manrope", color: "#353535",color:'white', width:'270px' }}
                  type="submit"
                  class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-red-950 hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-1"
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Preview;

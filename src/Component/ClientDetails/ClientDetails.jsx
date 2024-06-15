import add from "../../Images/Frame 1000015306.png";

import { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import "./ClientDetails.css";

const steps = [
  "Client Details",
  "Project Interest",
  "Budget",
  "Additional Requirements & Notes",
  "Assign Lead",
  "Preview",
];

const ClientDetails = () =>{

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

    

    const imgref = useRef(null);
    const [image, setImage] = useState("");
  
    const [FullName, setFullName] = useState("");
    const [MobNo, setMobNo] = useState("");
    const [EmailId, setEmailId] = useState("");
  
    const handleAddImage = () => {
      imgref.current.click();
    };
  
    const handleChangeImage = (event) => {
      const file = event.target.files[0];
      console.log(file);
      setImage(file);
    };

    const submitForm = (e) => {
        e.preventDefault();
        const formSub = {Image,FullName, MobNo, EmailId };
    
        console.log(formSub);
      };
    return(
        <div>

<div style={{ textAlign: "-webkit-center"}}>
              {/* <div className="details"
                style={{
                  width: "500px",
                  height: "650px",
                  border: "3px solid #632E04",
                  borderRadius: "24px",
                }}
              > */}
                <div
                className="details_form"
                  style={{
                    width: "358px",
                    height: "545px",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label className="labelT"
                      style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        lineHeight: "36px",
                        color: "#7F7F7F",
                      }}
                    >
                      {" "}
                      Client Details{" "}
                    </label>
                  </div>
                  <div style={{ marginTop: "17px 0", cursor:'pointer' }}>
                    <div onClick={handleAddImage} className="div_add">
                      {image ? (
                        <img className="add"
                          src={URL.createObjectURL(image)}
                          accept="Image/"
                          width="120px"
                          height="120px"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        <img src={add} className="add" />
                      )}
                      <input
                        style={{ display: "none" }}
                        onChange={handleChangeImage}
                        type="file"
                        ref={imgref}

                        required
                       
                      />
                    </div>{" "}
                    <>
                      <text className="div_text"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "14px",
                          textAlign: "center",
                          color: "#3C3C3C",
                          marginTop: "6px",
                        }}
                      >
                        Click to add photo{" "}
                        
                      </text>
                    </>
                  </div>
                  <br />
                  {/* FORM */}
                  <div className="form-input">
                    <form
                    autoComplete="OFF"
                      // onSubmit={submitForm}
                      method="POST"
                      style={{ gap: "10px", textAlign: "justify" }}
                    >
                      <label
                      className="input_label"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "24.59px",
                          textAlign: "left",
                          color: "rgba(45, 45, 45, 1)",
                        }}
                      >
                        {" "}
                        Full Name*{" "}
                      </label>
                      <br />
                      <input className="div_input"
                        type="text"
                        name="name"
                        value={FullName}
                        placeholder="John Doe"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        style={{
                          width: "309px",
                          height: "25px",
                          padding: "12px 24px 12px 24px",
                          marginTop: "10px",
                          borderRadius: "8px",
                          border: "1.5px solid rgba(53, 53, 53, 0.5)",
                          opacity: "0px",
                          background: "none",
                          outline: "none",
                          fontSize: "18px",
                        }}
                      />

                      <br />
                      <br />
                      <label
                      className="input_label"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "24.59px",
                          textAlign: "left",
                          color: "rgba(45, 45, 45, 1)",
                          
                        }}
                      >
                        {" "}
                        Contact no*{" "}
                      </label>
                      <br />
                      <input
                      className="div_input"
                        type="text"
                        name="mobNo"
                        value={MobNo}
                        maxLength="10"
                        onChange={(e) => setMobNo(e.target.value)}

                        required
                        placeholder="+91  9422121418 "
                        style={{
                          width: "309px",
                          height: "25px",
                          padding: "12px 24px 12px 24px",
                          marginTop: "10px",
                          borderRadius: "8px",
                          border: "1.5px solid rgba(53, 53, 53, 0.5)",
                          opacity: "0px",
                          background: "none",
                          outline: "none",
                          fontSize: "18px",
                        }}
                      />

                      <br />
                      <br />
                      <label
                      className="input_label"
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "18px",
                          fontWeight: "500",
                          lineHeight: "24.59px",
                          textAlign: "left",
                          color: "rgba(45, 45, 45, 1)",
                        }}
                      >
                        {" "}
                        Email Id*{" "}
                      </label>
                      <br />
                      <input
                      className="div_input"
                        type="email"
                        name="email"
                        required
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}

                        placeholder="johndoe@rofgroups.com"
                        style={{
                          width: "309px",
                          height: "25px",
                          padding: "12px 24px 12px 24px",
                          marginTop: "10px",
                          borderRadius: "8px",
                          border: "1.5px solid rgba(53, 53, 53, 0.5)",
                          opacity: "0px",
                          background: "none",
                          outline: "none",
                          fontSize: "18px",
                        }}
                      />

                      <br />
                      <br />
                      {/* <div style={{ textAlign: "center" }}>
                        <input
                        onClick={nextStep}
                          type="button"
                          value="Next"
                          style={{
                            width: "140px",
                            height: "45px",
                            padding: "10px 40px 10px 40px",
                            fontSize:'18px',
                            textAlign: "start",
                            gap: "24px",
                            borderRadius: "8px",
                            opacity: "0px",
                            background: "rgba(99, 46, 4, 1)",
                            color: "rgba(255, 255, 255, 1)",
                            border: "none",
                            cursor: "pointer",
                          }}
                        />{" "}
                        <FaArrowRightLong
                          style={{
                            position: "relative",
                            top: "3px",
                            left: "-60px",
                            color: "rgba(255, 255, 255, 1)",
                            fontWeight: "400",
                            fontSize: "18px",
                          }}
                        />{" "}
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            {/* </div> */}

        </div>
    )
}


export default ClientDetails;
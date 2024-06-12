import "./ClientPG.css";
import rof from "../../Images/image 1.png";
import enroll from "../../Images/Rectangle 3.png";
import add from "../../Images/Frame 1000015306.png";

import { FaArrowRightLong } from "react-icons/fa6";

import { useRef, useState } from "react";

const ClientPG = () => {
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
    const formSub = { Image, FullName, MobNo, EmailId };

    console.log(formSub);
  };
  return (
    <div
      style={{
        width: "1440px",
        height: "1024px",
      }}
    >
      <div>
         <div style={{ width: "100%", height: "80px" }}>
          <div style={{ textAlign: "justify" }}>
            <img
              src={rof}
              style={{
                margin: "8px 90px",
              }}
              width="50px"
              height="50px"
            />
          </div>
        </div> 

        <div style={{ display: "flex" }}>
          <div style={{ width: "35%", height: "620px" }}>
            {/* //Enrollment */}
            <>
              <text
                style={{
                  position: "absolute",
                  top: "110px",
                  left: "114px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "Castoro Titling",
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "37.69px",
                  textAlign: "left",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                {" "}
                CLIENT INFORMATION FORM{" "}
              </text>
            </>
            <img src={enroll} width="100%" height="100%" />
          </div>

          <div style={{ width: "65%", height: "620px" }} className="div-2">
            <div style={{ width: "100%", height: "74px" }}>
              <text> Progress </text>
            </div>

            {/* client details */}
            <div style={{ textAlign: "-webkit-center" }}>
              <div
                style={{
                  width: "380px",
                  height: "445px",
                  border: "3px solid #632E04",
                  borderRadius: "24px",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    width: "358px",
                    height: "578px",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "18px",
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
                  <div style={{ marginTop: "17px 0" }}>
                    <div onClick={handleAddImage} style={{ marginTop: "6px" }}>
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          accept="Image/"
                          width="70px"
                          height="70px"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        <img src={add} width="70px" height="70px" />
                      )}
                      <input
                        style={{ display: "none" }}
                        onChange={handleChangeImage}
                        type="file"
                        ref={imgref}
                      />
                    </div>{" "}
                    <>
                      <text
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "14px",
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
                  <div className="form-input2">
                    <form
                      onSubmit={submitForm}
                      method="POST"
                      style={{
                        gap: "10px",
                        textAlign: "justify",
                        padding: "0px 45px",
                      }}
                    >
                      <label
                        style={{
                          fontFamily: "Manrope",
                          fontSize: "14px",
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
                      <input
                        type="text"
                        name="name"
                        value={FullName}
                        placeholder="John Doe"
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        style={{
                          width: "220px",
                          height: "10px",
                          padding: "12px 24px 12px 24px",
                          marginTop: "4px",
                          borderRadius: "8px",
                          border: "1.5px solid rgba(53, 53, 53, 0.5)",
                          opacity: "0px",
                          background: "none",
                          outline: "none",
                          fontSize: "14px",
                        }}
                      />

                      <br />
                      <div style={{ marginTop: "10px" }}>
                        <label
                          style={{
                            fontFamily: "Manrope",
                            fontSize: "14px",
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
                          className="inpuNum"
                          type="text"
                          name="mobNo"
                          value={MobNo}
                          aria-autocomplete="+91"
                          maxLength="10"
                          onChange={(e) => setMobNo(e.target.value)}
                          required
                          placeholder="+91  9422121418 "
                          style={{
                            width: "220px",
                            height: "10px",
                            padding: "12px 24px 12px 24px",
                            marginTop: "4px",
                            borderRadius: "8px",
                            border: "1.5px solid rgba(53, 53, 53, 0.5)",
                            opacity: "0px",
                            background: "none",
                            outline: "none",
                            fontSize: "14px",
                          }}
                        />
                      </div>

                      <div style={{ marginTop: "10px" }}>
                        <label
                          style={{
                            fontFamily: "Manrope",
                            fontSize: "14px",
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
                          type="email"
                          name="email"
                          required
                          value={EmailId}
                          onChange={(e) => setEmailId(e.target.value)}
                          placeholder="johndoe@rofgroups.com"
                          style={{
                            width: "220px",
                            height: "10px",
                            padding: "12px 24px 12px 24px",
                            marginTop: "4px",
                            borderRadius: "8px",
                            border: "1.5px solid rgba(53, 53, 53, 0.5)",
                            opacity: "0px",
                            background: "none",
                            outline: "none",
                            fontSize: "14px",
                          }}
                        />
                      </div>

                      <br />

                      <div style={{ textAlign: "center" }}>
                        <input
                          type="submit"
                          value="Next"
                          style={{
                            width: "110px",
                            height: "35px",
                            padding: "10px 30px 10px 30px",
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
                            left: "-40px",
                            color: "rgba(255, 255, 255, 1)",
                            fontWeight: "400",
                            fontSize: "14px",
                          }}
                        />{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default ClientPG;

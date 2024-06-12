import rof from "../../Images/image 1.png";
import enroll from "../../Images/Rectangle 3.png";
import add from "../../Images/Frame 1000015306.png";

import { FaArrowRightLong } from "react-icons/fa6";


import { useRef, useState } from "react";

const LoginPage = () => {

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
  return (
    <div >
      {/* <ClientPage/> */}

      <div
        style={{ width: "1200px", height: "650px", border: "3px solid red" }}
      >
        {/* ROF image */}
        <div style={{textAlign:'justify'}}>
          <img
            src={rof}
            style={{
              margin: "8px 90px",
            }}
          />
        </div>

        <div style={{ display: "flex" }}>
          <>
            {/* //Enrollment */}
            <>
              <text
                style={{
                  position: "absolute",
                  top: "124px",
                  left: "32px",
                  gap: "0px",
                  opacity: "0px",
                  fontFamily: "Castoro Titling",
                  fontSize: "32px",
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
            <img src={enroll} />
          </>

          <div style={{ width: "100%" }} className="div-2">
            {/* progress bar */}
            <div
              style={{
                height: "74px",
                padding: "20px 75px",
              }}
            >
              progess
            </div>

            {/* client details */}
            <div style={{ textAlign: "-webkit-center" }}>
              <div
                style={{
                  width: "500px",
                  height: "650px",
                  border: "3px solid #632E04",
                  borderRadius: "24px",
                }}
              >
                <div
                  style={{
                    width: "358px",
                    height: "578px",
                    marginTop: "24px",
                    gap: "24px",
                  }}
                >
                  <div>
                    <label
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
                  <div style={{ marginTop: "17px 0" }}>
                    <div onClick={handleAddImage}>
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          accept="Image/"
                          width="120px"
                          height="120px"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        <img src={add} />
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
                      onSubmit={submitForm}
                      method="POST"
                      style={{ gap: "10px", textAlign: "justify" }}
                    >
                      <label
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
                      <input
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
                      <div style={{ textAlign: "center" }}>
                        <input
                          type="submit"
                          value="Next"
                          style={{
                            width: "140px",
                            height: "45px",
                            padding: "10px 40px 10px 40px",
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

export default LoginPage;

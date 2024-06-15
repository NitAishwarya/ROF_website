
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import icon from '../../Images/image 1.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login-form submitted', { email, password });
  };

  return (
    <div style={{margin:'-151px 0px'}} className="w-full relative h-[850px] overflow-hidden text-left text-lg text-darkslategray-100 font-manrope bg-orange-100 bg-cover bg-center bg-no-repeat bg-image">
      <img
        className="h-[1996px] w-[1834px] absolute !m-[0] top-[calc(50%_-_998px)] left-[calc(50%_-_917px)]"
        alt=""
        src="/background.jpg"
      />
      <form
        onSubmit={handleSubmit}
        className="absolute top-[215px] left-[calc(50%_-_278px)] shadow-[0px_254px_71px_rgba(130,_71,_23,_0),_0px_163px_65px_rgba(130,_71,_23,_0.01),_0px_92px_55px_rgba(130,_71,_23,_0.05),_0px_41px_41px_rgba(130,_71,_23,_0.09),_0px_10px_22px_rgba(130,_71,_23,_0.1)] rounded-xl bg-white flex flex-col items-center justify-start py-11 px-10 gap-[36px]"
      >
        <img
          className="w-[121px] relative rounded-lg h-[98px] object-cover"
          alt=""
          src={icon}
        />
        <div className="w-[475px] relative h-[73px] text-[32px] font-poppins">
          <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[475px]">
            Welcome to ROF Team Portal
          </div>
          <div className="absolute top-[48px] left-[24px] text-lg font-medium font-manrope text-dimgray inline-block w-[427px]">
            Use your work email to log in your team workspace
          </div>
        </div>
        <div className="w-[426px] relative h-[182px]">
          <div className="absolute top-[0px] left-[0px] w-[426px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium">Email / Employee ID</div>
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-3 px-6 text-darkslategray-200 border-[1.5px] border-solid border-darkslategray-200">
              <input
                type="text"
                className="w-full outline-none placeholder:text-[18px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className="absolute top-[100px] left-[0px] w-[426px] h-[82px]">
            <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
              <div className="w-[422px] relative h-[25px]">
                <div className="absolute top-[0px] left-[0px] font-medium">
                  Password
                </div>
                <Link to="/ForgotPassword">
                  <div className="absolute top-[4px] left-[273px] text-[14px] font-medium text-saddlebrown">
                    Forgot your password?
                  </div>
                </Link>
              </div>
              <div className="w-[426px] rounded-lg bg-white box-border flex flex-row items-center justify-start py-3 px-6 gap-[10px] text-darkslategray-200 border-[1.5px] border-solid border-darkslategray-200">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full outline-none placeholder:text-[18px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/Home">
          <button
            style={{cursor:'pointer'}}
            type="submit"
            className="w-[426px] shadow-[0px_73px_20px_rgba(99,_46,_4,_0),_0px_47px_19px_rgba(99,_46,_4,_0.01),_0px_26px_16px_rgba(99,_46,_4,_0.05),_0px_12px_12px_rgba(99,_46,_4,_0.09),_0px_3px_6px_rgba(99,_46,_4,_0.1)] rounded-lg bg-saddlebrown flex flex-row items-center justify-center p-2.5 box-border text-white"
          >
            <div style={{fontSize:'18px', textDecoration:'none'}} className="">Log in</div>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;

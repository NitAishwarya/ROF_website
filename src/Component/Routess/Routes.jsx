import ForgotPassword from "../LoginPage/ForgotPassword";
import Home from "../LoginPage/Home";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectInterest from "../ProjectInterest/ProjectInterest";
import Preview from "../Preview/Preview";
import AssignLead from "../AssignLead/AssignLead";
import ClientDetails from "../ClientDetails/ClientDetails";
import ClientPage from "../ClientPage/ClientPage";
import DashBoard from "../DashBorad/DashBoard";

const Routest = () => {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path="/ROF_website" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/ProjectIntrest" element={<ProjectInterest/>} />
          <Route path="/Preview" element={<Preview/>}  />
          <Route path="/Edit" element={<ClientPage/>} />
          <Route path="/DashBoard" element={<DashBoard/>} />
  
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routest;
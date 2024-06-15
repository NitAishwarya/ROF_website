import './App.css';
import ForgotPassword from './Component/LoginPage/ForgotPassword';
import Home from './Component/LoginPage/Home';
import LoginPage from './Component/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Routest from './Component/Routess/Routes';
import MultiStepForm from './Component/Stepper/MultiStepForm';



function App() {
  return (
        
      //         <BrowserRouter>
      //   <Routes>
  
      //     <Route path="/" element={<LoginPage />} />
      //     <Route path="/home" element={<Home />} />
      //     <Route path="/ForgotPassword" element={<ForgotPassword/>} />
  
      //   </Routes>
      // </BrowserRouter>

       <Routest/>

      // <MultiStepForm/>
        
  );
}

export default App;

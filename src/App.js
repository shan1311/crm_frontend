import { useEffect } from "react";

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import HomePage from "./components/role/HomePage"
import CRMLogin from "./components/role/CRMLogin";
import UserLogin from "./components/user/UserLogin";
import AdminLogin from "./components/admin/adminlogin";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import Side from "./components/admin/side";


import EmployeeSignup from "./components/employee/EmployeeSignup";
import Task from "./components/employee/todo";
import Assign from "./components/employee/Assign";
import PDFViewer from "./components/employee/PDFViewer";
import UserSignup from "./components/user/UserSignup";

import Lead from "./components/admin/Lead";
import Calendar from "./components/admin/calendar";
import EmployeeDetailsComponent from "./components/admin/EmployeeDetailsComponent";
import UserDetailsComponent from "./components/admin/userdetails";
import ErrorBoundary from "./components/ErrorBoundary";
import InvoiceForm from "./components/admin/InvoiceForm";
import Editor from "./components/admin/Editor";
import Count from "./components/admin/count";
import RegisterAdmin from "./components/admin/registeradmin";
import UploadPDF from "./components/admin/uploadpdf";
import Navbar from "./components/employee/Navbar";
import EmployeeHome from "./components/employee/employeehome";
import QueryForm from "./components/employee/queries";

import Profile from "./components/employee/profile";
import OtherDetails from "./components/employee/otherdetails";
import ClientNavbar from "./components/user/clientnavbar";
import ClientProfile from "./components/user/clientprofile";
import ClientHome from "./components/user/clienthome";
import ClientQueryForm from "./components/user/clientquery";
import QueryList from "./components/admin/querydisplay";
import ProductForm from "./components/user/proddetails";
import ProjectAssignForm from "./components/admin/project";
import ProjectDetails from "./components/employee/project";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  
  
  
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      default:
        // Handle default case, maybe set a default title and meta description
        break;
    }
    

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <ErrorBoundary> 
    <Routes>
      <Route path="/crmlogin" element={<CRMLogin />} />
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path='/employeelogin' element={<EmployeeLogin/>}/>
  
      <Route path='/usersignup' element={<UserSignup/>}/>
      <Route path='/employeesignup' element={<EmployeeSignup/>}/>

      <Route path='/side' element={<Side/>}/>
      <Route path='/dashboard' element={<Count/>}/>
      <Route path='/lead' element={<Lead/>}/>
      <Route path='/employeedetails' element={<EmployeeDetailsComponent/>}/>
      <Route path='/userdetails' element={<UserDetailsComponent/>}/>
      <Route path='/proposal' element={<Editor/>}/>
      <Route path='/invoice' element={<InvoiceForm/>}/> 
      <Route path='/querydisplay' element={<QueryList/>}/> 
      <Route path='/addadmin' element={<RegisterAdmin/>}/>
      <Route path='/uploadpdf' element={<UploadPDF/>}/>
      <Route path='/project' element={<ProjectAssignForm/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      <Route path='/' element={<HomePage/>}/>

      
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/otherdetails' element={<OtherDetails/>}/>
      
      <Route path='/task' element={<Task/>}/>
      <Route path="/assign" element={<Assign/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/pdf' element={<PDFViewer/>}/>
      <Route path='/employeehome' element={<EmployeeHome/>}/>
      <Route path='/query' element={<QueryForm/>}/>
      <Route path='/projectdetails' element={<ProjectDetails/>}/>
       
      <Route path='/clientnavbar' element={<ClientNavbar/>}/>
      <Route path='/clientprofile' element={<ClientProfile/>}/>
      <Route path='/clienthome' element={<ClientHome/>}/>
      <Route path='/clientprofile' element={<ClientProfile/>}/>
      <Route path='/clientquery' element={<ClientQueryForm/>}/>
      <Route path='/product' element={<ProductForm/>}/>
    </Routes> 
    </ErrorBoundary> 
     

    </>
  );
}
export default App;

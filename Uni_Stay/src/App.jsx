// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home";
import Student from "./Page/StudenLogin";
import Owner from "./Page/owner/owner";

import StudentRegister from "./Page/student/RegisterPage";
import OwnerRegister from "./Page/ownerRegister";
import AddProperty from "./Page/AddProperty";
import AllResidence from "./Page/ListingsPage";
import ResDetails from "./Page/PropertyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/all-residence" element={<AllResidence />} />
        <Route path="/details/:id" element={<ResDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


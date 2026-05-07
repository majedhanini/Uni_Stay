import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home
import Home from "./Page/Home/Home";

// Student Pages
import Student from "./Page/Student/StudenLogin";
import StudentRegister from "./Page/Student/RegisterPage";
import AllResidence from "./Page/Student/ListingsPage";
import ResDetails from "./Page/Student/PropertyDetails";

// Owner Pages
import Owner from "./Page/Owner/owner";
import OwnerRegister from "./Page/Owner/ownerRegister";
import AddProperty from "./Page/Owner/AddProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student */}
        <Route path="/student" element={<Student />} />
        <Route path="/student-register" element={<StudentRegister />} />
        <Route path="/all-residence" element={<AllResidence />} />
        <Route path="/details/:id" element={<ResDetails />} />

        {/* Owner */}
        <Route path="/owner" element={<Owner />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/add-property" element={<AddProperty />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
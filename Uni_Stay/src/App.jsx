import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= HOME ================= */
import Home from "./Page/Home/Home.jsx";

/* ================= STUDENT ================= */
import Student from "./Page/Student/StudenLogin.jsx";
import StudentRegister from "./Page/Student/RegisterPage.jsx";

/* ================= RESIDENCE ================= */
import AllResidence from "./Page/Residence/AllResedintPage.jsx";
import ResDetails from "./Page/Residence/ResDetailsPage.jsx";
import WishList from "./Page/Residence/wishList.jsx";

/* ================= OWNER ================= */
import Owner from "./Page/Owner/owner.jsx";
import OwnerRegister from "./Page/Owner/ownerRegister.jsx";
import AddProperty from "./Page/Owner/AddProperty.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= STUDENT ================= */}
        <Route path="/student" element={<Student />} />
        <Route path="/student-register" element={<StudentRegister />} />

        {/* ================= RESIDENCE ================= */}
        <Route path="/all-residence" element={<AllResidence />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/details/:id" element={<ResDetails />} />

        {/* ================= OWNER ================= */}
        <Route path="/owner" element={<Owner />} />
        <Route path="/owner-register" element={<OwnerRegister />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

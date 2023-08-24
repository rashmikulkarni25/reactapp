import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import VendorDashboard from "./components/Vendor/vendorDashboard";
import VendorTiffins from "./components/Vendor/vendorTiffins";
import VendorAddTiffin from "./components/Vendor/vendorAddTiffin";
import VendorEditTiffin from "./components/Vendor/vendorEditTiffin";
import VendorProfile from "./components/Vendor/vendorProfile";
import VendorOrders from "./components/Vendor/vendorOrders";
import VendorLogin from "./components/Vendor/vendorLogin";
import VendorRegister from "./components/Vendor/vendorRegister";
//import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VendorHomePage from "./pages/VendorHomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/vendor-register">VendorRegister</Link>
            </li>
            <br />
            <li>
              <Link to="/vendor-login">VendorLogin</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Routes>
          <Route path="/vendor-homepage" element={<VendorHomePage />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/vendor-tiffins" element={<VendorTiffins />} />
          <Route path="/vendor-addtiffin" element={<VendorAddTiffin />} />
          <Route path="/vendor-edittiffin" element={<VendorEditTiffin />} />
          <Route path="/vendor-profile" element={<VendorProfile />} />
          <Route path="/vendor-orders" element={<VendorOrders />} />
          <Route path="/vendor-login" element={<VendorLogin />} />
          <Route path="/vendor-register" element={<VendorRegister />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

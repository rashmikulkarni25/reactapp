import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";

function VendorProfile() {
  const [vendorProfileData, setVendorProfileData] = useState({});
  console.log("vendorProfileData: ", vendorProfileData);

  useEffect(() => {
    fetchVendorProfile();
  }, []);

  const fetchVendorProfile = () => {
    try {
      const responsePromise = axios.post(
        `${config.backendUrl}/api/Vendors/getvendorbyid`,
        "1",
        {
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
        }
      );

      responsePromise.then((response) => {
        if (response.status === 200) {
          console.log("vendor data", response.data);
          setVendorProfileData(response.data);
        } else {
          throw new Error("Failed while getting vendor profile!");
        }
      });
    } catch (error) {
      // Handle fetch tiffins error
      console.log("error: ", error);
    }
  };

  const handleUpdateProfile = () => {
    try {
      const responsePromise = axios.patch(
        `${config.backendUrl}/api/Vendors/updateprofile`,
        vendorProfileData
      );
      // Handle successful profile update

      responsePromise.then((response) => {
        if (response.status === 200) {
          console.log("updated vendor data", response.data);
        } else {
          throw new Error("Failed while updating vendor profile!");
        }
      });
    } catch (error) {
      // Handle profile update error
      console.error("Profile update error:", error);
    }
  };

  return (
    <div>
      <h1>Vendor Profile</h1>
      <input
        type="text"
        placeholder="Name"
        value={vendorProfileData.name}
        onChange={(e) =>
          setVendorProfileData({ ...vendorProfileData, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Address"
        value={vendorProfileData.address}
        onChange={(e) =>
          setVendorProfileData({
            ...vendorProfileData,
            address: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Pincode"
        value={vendorProfileData.pincode}
        onChange={(e) =>
          setVendorProfileData({
            ...vendorProfileData,
            pincode: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={vendorProfileData.email}
        onChange={(e) =>
          setVendorProfileData({
            ...vendorProfileData,
            email: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={vendorProfileData.mobNo}
        onChange={(e) =>
          setVendorProfileData({
            ...vendorProfileData,
            mobNo: e.target.value,
          })
        }
      />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}

export default VendorProfile;

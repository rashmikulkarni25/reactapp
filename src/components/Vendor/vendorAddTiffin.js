import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTiffin() {
  const [tiffinName, setTiffinName] = useState("");
  const [description, setDescription] = useState("");
  const [tiffinCategory, setCategory] = useState("");
  const [tiffinPrice, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [vendorId, setVendorId] = useState("");

  const handleAddTiffin = () => {
    try {
      const responsePromise = axios.post(
        `${config.backendUrl}/api/Vendors/addtiffin`,
        {
          tiffinName,
          description,
          tiffinCategory,
          tiffinPrice,
          imageLink,
        }
      );

      // Handle successful tiffin addition
      responsePromise.then((response) => {
        console.log("Vendors/addtiffin response: ", response.data);
        toast.success("Tiffin added successfully!");
      });
    } catch (error) {
      console.log("Failed to add new tiffin!");
    }
  };

  return (
    <div className="container-tiffin">
      <center>
        <h1>Add Tiffin</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
            type="text"
            placeholder="Tiffin Name"
            value={tiffinName}
            onChange={(e) => setTiffinName(e.target.value)}
          />
          <br />
          <input
            style={{
              border: "2px solid Green",
              margin: "10px",
              width: "30%",
              height: "150px",
            }}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <input
            style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
            type="text"
            placeholder="Category"
            value={tiffinCategory}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <input
            style={{ border: "2px solid Green", margin: "10px", width: "30%" }}
            type="text"
            placeholder="Image Link"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
          />
          <br />
          <input
            style={{ border: "2px solid Green", margin: "10px" }}
            type="text"
            placeholder="Price"
            value={tiffinPrice}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            style={{ border: "2px solid Green", margin: "10px" }}
            type="text"
            placeholder="Vendor Id"
            value={vendorId}
            onChange={(e) => setVendorId(e.target.value)}
          />
          <br />
          <br />
          <br />
          <b style={{ color: "greenyellow" }} />
          <button className="add-button" onClick={handleAddTiffin}>
            <h4>Add Tiffin</h4>
          </button>
        </form>
      </center>
    </div>
  );
}

export default AddTiffin;

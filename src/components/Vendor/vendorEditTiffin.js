import React, { useState } from "react";
import axios from "axios";
import config from "../../config";

function EditTiffin() {
  const [tiffinName, setTiffinName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleAddTiffin = () => {
    try {
      const responsePromise = axios.patch(
        `${config.backendUrl}/api/Vendors/updatetiffin`,
        {
          tiffinName,
          description,
          category,
          price,
          imageLink,
        }
      );
      // Handle successful tiffin addition

      responsePromise.then((response) => {
        console.log("Vendors/addtiffin response: ", response);
      });
    } catch (error) {
      // Handle tiffin addition error
    }
  };

  return (
    <div>
      <h1>Edit Tiffin</h1>
      <input
        type="text"
        placeholder="Tiffin Name"
        value={tiffinName}
        onChange={(e) => setTiffinName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Link"
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
      />
      <button onClick={handleAddTiffin}>Add Tiffin</button>
    </div>
  );
}

export default EditTiffin;

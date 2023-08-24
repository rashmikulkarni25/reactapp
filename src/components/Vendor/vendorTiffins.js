import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
import { Card } from "react-bootstrap";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function VendorTiffins(props) {
  const [tiffins, setTiffins] = useState([]);

  // useEffect(() => {
  //   fetchTiffins();
  // }, [fetchTiffins]);

  const fetchTiffins = useCallback(() => {
    try {
      const responsePromise = axios.get(
        `${config.backendUrl}/api/Vendors/mytiffins`,
        {
          params: {
            vendorId: props.vendorId, // TODO: Replace with actual vendor ID
          },
        }
      );

      responsePromise.then((response) => {
        setTiffins(response.data);
      });
    } catch (error) {}
  }, [props.vendorId]);

  useEffect(() => {
    fetchTiffins();
  }, [fetchTiffins]);

  const navigate = useNavigate();
  const addTiffin = () => {
    // const history = useHistory();
    navigate("/vendor-addtiffin");
  };

  const editTiffin = () => {
    // const history = useHistory();
    navigate("/vendor-edittiffin");
  };

  const deleteTiffin = () => {
    navigate("/vendor-edittiffin");
  };

  return (
    <center>
      <div className="container-tiffin">
        {/* <VendorTiffins vendorId={vendorId} /> */}
        <center>
          <h1>Tiffins</h1>
          <hr style={{ color: "greenyellow" }} />
          <button className="add-button" onClick={addTiffin}>
            <h4>Add Tiffin</h4>
          </button>
          <br />
          <br />
          <br />
          <center>
            <div className="card-container-tiffin">
              {tiffins.map((tiffin) => (
                <center>
                  <Card
                    key={tiffin.tiffinId}
                    style={{
                      width: "30rem",
                      marginBottom: "50px",
                      border: "5px solid olive",
                      display: "-ms-iline-grid",
                    }}
                    className="customCard"
                  >
                    <Card.Body>
                      <Card.Title style={{ color: "darkgreen" }}>
                        <h1>{tiffin.tiffinName}</h1>
                      </Card.Title>
                      <Card.Img
                        variant="top"
                        src={tiffin.imageLink}
                        className="cardImage"
                        alt={tiffin.tiffinId}
                        style={{ width: "400px", height: "200px" }}
                      />
                      <b>
                        <Card.Text>{tiffin.tiffinCategory}</Card.Text>
                        <Card.Text>{tiffin.description}</Card.Text>
                        <Card.Text>
                          <span>&#8377; </span>
                          {tiffin.tiffinPrice}
                        </Card.Text>
                      </b>

                      {/* <Card.Text>{tiffin.status}</Card.Text> */}

                      <CardActions style={{ justifyContent: "center" }}>
                        <IconButton
                          aria-label="add to favorites"
                          onClick={editTiffin}
                        >
                          <EditIcon color="primary" />
                        </IconButton>

                        <IconButton aria-label="share" onClick={deleteTiffin}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </CardActions>

                      {/* <Button
                        variant="warning"
                        onClick={editTiffin}
                        style={{ marginRight: "25px" }}
                      >
                        Edit
                      </Button>
                      <Button variant="danger" onClick={deleteTiffin}>
                        Delete
                      </Button> */}
                    </Card.Body>
                  </Card>
                </center>
              ))}
            </div>
          </center>
        </center>
      </div>
    </center>
  );
}

export default VendorTiffins;

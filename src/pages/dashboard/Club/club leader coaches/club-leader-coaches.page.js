import React, { useState, useEffect } from "react";

import "./club-leader-coaches.page.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import axios from "axios";

export function ClubLeaderCoaches() {
  // const [coach, setCoach] = useState([]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // get coach data
  useEffect(() => {
    axios
      .get("api/Coach")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // return () => {
    //     cleanup
    // }
  }, []);

  return (
    <div className="club-leader-coaches mt-5">
      <div className="container">
        <div className="btn-option mb-5 text-center">
          <button className="btn" type="button" onClick={handleOpen}>
            {" "}
            Add{" "}
          </button>
          <button className="btn"> Remove </button>
          <button className="btn"> Edit </button>
        </div>
        <div className="table-responsive">
          <table className="table text-center ">
            <thead>
              <tr>
                <th scope="col">Name:</th>
                <th scope="col">E-mail:</th>
                <th scope="col">Telefon:</th>
                <th scope="col">Team:</th>
                <th scope="col">Role:</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Coach</td>
                <td>E-mail</td>
                <td>@Tlf number</td>
                <td>U1</td>
                <td>Head Coach</td>
                <td>
                  {" "}
                  <button className="btn btn-success"> Activated </button>{" "}
                </td>
              </tr>

              <tr>
                <td>Coach</td>
                <td>E-mail</td>
                <td>@Tlf number</td>
                <td>U11</td>
                <td>Head Coach</td>
                <td>
                  {" "}
                  <button className="btn btn-danger">
                    {" "}
                    Non Activated{" "}
                  </button>{" "}
                </td>
              </tr>

              <tr>
                <td>Coach</td>
                <td>E-mail</td>
                <td>@Tlf number</td>
                <td>U12</td>
                <td>Head Coach</td>
                <td>
                  {" "}
                  <button className="btn btn-success"> Activated </button>{" "}
                </td>
              </tr>

              <tr>
                <td>Coach</td>
                <td>E-mail</td>
                <td>@Tlf number</td>
                <td>U13</td>
                <td>Head Coach</td>
                <td>
                  {" "}
                  <button className="btn btn-success"> Activated </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <div className="form-group">
                        <input type="" className="form-control" placeholder="" />
                    </div> */}
        </Box>
      </Modal>
      {/* Modal */}
    </div>
  );
}

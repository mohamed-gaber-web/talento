import React, { useState } from "react";

import "./playerWeek.page.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Activity } from "../Activites/Activity.page";

export const PlayerWeek = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#232323",
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
    border: "none",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="player-week">
      <div className="btn-option mb-5 text-center">
        <button className="btn" type="button" onClick={handleOpen}>
          {" "}
          Add{" "}
        </button>
        <button className="btn"> Remove </button>
        <button className="btn"> Edit </button>
      </div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Activity />
        </Box>
      </Modal>
      {/* Modal */}
    </div>
  );
};

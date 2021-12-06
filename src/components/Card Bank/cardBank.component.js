import React from "react";

import styles from "./cardBank.module.css";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import { BankPlayerPopup } from "../../pages/dashboard/Player Developing Bank/bank popup/bankPopup";
import { BankPlayerPopupOpret } from "../../pages/dashboard/Player Developing Bank/bank popup add/bankPopupAdd";

export const CardBankItem = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "#232323",
    border: "1px solid #707070",
    boxShadow: 24,
    p: 4,
    borderRadius: "25px",
    overflow: "hidden",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div onClick={handleOpen} className={styles.teamCard}>
        <div className={styles.teamCardImg}>
          <img
            className="img-responsive"
            src="https://dummyimage.com/300x200/000/fff"
            alt=""
          />
        </div>
        <div className={styles.teamCardInfo}>
          <h3> Sænke Slagskib </h3>
          <h5> Halvtliggende </h5>
          <p> U13-U19 </p>
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
          <BankPlayerPopupOpret />
        </Box>
      </Modal>
      {/* Modal */}
    </>
  );
};

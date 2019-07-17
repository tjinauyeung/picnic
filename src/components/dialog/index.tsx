import React from "react";
import "./styles.scss";

const Dialog = ({ isOpen, onClose, children }) => (
  <div className={isOpen ? "dialog is-open" : "dialog"} onClick={onClose}>
    <div className="dialog__content">{children}</div>
  </div>
);

export default Dialog;

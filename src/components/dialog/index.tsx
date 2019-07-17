import React from "react";
import "./styles.scss";

const Dialog = ({ isOpen, onClose, children }) => (
  <div className={isOpen ? "dialog dialog--open" : "dialog"}>
    <button className="dialog__close" onClick={onClose}>
      Close
    </button>
    <div className="dialog__content">{children}</div>
  </div>
);

export default Dialog;

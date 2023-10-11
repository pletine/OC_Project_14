import "./modal.scss";

import React from "react";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {props.children}
        <button onClick={props.onClose} className="close-modal">
          CLOSE
        </button>
      </div>
    </div>
  );
}

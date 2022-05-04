import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./ConnectModal.css";

const ConnectModal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <button className="connect-modal" onClick={props.onClose}>
        <div
          className="connect-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="connect-modal-header">
            <h4 className="connect-modal-title ">Connect adfda Wallet</h4>
          </div>
          <div className="connect-modal-body">{props.children}</div>
        </div>
      </button>
    </CSSTransition>,
    document.getElementById("root"),
  );
};

export default ConnectModal;

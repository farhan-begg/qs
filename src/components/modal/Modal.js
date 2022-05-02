import React, { useState } from "react";

const Modal = () => {
  const [openModal, setOpanModal] = useState(false);

  const handleButton = () => {
    setOpanModal(!openModal);
  };

  return (
    <>
      <div onClick={handleButton}>Button</div>
      {openModal ? (
        <div>
          <input />
          <input />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Modal;

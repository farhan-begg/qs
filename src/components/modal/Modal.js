import React, { useState } from "react";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  InputWrapper,
  CopyWrite,
  ConnectBtn,
} from "./styles.js";

const Modal = () => {
  const [openModal, setOpanModal] = useState(false);

  const handleButton = () => {
    setOpanModal(!openModal);
  };

  return (
    <>
      <div onClick={handleButton}>Button</div>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <h1 className="modal-content-title">MINT NFT</h1>
              <InputWrapper>
                <input />
                <input />
                {/* <Input /> */}

                <ConnectBtn className="mint-connect-btn">Mint</ConnectBtn>
              </InputWrapper>
              <CopyWrite>
                {" "}
                The information provided by Quantum Society is for general
                information We make no representation or warranty
              </CopyWrite>
            </ModalContent>
            <CloseModalButton aria-label="Close modal" />
          </ModalWrapper>
        </Background>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Modal;

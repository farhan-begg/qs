import React, { useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
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
  const { isAuthenticated, account, Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const handleButton = () => {
    setOpanModal(!openModal);
  };

  const mint = async (input) => {
    let options = {
      contractAddress: "0x952C34de67167E9A4ad826b1411D750cF3Ddff62",
      functionName: "mint",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_mintAmount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      params: {
        _to: account,
        _mintAmount: input,
      },
      msgValue: Moralis.Units.ETH(0.15 * input),
    };

    await contractProcessor.fetch({
      params: options,
    });
  };

  if (!isAuthenticated || !account) {
    return <div>Connect your wallet</div>;
  }
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

                <ConnectBtn
                  className="mint-connect-btn"
                  onClick={() => mint(2)}
                >
                  Mint
                </ConnectBtn>
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

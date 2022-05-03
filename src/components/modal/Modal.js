import { TextField } from "@material-ui/core";
import { Card } from "antd";
import React, { useState } from "react";
import "./Modal.css";
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
  const [value, setValue] = useState(null);
  const { isAuthenticated, account, Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const handleButton = () => {
    setOpanModal(!openModal);
  };

  const handleInput = (event) => {
    console.log(value);
    setValue(event.target.value);
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
      msgValue: Moralis.Units.ETH(0.05 * input),
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
      <button
        style={{
          position: "absolute",
          bottom: "40%",
          color: "white",
          cursor: "pointer",
        }}
        onClick={handleButton}
      >
        MINT
      </button>
      {openModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <h1 className="modal-content-title">MINT NFT</h1>
              <InputWrapper>
                <TextField
                  id="outlined-basic"
                  label="NFT Amount"
                  variant="outlined"
                  value={value}
                  style={{ margin: "10px" }}
                  onChange={handleInput}
                  type="number"
                />

                <Card> {value * 0.05}</Card>
                {/* <Input /> */}

                <ConnectBtn
                  className="mint-connect-btn"
                  onClick={() => mint(value)}
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
            <CloseModalButton aria-label="Close modal" onClick={handleButton} />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;

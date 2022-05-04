import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  InputWrapper,
  CopyWrite,
} from "./styles.js";
import "./Modal.css";
const Modal = () => {
  const [openModal, setOpanModal] = useState(false);
  const { isAuthenticated, account, Moralis } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  // const [mintInput, setMintInput] = useState(null);
  const [value, setValue] = useState(null);
  const handleButton = () => {
    setOpanModal(!openModal);
  };

  const mint = async (input) => {
    let options = {
      contractAddress: "0x1eF311a1e4fc4673D7463Ee7bd20Bd082785A9C2",
      functionName: "buy",
      abi: [
        {
          inputs: [
            {
              internalType: "uint8",
              name: "amount",
              type: "uint8",
            },
          ],
          name: "buy",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      params: {
        amount: input,
      },
      msgValue: Moralis.Units.ETH(0.15 * input),
    };

    await contractProcessor.fetch({
      params: options,
    });
  };

  const handleMint = (event) => {
    setValue(event.target.value);
  };

  if (!isAuthenticated || !account) {
    return (
      <div style={{ border: "2px solid purple" }}>Connect your wallet</div>
    );
  }
  return (
    <>
      <button
        className="btn"
        style={{
          position: "absolute",
          top: "50%",
          border: "2px solid purple",
          fontSize: "16px",
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
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Mint Amount"
                  variant="outlined"
                  value={value}
                  onChange={handleMint}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 2 } }}
                />
                <Typography style={{ marginTop: "10px" }}>
                  {" "}
                  Mint Amount {(value * 0.15).toFixed(2)} ETH
                </Typography>

                {/* <Input /> */}

                <button
                  style={{
                    marginTop: "20px",
                    border: "2px solid aqua",
                    fontSize: "12px",
                  }}
                  className="mint-connect-btn btn"
                  onClick={() => mint(value)}
                >
                  Mint
                </button>
              </InputWrapper>

              <div
                style={{
                  position: "relative",
                  bottom: "30px",
                  padding: "10px",
                  color: "red",
                }}
              >
                <p>WARNING!!!</p>
                Make Sure your Wallet is on the Ethereum Mainnet
              </div>

              <CopyWrite>
                {" "}
                The information provided by Quantum Society is for general
                information We make no representation or warranty
              </CopyWrite>
            </ModalContent>
            <CloseModalButton onClick={handleButton} aria-label="Close modal" />
          </ModalWrapper>
        </Background>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default Modal;

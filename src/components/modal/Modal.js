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

  const handleMint = (event) => {
    setValue(event.target.value);
  };

  if (!isAuthenticated || !account) {
    return <div>Connect your wallet</div>;
  }
  return (
    <>
      <button
        style={{ position: "absolute", top: "50%" }}
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
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
                />
                <Typography style={{ marginTop: "10px" }}>
                  {" "}
                  Mint Amount {value * 0.15}
                </Typography>

                {/* <Input /> */}

                <button
                  style={{ marginTop: "20px" }}
                  className="mint-connect-btn"
                  onClick={() => mint(value)}
                >
                  Mint
                </button>
              </InputWrapper>
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

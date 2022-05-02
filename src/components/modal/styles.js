import { Button } from "@material-ui/core";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 340px;
  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.58);
  background: white;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  padding: 2rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  margin: 1rem;

  .mint-connect-btn {
  }
`;

export const ConnectBtn = styled(Button)`
  padding: 0.5rem 0 0.5rem 0;
  color: #00749b;
  border: 2px solid;
  border-radius: 2rem;
  font-weight: 550;
  width: 100%;
  background-color: #7cddfe4a;
  margin-top: 20px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #00749b;
`;

export const InputWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

export const LogoImage = styled.img`
  max-width: 150px;
  position: absolute;
  top: 0px;
  left: 6px;
  object-fit: cover;
`;

export const CopyWrite = styled.p`
  color: grey;
  font-size: 12px;
`;

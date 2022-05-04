import { useMoralis } from "react-moralis";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import { connectors } from "./config";
// import { useStyles } from "../Navbar/styles";
import { CopyWrite } from "../modal/styles.js";
import ConnectModal from "../modal/ConnectModal";
import Modal from "../modal/Modal";
import { useStyles } from "./styles";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
};

function Account() {
  const classes = useStyles();
  const { authenticate, isAuthenticated, account, logout } = useMoralis();
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

  if (!isAuthenticated || !account) {
    return (
      <>
        <button onClick={() => setIsAuthModalVisible(true)}>
          Connect Wallet
        </button>

        <ConnectModal
          onClose={() => setIsAuthModalVisible(false)}
          show={isAuthModalVisible}
        >
          <Grid container spacing={1}>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <Grid item key={key} xs={6}>
                <div
                  style={styles.connector}
                  key={key}
                  onClick={async () => {
                    try {
                      await authenticate({
                        provider: connectorId,
                        signingMessage: "Connect Wallet to Quantum Society",
                      });
                      window.localStorage.setItem("connectorId", connectorId);
                    } catch (e) {
                      console.error(e);
                    }
                  }}
                >
                  <img src={icon} alt={title} style={styles.icon} />
                  <CopyWrite>{title}</CopyWrite>
                </div>
              </Grid>
            ))}
          </Grid>
        </ConnectModal>
      </>
    );
  }

  return (
    <>
      <button
        style={{ position: "absolute", top: "5%", right: "5%" }}
        className={classes.connectBtn}
        onClick={async () => {
          await logout();
          window.localStorage.removeItem("connectorId");
        }}
      >
        {account.substr(0, 5)}...{""}
        {account.substr(account.length - 4, 4)}
      </button>
      <Modal />
    </>
  );
}

export default Account;

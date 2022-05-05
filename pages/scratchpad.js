import React from "react";
import PrimaryButton from "components/PrimaryButton";
import Divider from "components/Divider";
import StatusButton from "components/StatusButton";
import SecondaryButton from "components/SecondaryButton";
import Photo from "components/Photo";

const ScratchPad = () => {
  return (
    <div style={styles.container}>
      <div style={styles.child}>
        <h1 style={{ textAlign: "center" }}>Components</h1>
      </div>
      <div style={styles.child}>
        <h3>Primary Button</h3>
        <p>Parameters: label, onClick, disabled, style</p>
        <PrimaryButton label="Hello" style={{ width: "150px" }} />
      </div>
      <div style={styles.child}>
        <h3>Secondary Button</h3>
        <p>Parameters: label, onClick, disabled, style</p>
        <SecondaryButton label="Welcome" style={{ width: "150px" }} />
      </div>
      <div style={styles.child}>
        <h3>Status Button</h3>
        <p>Parameters: label, onClick, disabled, status, style</p>
        <StatusButton label="World" status="error" style={{ width: "150px" }} />
      </div>
      <div style={styles.child}>
        <h3>Divider</h3>
        <p>Parameters: width</p>
        <Divider width={500} />
      </div>
      <div style={styles.child}>
        <h3>Image</h3>
        <p>Parameters: src, alt, width, height</p>
        <Photo src={"/img/bg1.jpg"} alt="restaurant" width={500} height={420} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  child: {
    margin: "20px",
    padding: "10px",
    width: "80%",
    border: "2px solid black",
  },
};

export default ScratchPad;

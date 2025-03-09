import React from "react";
import { FaSun } from "react-icons/fa";

function App() {
  return (
    <div style={styles.container}>
      <FaSun style={styles.sunIcon} />
      <h1 style={styles.text}>It is a great day to be grateful</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fffbcc",
  },
  sunIcon: {
    color: "#ffcc00",
    fontSize: "100px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default App;

import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      style={{
        width: "90vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      ></Spinner>
    </div>
  );
};

export default Loader;

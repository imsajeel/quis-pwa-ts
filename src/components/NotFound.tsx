import React from "react";
import Lottie from "react-lottie";
import EmptyAni from "../animations/empty.json";

const NotFound = () => {
  return (
    <div>
      <Lottie
        options={{
          animationData: EmptyAni,
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "300px",
          marginBottom: "1rem",
        }}
      />
    </div>
  );
};

export default NotFound;

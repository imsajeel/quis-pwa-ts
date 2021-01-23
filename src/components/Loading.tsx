import React from "react";
import Lottie from "react-lottie";
import LoadingAni from "../animations/loading.json";

export default function Loading() {
  return (
    <div>
      <Lottie
        options={{
          animationData: LoadingAni,
        }}
        height={"100%"}
        width={"100%"}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "700px",
        }}
      />
    </div>
  );
}

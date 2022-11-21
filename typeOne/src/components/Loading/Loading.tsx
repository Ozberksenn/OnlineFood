import React from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
  return <LottieView source={require("../../asset/loading.json")} autoPlay />;
};

export default Loading;

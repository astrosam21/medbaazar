import React from "react";
import useReactRouter from "use-react-router";

const Ayush = () => {
  const { history, location, match } = useReactRouter();
  console.log(match);
  return (
    <div style={{ width: window.innerWidth * 0.2, marginTop: 20 }}>Ayush</div>
  );
};
export default Ayush;

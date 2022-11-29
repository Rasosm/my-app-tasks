import { useState } from "react";

function ButtonChange() {
  const [shape, setShape] = useState(true);

  const change = () => {
    setShape((shape) => !shape);
  };

  return (
    <>
      <button onClick={change}>Change shape</button>
      <div
        className="shape"
        style={{ borderRadius: shape ? "50%" : "0%" }}
      ></div>
    </>
  );
}

export default ButtonChange;
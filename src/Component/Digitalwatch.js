import React, { useState } from "react";

const Color1 = () => {
  const [color, setcolor] = useState("");

  return (
    <>
      <div style={{ background: color, height: "500px", width: "500px" }}>
        <input
          type="text"
          value={color}
          onChange={(e) => setcolor(e.target.value)}
        />
      </div>
    </>
  );
};
export default Color1;

import React, { useState } from "react";

const Watch = () => {
  const time = new Date().toLocaleTimeString();

  const [ctime, setCtiime] = useState(time);

  const Update = () => {
    const time = new Date().toLocaleTimeString();
    setCtiime(time);
  };

  setInterval(Update, 1000);
  return (
    <>
      <div className="parentdiv">
        <div className="childdiv">
          <h1
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {ctime}
          </h1>
        </div>
      </div>
    </>
  );
};
export default Watch;

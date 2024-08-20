import React from "react";

const New = ({ user }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Hello {user}, you have permission to be here</h1>
    </div>
  );
};

export default New;

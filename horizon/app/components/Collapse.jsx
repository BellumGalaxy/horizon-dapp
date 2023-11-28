import React from "react";

const MyCollapse = ({ title, children }) => {
  return (
    <div>
      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">{title}</div>
        <div className="collapse-content">{children}</div>
      </div>
    </div>
  );
};

export default MyCollapse;

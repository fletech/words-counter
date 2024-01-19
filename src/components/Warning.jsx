import React from "react";

export default function Warning({ warning }) {
  return (
    <p className={`warning ${warning.show && "warning-" + warning.type}`}>
      {warning.message}
    </p>
  );
}

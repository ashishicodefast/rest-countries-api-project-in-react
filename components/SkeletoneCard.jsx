import React from "react";

export default function SkeletoneCard() {
  return Array.from({ length: 8 }).map((el,i) => {
    return (
      <div key={i} className="shimmerCard">
        <div className="imgCard"></div>
        <div className="infoCard">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  });
}

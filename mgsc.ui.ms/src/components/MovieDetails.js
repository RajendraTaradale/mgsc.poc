import React, { useEffect } from "react";
import "./style.css";

export default function MovieDetails({ mv }) {
  return (
    mv["Poster"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="moviesTile"
        onClick={() => window.open(mv["Title"])}
      >
        <img className="moviesTile__img" src={mv["Stills"]} />
        <p className="moviesTile__name" key={1}>
          {mv["Plot"]}
        </p>
      </div>
    )
  );
}
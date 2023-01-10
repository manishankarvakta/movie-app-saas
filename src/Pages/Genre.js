import React from "react";
import { useParams } from "react-router-dom";

function Genre() {
  const { id } = useParams();
  return <div>Genre ID: {id}</div>;
}

export default Genre;

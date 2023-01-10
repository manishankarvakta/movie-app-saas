import React from "react";
import { Ratio } from "react-bootstrap";

function Watch({ imdb_id }) {
  return (
    <Ratio aspectRatio="16x9">
      <iframe
        id={`iframe ${imdb_id}`}
        src={`https://2embed.org/embed/movie?imdb=${imdb_id}`}
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </Ratio>
  );
}

export default Watch;

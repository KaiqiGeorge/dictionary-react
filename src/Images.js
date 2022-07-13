import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images.length) {
    return (
      <section className="images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image.src.landscape}
                    className="img-fluid"
                    alt={image.photographer}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

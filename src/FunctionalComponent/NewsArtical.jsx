import React from "react";

export default function NewsArtical(props) {
  return (
    <div className="card">
      <img
        src={props.pic ? props.pic : "/images/noimage.jpeg"}
        className="card-img-top"
        alt="..."
        height={220}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="item">
          <p>{props.source}</p>
          <p>{new Date(props.date).toDateString()}</p>
        </div>
        <hr />
        <p className="card-text">{props.description}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary background text-dark w-100 mybtn"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
}

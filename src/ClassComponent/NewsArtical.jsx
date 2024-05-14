import React, { Component } from "react";

export default class NewsArtical extends Component {
  render() {
    return (
      <div className="card">
        <img
          src={this.props.pic ? this.props.pic : "/images/noimage.jpeg"}
          className="card-img-top"
          alt="..."
          height={220}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <div className="item">
            <p>{this.props.source}</p>
            <p>{new Date(this.props.date).toDateString()}</p>
          </div>
          <hr />
          <p className="card-text">{this.props.description}</p>
          <a
            href={this.props.url}
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
}

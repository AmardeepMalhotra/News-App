import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsArtical from "../ClassComponent/NewsArtical";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }
  async getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${
      this.props.search ? this.props.search : this.props.q
    }&pageSize=12&page=${this.state.page}&to=2024-05-08&language=${
      this.props.language
    }&sortBy=popularity&apiKey=9a4db40569b84a1dab1952e44d47ecad
    `);
    response = await response.json();
    if (response.articles) {
      this.setState({
        articles: response.articles.filter((x) => x.title !== "[Removed]"),
        totalResults: response.totalResults,
      });
    }
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(`https://newsapi.org/v2/everything?q=${
      this.props.search ? this.props.search : this.props.q
    }&pageSize=12&page=${this.state.page}&to=2024-05-08&language=${
      this.props.language
    }&sortBy=popularity&apiKey=9a4db40569b84a1dab1952e44d47ecad
    `);
    response = await response.json();
    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(
          response.articles.filter((x) => x.title !== "[Removed]")
        ),
      });
    }
  };
  componentDidMount() {
    this.getAPIData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.getAPIData();
  }
  render() {
    return (
      <div className="container-fluid">
        <h5 className="background text-center p-2 my-2 text-capitalize">
          {this.props.search ? this.props.search : this.props.q} News Articles
        </h5>
        <InfiniteScroll
          className="scroller"
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={
            <div className="text-center my-4 py-4">
              <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>No More Articles</b>
            </p>
          }
        >
          <div className="row">
            {this.state.articles.map((item, index) => {
              return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                  <NewsArtical
                    title={item.title}
                    source={item.source.name}
                    date={item.publishedAt}
                    pic={item.urlToImage}
                    description={item.description}
                    url={item.url}
                    content={item.content}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

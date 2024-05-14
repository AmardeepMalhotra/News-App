import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsArtical from "./NewsArtical";

export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);
  async function getAPIData() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${
      props.search ? props.search : props.q
    }&pageSize=12&page=${page}&to=2024-05-08&language=${
      props.language
    }&sortBy=popularity&apiKey=9a4db40569b84a1dab1952e44d47ecad
    `);
    response = await response.json();
    if (response.articles) {
      setArticles(response.articles.filter((x) => x.title !== "[Removed]"));
      setTotalResults(response.totalResults);
    }
  }

  async function fetchMoreData() {
    setPage(page + 1);
    let response = await fetch(`https://newsapi.org/v2/everything?q=${
      props.search ? props.search : props.q
    }&pageSize=12&page=${page}&to=2024-05-08&language=${
      props.language
    }&sortBy=popularity&apiKey=9a4db40569b84a1dab1952e44d47ecad
    `);
    response = await response.json();
    if (response.articles) {
      setArticles(
        articles.concat(
          response.articles.filter((x) => x.title !== "[Removed]")
        )
      );
    }
  }
  useEffect(() => {
    getAPIData();
  }, [props]);
  return (
    <div className="container-fluid">
      <h5 className="background text-center p-2 my-2 text-capitalize">
        {props.search ? props.search : props.q} News Articles
      </h5>
      <InfiniteScroll
        className="scroller"
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
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
          {articles.map((item, index) => {
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

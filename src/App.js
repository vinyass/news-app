import React, { Component } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import NewsFilter from "./components/NewsFilter/NewsFilter";
import NewsDisplay from "./components/NewsDisplay/NewsDisplay";
import { fetchNews } from "./api/news";

import "./App.css";

class App extends Component {
  state = {
    articles: [],
    currentPage: 1,
  };

  async componentDidMount() {
    document.addEventListener(
      "keydown",
      (e) => {
        if (
          e.keyCode === 39 &&
          this.state.currentPage !== this.state.articles.length
        ) {
          this.next();
        }

        if (e.keyCode === 37 && this.state.currentPage !== 0) {
          this.prev();
        }
      },
      false
    );
    const articles = await fetchNews();
    this.setState({ articles });
  }

  prev = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: prevState.currentPage - 1,
      };
    });
  };

  next = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: prevState.currentPage + 1,
      };
    });
  };

  updateData = async ({ country, category, searchText }) => {
    const articles = await fetchNews(country, category, searchText);
    this.setState({ articles, currentPage: 1 });
  };

  render() {
    const { currentPage, articles } = this.state;
    return (
      <div className="container">
        <NewsFilter updateData={this.updateData} />

        <div className="article-container">
          <Button disabled={currentPage === 1} onClick={this.prev}>
            <ArrowBack />
          </Button>
          {articles.length !== 0 ? (
            <NewsDisplay currentNews={articles[currentPage - 1]} />
          ) : (
            <CircularProgress />
          )}
          <Button
            disabled={currentPage === articles.length}
            onClick={this.next}
          >
            <ArrowForward />
          </Button>
        </div>
      </div>
    );
  }
}

export default App;

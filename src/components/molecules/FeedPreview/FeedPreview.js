import React, { Component } from 'react';
import styled from 'styled-components';
let Parser = require('rss-parser');
let parser = new Parser();

const Wrapper = styled.div`
  padding: 10px;
  
`;

const SingleFeed = styled.div`
  display: flex;
  flex-direction: column;
 margin: 20px 10px;
`;
export default class FeedPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      feed: [],
      fetchSuccess: true,
      searchValue: '',
      newFeed: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        fetchSuccess: true,
      });
    }
  }

  fetchFeed = (url) => {
    let feed = parser.parseURL(url);
    let feedArray = [];
    feed
      .then((result) => {
        result.items.forEach((item) => {
          feedArray.push({
            title: item.title,
            link: item.link,
            content: item.content,
          });
        });
        this.setState({
          feed: feedArray,
          fetchSuccess: true,
          url: this.props.url,
        });
      })
      .catch((reason) => {
        console.log(reason);
        this.setState({
          feed: feedArray,
          fetchSuccess: false,
        });
      });
  };

  inputChange = (e) => {
    let keyword = e.target.value;
    let newFeed = this.state.feed.filter(
      (item) => item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1,
    );

    this.setState({
      [e.target.name]: e.target.value,
      newFeed: newFeed,
    });
  };

  render() {
    const { searchValue, fetchSuccess } = this.state;
    return (
      <div>
        <button onClick={() => this.fetchFeed(this.props.url)}>
          {fetchSuccess ? 'Fetch rss feed' : 'Retry'}
        </button>
        <p>search</p>
        <input type="text" name="searchValue" onChange={(e) => this.inputChange(e)} />
        <Wrapper>
          {this.state[searchValue ? 'newFeed' : 'feed'].map(({ title, link, content }) => (
            <SingleFeed key={title}>
              <h2>{title}</h2>
              <a href={link} />
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </SingleFeed>
          ))}
        </Wrapper>
      </div>
    );
  }
}

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import FeedPreview from '../../components/molecules/FeedPreview/FeedPreview';

class Root extends React.Component {
  state = {
    urlInputValue: '',
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div>
            <input type="text" name="urlInputValue" onChange={(e) => this.inputChange(e)} />
            <FeedPreview url={this.state.urlInputValue} />
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default Root;

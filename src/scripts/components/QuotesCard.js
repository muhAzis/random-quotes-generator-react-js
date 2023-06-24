import '../../styles/QuotesCard.css';
import React from 'react';
import Navigation from './Navigation';
import Translate from './Translate';
import axios from 'axios';
import translate from 'google-translate-api-x';

class QuotesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      category: 'all',
      copy: false,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.translateQuotes = this.translateQuotes.bind(this);
    this.handleCopyQuote = this.handleCopyQuote.bind(this);
  }

  categoryChange(category) {
    this.setState({
      category: category,
    });
  }

  translateQuotes() {
    const trans = async () => {
      try {
        const response = await translate(this.state.quote, { to: 'id', client: 'gtx', forceBatch: false });

        console.log(response.text);
      } catch (error) {
        console.log(error);
      }
    };

    trans();
  }

  handleCopyQuote() {
    const copyQuote = async () => {
      try {
        await navigator.clipboard.writeText(`${this.state.quote}\n\n"${this.state.author}"`);

        this.setState({
          copy: true,
        });
      } catch (error) {
        alert(error);
      }
    };

    copyQuote();
  }

  componentDidMount() {
    this.setState({
      quote: '',
      author: '',
      copy: false,
    });
    const baseUrl = `https://api.api-ninjas.com/v1/quotes${this.state.category === 'all' ? '' : `?category=${this.state.category}`}`;
    const getQuote = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: baseUrl,
          headers: {
            'x-api-key': process.env.REACT_APP_USER_KEY,
          },
        });

        if (response.error) {
          alert(response.message);
        } else {
          this.setState({
            quote: response.data[0].quote,
            author: response.data[0].author,
          });
        }
      } catch (error) {
        alert(error);
      }
    };

    getQuote();
  }

  render() {
    const copyLogo = () => {
      if (!this.state.copy) {
        return 'bi bi-clipboard-fill';
      }
      return 'bi bi-clipboard-check-fill';
    };

    const quote = () => {
      if (this.state.quote) {
        return (
          <>
            <div className="row1">
              <p id="text">{this.state.quote}</p>
            </div>
            <div className="row2">
              <button id="copyBtn" onClick={this.handleCopyQuote}>
                <i class={copyLogo()}></i>
              </button>
              <p id="author">"{this.state.author}"</p>
            </div>
          </>
        );
      }
      return (
        <>
          <div id="loading"></div>
        </>
      );
    };

    return (
      <div className="container">
        <div id="quote-box">{quote()}</div>

        <Navigation event={this.componentDidMount} change={this.categoryChange} />
        <Translate translate={this.translateQuotes} />
      </div>
    );
  }
}

export default QuotesCard;

import '../../styles/Navigation.css';
import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [
        'all',
        'age',
        'alone',
        'amazing',
        'anger',
        'architecture',
        'art',
        'attitude',
        'beauty',
        'best',
        'birthday',
        'business',
        'car',
        'change',
        'communications',
        'computers',
        'cool',
        'courage',
        'dad',
        'dating',
        'death',
        'design',
        'dreams',
        'education',
        'environmental',
        'equality',
        'experience',
        'failure',
        'faith',
        'family',
        'famous',
        'fear',
        'fitness',
        'food',
        'forgiveness',
        'freedom',
        'friendship',
        'funny',
        'future',
        'god',
        'good',
        'government',
        'graduation',
        'great',
        'happiness',
        'health',
        'history',
        'home',
        'humor',
        'imagination',
        'inspirational',
        'intelligence',
        'jealousy',
        'knowledge',
        'leadership',
        'learning',
        'legal',
        'life',
        'love',
        'marriage',
        'medical',
        'men',
        'mom',
        'money',
        'morning',
        'movies',
        'success',
      ],
      currentList: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      currentList: e.target.value,
    });
    this.props.change(e.target.value);
  }

  render() {
    const categoryList = this.state.categoryList.map((item, i) => (
      <option value={item} key={item + i}>
        {item}
      </option>
    ));

    return (
      <div className="navContainer">
        <button id="new-quote" onClick={this.props.event}>
          New Quote
        </button>
        <div className="categoryBox">
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={this.handleChange}>
            {categoryList}
          </select>
        </div>
        <div className="shareBtn">
          <a className="share" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank">
            <i className="bi bi-twitter"></i>
          </a>
          <a className="share" id="facebook-quote" href="https://facebook.com/" target="_blank">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Navigation;

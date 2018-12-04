import React from 'react';
import $ from 'jquery';
import List from './List.jsx';
import KeywordSearch from './keywordSearch.jsx';
import ZipSearch from './zipSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      beers: [],
      searchKeyword: '',
      zip: '',
      zipSortedBeers: [],
      nearbyBeers:[],
      showZipSearch: true,
      showKeywordSearch: false,
      showList: false
    }
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleZipSearch = this.handleZipSearch.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleKeywordSearch = this.handleKeywordSearch.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  afterSetStateFinished() {
    this.setState({
      showZipSearch: false,
      showKeywordSearch: true,
      showList: true,
      searchKeyword: ''
    })
  }

  handleZipChange(e) {
    this.setState({zip: e.target.value});
  }

  handleZipSearch(e) {
    e.preventDefault();
    const zipBeers = [];
    this.state.beers.forEach((beer) => {
      if (beer.zipCode.toString() === this.state.zip) {
        zipBeers.push(beer);
      }
    })
    this.setState({
      showZipSearch: false,
      showKeywordSearch: true,
      zipSortedBeers: zipBeers,
      zip: ''
    })
  }

  handleKeywordSearch(e) {
    e.preventDefault();
    const closeBeers = [];
    this.state.zipSortedBeers.forEach((beer) => {
      if (beer.review.toLocaleLowerCase().includes(this.state.searchKeyword.toString().toLocaleLowerCase())) {
        closeBeers.push(beer);
      }
    })
    this.setState({
      nearbyBeers: closeBeers,
    }, () => {
      this.afterSetStateFinished();
    });
  }

  handleHomeClick(e) {
    this.setState({
      showZipSearch: true,
      showKeywordSearch: false,
      showList: false
    })
  }

  handleKeywordChange(e) {
    this.setState({ searchKeyword: e.target.value});
  }



  componentDidMount() {
    $.ajax({
      url: '/beers', 
      success: (data) => {
        this.setState({
          beers: data
        })
        //console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    const showZipSearch = this.state.showZipSearch;
    const showKeywordSearch = this.state.showKeywordSearch;
    const showList = this.state.showList;

    if (showZipSearch && !showKeywordSearch && !showList) {
      return (
        <div>
      <h1>Beer Me Please <span><img height="40px" width="40px" src="https://png2.kisspng.com/sh/193c0d32b3755108e5a69bfec2381cd0/L0KzQYm3U8A6N5VuiZH0aYP2gLBuTgJwd6Uyetducj3whbi0gvVmel5shNN8c4fkgra0gBxqeF5miuY2YnXogn7qjPlxaaN5i58AYXG1RLO4hcAyQWY8T5CBN0i3QoGAV8E2OmE6UKcAMEKzQIe8TwBvbz==/kisspng-root-beer-mug-beer-glassware-clip-art-beer-cliparts-5aa24b1e019577.6784207715205855020065.png" ></img></span></h1> 
      <ZipSearch handleZipChange={this.handleZipChange} zip={this.state.zip} handleZipSearch={this.handleZipSearch} />
    </div>
      )
    } else if (showKeywordSearch && !showZipSearch && !showList) {
      return (
        <div>
        <h1>Beer Me Please <span><img height="40px" width="40px" src="https://png2.kisspng.com/sh/193c0d32b3755108e5a69bfec2381cd0/L0KzQYm3U8A6N5VuiZH0aYP2gLBuTgJwd6Uyetducj3whbi0gvVmel5shNN8c4fkgra0gBxqeF5miuY2YnXogn7qjPlxaaN5i58AYXG1RLO4hcAyQWY8T5CBN0i3QoGAV8E2OmE6UKcAMEKzQIe8TwBvbz==/kisspng-root-beer-mug-beer-glassware-clip-art-beer-cliparts-5aa24b1e019577.6784207715205855020065.png" ></img></span></h1> <span className="logo"></span>
        <KeywordSearch handleKeywordChange={this.handleKeywordChange} handleKeywordSearch={this.handleKeywordSearch} searchKeyword={this.state.searchKeyword}/>
        </div>
      )
    } else if (showKeywordSearch && !showZipSearch && showList) {
      return (
        <div>
        <h1>Beer Me Please <span><img height="40px" width="40px" src="https://png2.kisspng.com/sh/193c0d32b3755108e5a69bfec2381cd0/L0KzQYm3U8A6N5VuiZH0aYP2gLBuTgJwd6Uyetducj3whbi0gvVmel5shNN8c4fkgra0gBxqeF5miuY2YnXogn7qjPlxaaN5i58AYXG1RLO4hcAyQWY8T5CBN0i3QoGAV8E2OmE6UKcAMEKzQIe8TwBvbz==/kisspng-root-beer-mug-beer-glassware-clip-art-beer-cliparts-5aa24b1e019577.6784207715205855020065.png" ></img></span></h1> <span className="logo"></span>
          <KeywordSearch handleKeywordChange={this.handleKeywordChange} handleKeywordSearch={this.handleKeywordSearch} searchKeyword={this.state.searchKeyword} handleHomeClick={this.handleHomeClick}/>
          <List nearbyBeers={this.state.nearbyBeers}/>
        </div>
      )
    }
  }
}

export default App;

import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Splash from './Components/Splash';
import Comic from './Components/Comic'
import SearchResults from "./Components/SearchResults";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      queryText: "",
      comics: [],
      isLoading: false
    }

    this.getComics = this.getComics.bind(this);
  }

  clearComics = () => {
    if (this.state.queryText !== "") {
      this.setState({
        isLoading: true,
        comics: []
      })
    } else {
      this.setState({
        isLoading: false,
        comics: []
      })
    }
  }

  async getComics() {
    if (this.state.queryText !== "") {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${this.state.queryText}&apikey=94958cf395c87b6d84674a87670e1fec`);
      const myJson = await response.json();
      const results = myJson.data.results;
      let fetchedComics = [];
      for (let i = 0; i < results.length; i++) {
        fetchedComics.push(<Comic name={results[i].title} img={`${results[i].thumbnail.path}.${results[i].thumbnail.extension}`} url={results[i].urls[0].url} key={i} />);
      }
      this.setState({
        isLoading: false,
        comics: fetchedComics
      })
    } else {
      this.clearComics();
    }

  }

  handleInput = event => {
    this.setState({
      queryText: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar handleInput={this.handleInput} getComics={this.getComics} clearComics={this.clearComics} comics={this.state.comics} />
        {this.state.comics.length > 0 ? <SearchResults name={this.state.queryText} queryText={this.state.queryText} comics={this.state.comics} /> : <Splash isLoading={this.state.isLoading} />}
      </div>
    )
  }
}


export default App;


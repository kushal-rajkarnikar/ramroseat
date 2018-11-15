import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Movies from './components/movies';

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=fcdfe84d';

let DEFAULT_QUERY = '&s=the+rock&type=movie';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],   
      nowshowing: [],   
      watchlist: [], 
      favourites: []     
    };
  }

  componentDidMount() {        
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())      
      .then(data => this.setState({ movies: data.Search}));
  }

  // state = {
  //   movies:[
  //     { 
  //       id: 1, name: "Bohemian Rhapsody", director: 'Byan Singer', stars: ["Rami Malek", "Lucy Boynton", "Gwilym Lee"], imdbRating: "8.4", releaseDate: "2 November 2018", runtime: "2h 14min" 
  //     },
  //     {
  //       id: 2, name: "Dunkirk", director: 'Christopher Nolan', stars: ["Fionn Whitehead", "Barry Keoghan", "Mark Rylance"], imdbRating: "7.9", releaseDate: "21 July 2017", runtime: "1hr 46min" 
  //     },
  //     {
  //       id: 3, name: "The Hitman's Bodyguard", director: 'Patrick Hughes', stars: ["Ryan Reynolds", "Samuel L. Jackson", "Gary Oldman"], imdbRating: "6.9", releaseDate: "18 August 2017", runtime: "1hr 58min"
  //     },
  //     {
  //       id: 4, name: "The Nun", director: 'Corin Handy', stars: ["Demián Bichir", "Taissa Farmiga", "Jonas Bloquet"], imdbRating: "5.6", releaseDate: "7 September 2018", runtime: "96min"
  //     },      
  //   ]    
  // }
  
  addToWatchList = imdbID =>{
      console.log('add  ' + imdbID + ' to watchlist');
  }

  render() {

    const { movies} = this.state;    
    
    return (
      <React.Fragment>
        <Header></Header>
        <Slider></Slider>
        <div className="album py-5 bg-light">
        <main className="container">
          <Movies onAddToWatchlist={this.addToWatchList}movies={movies}></Movies>
        </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

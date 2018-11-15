import React, { Component } from 'react'
import Movie from './movie';
import { Row} from 'reactstrap';

export default class Movies extends Component {
  

  render() {

        const { movies, onAddToWatchlist, onAddToFavourites } = this.props;            
    
    return (            
          <Row>
            
                {movies.map(movie =>
                      <Movie key="movie.imdbID" onAddToWatchlist={onAddToWatchlist} onAddToFavourites={onAddToFavourites} movie={movie}></Movie>                       
                )}
                             
          </Row>      
    );
  }
}

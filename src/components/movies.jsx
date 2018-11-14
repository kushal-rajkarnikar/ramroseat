import React, { Component } from 'react'
import Movie from './movie';
import { Row} from 'reactstrap';

export default class Movies extends Component {
  

  render() {

    const { movies, onAddToWatchlist } = this.props;    
    
    return (            
          <Row>
            
                {movies.map(movie =>
          <Movie key="movie.imdbID" onAddToWatchlist={onAddToWatchlist} movie={movie}></Movie>                       
                )}
                             
          </Row>      
    );
  }
}

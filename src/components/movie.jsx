import React, { Component } from 'react'
import { Col } from 'reactstrap';

const API = 'http://www.omdbapi.com/?apikey=fcdfe84d&i=';

export default class Movie extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     movie: [],
  //   };
  // }


  state = {
    movie: [],
  };

  componentDidMount() {
    
    fetch(API + this.props.movie.imdbID)
      .then(response => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...        
        this.setState({ movie: responseJSON }) 
      });
      // .then(data => this.setState({ movie: data }));
    
  }

  render() {    

    const { Runtime, Released, Plot } = this.state.movie;        
    
    return (
      <Col md="4">
            <div className="card mb-4 shadow-sm">
                
                    <div className="card-body" style={{ fontSize: "14px"}}>
                    <img className="card-img-top" src={this.props.movie.Poster} data-holder-rendered="true" style={{height: "auto", width: "100%", display: "block"}}/>                        
                        <h4 className="movie-name">{this.props.movie.Title}</h4>
                        <small className="text-muted">Runtime: {Runtime}</small> <br/>
                        <small className="text-muted">Release Date: {Released}</small>
                        {/* <div>Director: {this.props.movie.director}</div>
                        <div>Cast: <br/>{this.props.movie.stars}</div>                         */}
                        <div className="plot">
                        { Plot }
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <button onClick={this.props.onAddToWatchlist(this.props.movie.imdbID)}type="button" className="btn btn-sm btn-outline-secondary">Add to Watchlist</button>                            
                        </div>
                    </div>
              </div>
      </Col> 
    )
  }
}

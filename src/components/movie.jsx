import React, { Component } from 'react'
import { Col } from 'reactstrap';

const API = 'https://www.omdbapi.com/?apikey=fcdfe84d&i=';

export default class Movie extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     movie: [],
  //   };
  // }


  state = {
    movie: [],
    watchlist: false,
    watchlisttext: "+ Add",
    favourite: false
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

  addToWatchList = () => {
    let watchlist = true;
    let watchlisttext = "Addded";
    console.log(this.state.watchlist);
    this.setState({ watchlist: watchlist, watchlisttext: watchlisttext });
    console.log(this.state.watchlist);
  }

  getWatchlistClass(){
    let classes="btn btn-sm ";    
    classes += (this.state.watchlist? "btn" : "btn-primary");
    return classes;
  }

  render() {        

    const { Runtime, Released, Plot, Director, Actors } = this.state.movie;        
    
    return (
      <Col xl="4" lg="6" className="mb-4">
            <div className="card shadow-sm movie-card" style={{height: "100%"}}>
                
                    <div className="card-body d-flex" style={{ fontSize: "14px"}}>
                    <div>
                      <img className="card-img-top" src={this.props.movie.Poster} data-holder-rendered="true"/>                        
                    </div>
                    <div className="movie-content">
                        <h5 className="movie-name">{this.props.movie.Title}</h5>
                        <span className="text-muted">Runtime: {Runtime}</span> <br/>
                        <span className="text-muted">Release Date: {Released}</span>
                        <div>Director: {Director}</div>
                        <div>Cast: <br/>{Actors}</div>                  
                        {/* <div className="plot">
                        { Plot }
                        </div> */}
                        <div className="d-flex justify-content-between align-items-center">     

                          <button onClick={() => { this.props.onAddToWatchlist(this.props.movie.imdbID); this.addToWatchList();}} type="button" className={this.getWatchlistClass()}>{this.state.watchlisttext} to Watchlist</button>                            
                          <button onClick={() => this.props.onAddToFavourites(this.props.movie.imdbID)} type="button" className="btn btn-sm btn-outline-secondary float=right"><i style={{color: "red"}} className="fa fa-heart"></i></button>                            
                        </div>
                    </div>
                </div>
            </div>
      </Col> 
    )
  }
}

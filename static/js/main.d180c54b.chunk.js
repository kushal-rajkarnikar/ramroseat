(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),i=a.n(o),c=(a(21),a(23),a(25),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),d=(a(27),a(3)),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.watchlist,a=e.favourites;return r.a.createElement(d.f,{className:"fixed-top",color:"dark",dark:!0,expand:"md"},r.a.createElement(d.b,null,r.a.createElement(d.c,{navbar:!0,style:{width:"100%"}},r.a.createElement(d.g,{href:"/"},"ramroseat"),r.a.createElement(d.d,{style:{marginLeft:"auto",marginRight:"15px"}},r.a.createElement(d.e,{href:"#",style:{color:"white"}},"Now Showing")),r.a.createElement(d.d,{style:{marginRight:"15px"}},r.a.createElement(d.e,{href:"#",style:{color:"white"}},"Watchlist",r.a.createElement("span",{style:{marginLeft:"5px"},className:"badge badge-primary"},t.length))),r.a.createElement(d.d,null,r.a.createElement(d.e,{href:"#",style:{color:"white"}},"Favourites",r.a.createElement("span",{style:{marginLeft:"5px"},className:"badge badge-primary"},a.length))))))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.b,null,r.a.createElement(d.h,null,r.a.createElement(d.a,{xs:"12"},"slider comes from here")))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movie:[],watchlist:!1,watchlisttext:"+ Add",favourite:!1},a.addToWatchList=function(){console.log(a.state.watchlist),a.setState({watchlist:!0,watchlisttext:"Addded"}),console.log(a.state.watchlist)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=fcdfe84d&i="+this.props.movie.imdbID).then(function(e){return e.json()}).then(function(t){e.setState({movie:t})})}},{key:"getWatchlistClass",value:function(){var e="btn btn-sm ";return e+=this.state.watchlist?"btn":"btn-primary"}},{key:"render",value:function(){var e=this,t=this.state.movie,a=t.Runtime,n=t.Released,o=(t.Plot,t.Director),i=t.Actors;return r.a.createElement(d.a,{xl:"4",lg:"6",className:"mb-5"},r.a.createElement("div",{className:"card movie-card",style:{height:"100%"}},r.a.createElement("div",{className:"card-body d-flex flex-column",style:{fontSize:"14px"}},r.a.createElement("div",{className:"d-flex mb-2"},r.a.createElement("div",null,r.a.createElement("img",{className:"card-img-top",src:this.props.movie.Poster,"data-holder-rendered":"true"})),r.a.createElement("div",{className:"movie-content"},r.a.createElement("h5",{className:"movie-name"},this.props.movie.Title),r.a.createElement("span",{className:"text-muted"},"Runtime: ",a)," ",r.a.createElement("br",null),r.a.createElement("span",{className:"text-muted"},"Release Date: ",n),r.a.createElement("div",null,"Director: ",o),r.a.createElement("div",null,"Cast: ",r.a.createElement("br",null),i))),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center actions"},r.a.createElement("button",{onClick:function(){e.props.onAddToWatchlist(e.props.movie.imdbID),e.addToWatchList()},type:"button",className:this.getWatchlistClass()},this.state.watchlisttext," to Watchlist"),r.a.createElement("button",{onClick:function(){return e.props.onAddToFavourites(e.props.movie.imdbID)},type:"button",className:"btn btn-sm btn-outline-secondary float=right"},r.a.createElement("i",{style:{color:"red"},className:"fa fa-heart"}))))))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onAddToWatchlist,n=e.onAddToFavourites;return r.a.createElement(d.h,null,t.map(function(e){return r.a.createElement(p,{key:"movie.imdbID",onAddToWatchlist:a,onAddToFavourites:n,movie:e})}))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).addToWatchList=function(e){var t=a.state.watchlist;t.includes(e)||t.push(e),a.setState({watchlist:t})},a.addToFavourites=function(e){var t=a.state.favourites;t.includes(e)||t.push(e),a.setState({favourites:t})},a.state={movies:[],nowshowing:[],watchlist:[],favourites:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?i=tt3896198&apikey=fcdfe84d&s=the+rock&type=movie").then(function(e){return e.json()}).then(function(t){return e.setState({movies:t.Search})})}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.watchlist,n=e.favourites;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{watchlist:a,favourites:n}),r.a.createElement(v,null),r.a.createElement("div",{className:"album py-5 bg-light home-bg"},r.a.createElement("main",{className:"container"},r.a.createElement(f,{onAddToWatchlist:this.addToWatchList,onAddToFavourites:this.addToFavourites,movies:t}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.d180c54b.chunk.js.map
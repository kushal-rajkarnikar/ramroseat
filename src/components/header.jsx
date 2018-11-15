import React, { Component } from 'react';
import { Nav, Navbar, Container, NavbarBrand, NavItem, NavLink} from 'reactstrap';

class Header extends Component{
    render(){

        const { watchlist, favourites } = this.props;        

        return(
            // <div className="navbar navbar-dark bg-dark shadow-sm">
            //     <div className="container d-flex justify-content-between">
            //         <a href="#" className="navbar-brand d-flex align-items-center">
            //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            //             <strong>Album</strong>
            //         </a>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //     </div>
            // </div>

            <Navbar className="fixed-top" color="dark" dark expand="md">
                <Container>
                    <Nav navbar style={{width: "100%"}}>
                    <NavbarBrand href="/">ramroseat</NavbarBrand>     
                    <NavItem style={{ marginLeft: "auto", marginRight: "15px"}}>
                        <NavLink href="#" style={{color: "white"}}>Now Showing</NavLink>
                    </NavItem>
                        <NavItem style={{ marginRight: "15px"}}>
                            <NavLink href="#" style={{ color: "white" }}>Watchlist<span style={{ marginLeft: "5px"}} className="badge badge-primary">{watchlist.length}</span></NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink href="#" style={{ color: "white" }}>Favourites<span style={{ marginLeft: "5px" }} className="badge badge-primary">{favourites.length}</span></NavLink>
                    </NavItem>
                    </Nav>
                </Container>
            </Navbar>

        );
    }
}

export default Header;
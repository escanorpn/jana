import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,} from 'mdbreact';

import { BrowserRouter as Router,Redirect } from "react-router-dom";
import Routes from "./Routes";
import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class App extends Component {
  state = {
    collapseID: "",
    redirect: true
    
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };


  render() {
    const container = { height: 1300 }
    const { redirect  } = this.state;
   
    return (
      <Router>
        <div className="flyout" style={{backgroundColor: "#fff",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}}>
    
         
        <MDBNavbar style={{paddingTop:"1px",paddingBottom: "1px",  background: "black",background: "linear-gradient(147deg, rgb(9 20 29) 15%, rgba(0, 0, 0, 0.84) 4%, rgba(0, 0, 0, 0.84) 87%, rgb(9 20 29) 4%)",height:"52px"}} dark expand="md" fixed="top" scrolling>

            <MDBNavbarBrand href="/" style={{paddingTop:"7px",paddingBottom: "7px",color:"white" }}>
              {/* <img src="http://lmgexhibitions.kilaqitu.com/img/2lg.png" style={{ width: "3.7rem",marginRight:"12px",boxShadow:"rgb(249, 247, 247) 0px 1px 0px 0px, rgb(253, 251, 251) 0px 3px 0px 0px",borderRadius:"50%",}}/>
               */}
                 {/* <img src="http://lmgexhibitions.kilaqitu.com/img/flogo.jpeg" style={{ width: "4.0rem",marginRight:"12px",boxShadow:"rgb(249, 247, 247) 0px 1px 0px 0px, rgb(253, 251, 251) 0px 3px 0px 0px",marginTop:"-7px"}}/>
               */}
             JEGS
           
            </MDBNavbarBrand>
            
            <MDBNavbarToggler
            className="" 
            icon="location-arrow"
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            >
              {/* <Icon type="menu-fold" /> */}
              {/* <MDBIcon icon="indent" /> */}
              <MDBIcon icon="ellipsis-v" />
            
            </MDBNavbarToggler>
            {isMobile ?(
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
              className="dark-grey-text"
              style={{backgroundColor:"black"}}
            >
                <MDBNavbarNav left onClick={this.toggleCollapse("mainNavbarCollapse")}>
                  <MDBNavItem active>
                    <MDBNavLink   to="/">Home</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink      to="/samples">Products</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink      to="/samples">Services</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink      to="/samples">Sample projects</MDBNavLink>
                  </MDBNavItem>

                  
                  <MDBNavItem>
                    <MDBNavLink  to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  
                  <MDBNavItem>
                    <MDBNavLink      to="/contact">Contact us</MDBNavLink>
                  </MDBNavItem>
               
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
 ):(

  <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
              className="dark-grey-text"
              style={{}}
            >
                <MDBNavbarNav left onClick={this.toggleCollapse("mainNavbarCollapse")}style={{marginLeft:"90px"}}>
                  <MDBNavItem active style={{marginLeft:"90px"}}>
                    <MDBNavLink   to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  
                  

                  <MDBNavItem style={{marginLeft:"40px"}}>
                    <MDBNavLink      to="/samples">Products</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem style={{marginLeft:"40px"}}>
                    <MDBNavLink      to="/samples">Services</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem style={{marginLeft:"40px"}}>
                    <MDBNavLink      to="/samples">Sample projects</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem style={{marginLeft:"40px"}}>
                    <MDBNavLink  to="/about">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem style={{marginLeft:"40px"}}>
                    <MDBNavLink      to="/Contact">Contact us</MDBNavLink>
                  </MDBNavItem>
                 
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
 )}
            </MDBNavbar>
         
           
        <div style={{ }}>
        <main >
       
            <Routes />
           
          </main>
          </div>
          {/* <Redirect to='/'/> */}
        </div>
      </Router>
    );
  }
}

export default App;

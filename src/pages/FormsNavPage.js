import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBNavLink, MDBCard, MDBCardBody, MDBModal,  MDBModalBody, MDBModalFooter } from "mdbreact";
import DocsLink from "./../components/docsLink";

class FormsPage extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer className="mt-5">

        <MDBRow>
          <MDBCol md="3">
            
          </MDBCol>
          <MDBCol md="6" style={{paddingTop: "30px"}}>
          <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                style={{paddingLeft: "22px",}}
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                
                style={{paddingLeft: "22px",}}
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
              <MDBBtn color="white" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}>Login</MDBBtn>
                
                <br/>
              </div>
            </form>
            <br/>
            <p className="h5 text-center mb-4">Don't have an account? 
            <MDBNavLink
                    //onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/signUp"
                    //className="dark-grey-text"
                  >
                    Sign up
                  </MDBNavLink>
            </p>
            
          </MDBCol>
          <MDBCol md="3">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default FormsPage;

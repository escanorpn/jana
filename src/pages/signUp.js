import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBNavLink, MDBCard, MDBCardBody, MDBModal,  MDBModalBody, MDBModalFooter } from "mdbreact";
import DocsLink from "./../components/docsLink";

class signUpc extends Component {
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
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
                <MDBInput
                  label="Confirm your password"
                  icon="exclamation-triangle"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="white" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}>Register</MDBBtn>
                <br/>
              </div>
            </form>
            <br/>
            <p className="h5 text-center mb-4">Alreadyt have an account? 
            <MDBNavLink
                    //onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/forms"
                    //className="dark-grey-text"
                  >
                    Log in
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

export default signUpc;

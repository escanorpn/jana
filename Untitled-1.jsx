import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBModal,MDBCardTitle,MDBCardText,MDBCardGroup,MDBCardImage,MDBNavLink} from "mdbreact";
import DocsLink from "./../components/docsLink";

class FormsPage extends Component {
  state = {
    modal: false,
    upath:"http://192.168.43.22/nw/ibl/img/"
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer className="mt-1" style={{marginLeft: "1px",}}>

        <MDBRow style={{position:"fixed",width:"100%",backgroundColor:"#213357",height:"100%",overflowY:"auto"}}>
          <MDBCol md="2" class="h-100 " style={{backgroundColor:"#",height:"20%"}}>
           <div  style={{height:"",position:"fixed",maxWidth:"200px",overflowY:"auto",paddingTop:"10px",paddingLeft:"12px",paddingRight:"12px",color:"white"}}>
             <p>Less than KSH 300</p>
            
             More than KSH 300
             
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12" >
                <MDBBtn  size="sm"color="white" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}>Cancel</MDBBtn>

                <MDBBtn size="sm" color="white" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",}}>Submit</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
           </div>
          </MDBCol>
          <MDBCol md="10" style={{paddingTop: "1px",backgroundColor: "white",paddingBottom:"202px"}}>
         
        <MDBCardGroup deck className="mt-3">
          <MDBCard  style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/6.jpg"
             
              alt="MDBCard image cap"
              top
              
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardText>
              Basic Top lon sleeves
              <br/>
              KSH 259  
              </MDBCardText>

              {/* <MDBBtn color="" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}>read more</MDBBtn> */}
            <MDBNavLink to={{pathname:"/more",
    state: { url: require("../assets/6.jpg") } }} >
              <MDBBtn color="light-blue" size="sm" >
                read more
              </MDBBtn>
              </MDBNavLink>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/8.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5"></MDBCardTitle>
              <MDBCardText>Belted Plaid Blazer
                <br/>
                KSH 399  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/4.jpg"
              
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5"></MDBCardTitle>
              <MDBCardText>
                Tank Top
                <br/>
                KSH 199  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard  style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/7.jpg"
             
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardText>
                Oversized Textured Top
                <br/>
                KSH 159  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>

<br/><br/>
        <MDBCardGroup deck className="mt-3">
          <MDBCard  style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/1.jpg"
             
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardText>
              Perl Knit Swear
              <br/>
              Ksh 499  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/5.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5"></MDBCardTitle>
              <MDBCardText>
              Ripped Jeans
                <br/>
                Ksh 399  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/3.jpg"
              
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5"></MDBCardTitle>
              <MDBCardText>
              Basic Slim Jeans
                <br/>
                Ksh 299  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard  style={{maxHeight:"500px",width:"94%"}}>
            <MDBCardImage
              src="http://192.168.43.22/nw/ibl/img/2.jpg"
             
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardText>
              Basic Slim Jeans
                <br/>
                Ksh 359  
              </MDBCardText>
              <MDBBtn color="light-blue" size="sm">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    );
  }
}

export default FormsPage;

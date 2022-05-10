import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol,MDBBtn,MDBNavLink,MDBInputSelect } from "mdbreact";
import PropTypes from "prop-types";
import ReactInputPosition, {
  TOUCH_ACTIVATION,
  MOUSE_ACTIVATION
} from "react-input-position";
import SideBySideRenderer from "./SideBySideRenderer";

class more extends Component {
 
  constructor(props){
    super (props);
    const {
      imageSrc,
      largeImageSrc,
      imageAlt,
      overlayOpacity,
      overlayBoxOpacity,
      cursorStyle,
      alwaysInPlace,
      transitionSpeed,
      transitionSpeedInPlace,
      renderOverlay,
      className,
      url,
      style
    } = props;
    this.m2=1;
  }
  state = {
    modal: false,
    url1:require("../assets/6.jpg"),
    url:this.props.location.state.url,
    H:this.props.location.state.H,
    d:this.props.location.state.d,
    C:this.props.location.state.C,
    mvalue: this.props.location.state.C
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  getValue = value => {
    this.m2=value;

    this.calc();
  };
  calc=()=>{
   
  const cash=this.m2*this.state.C
    this.setState({ mvalue:cash});
  }
  render() {
    

 
    return (
        <MDBContainer className="mt-1">
  
  <MDBRow>
      <MDBCol md="5" 
        style={{ maxWidth:"",height:"100%",width:"94%" }}>
        
      <ReactInputPosition
        style={this.props.style}
        className={this.props.className}
        touchActivationMethod={TOUCH_ACTIVATION.TOUCH}
        mouseActivationMethod={MOUSE_ACTIVATION.HOVER}
        trackItemPosition
        linkItemToActive
      >
         
        <SideBySideRenderer
        style={{ maxWidth:"100px",height:"100%",width:"10%" }}
          imageSrc={this.state.url}
          largeImageSrc={this.props.largeImageSrc}
          imageAlt={this.props.imageAlt}
          overlayOpacity={this.props.overlayOpacity}
          overlayBoxOpacity={this.props.overlayBoxOpacity}
          alwaysInPlace={this.props.alwaysInPlace}
          transitionSpeed={this.props.transitionSpeed}
          transitionSpeedInPlace={this.props.transitionSpeedInPlace}
          renderOverlay={this.props.renderOverlay}
          cursorStyle={this.props.cursorStyle}
        />
         </ReactInputPosition>
    
  {/* 
          <img src={this.state.url} style={{ maxWidth:"100%",height:"100%",width:"100%" }}/> */}
      </MDBCol>
      
      <MDBCol md="7" style={{paddingTop: "30px",boxShadow:" rgba(236, 234, 234, 0.521569) 0px 0px 10px 0px"}}>
  <MDBContainer style={{boxShadow:" rgba(236, 234, 234, 0.52) 0px 11px 20px 0px",marginBottom:"20%"}}>
      <h3 className="text-center">
       {this.state.H}
     
      </h3>
      <br/>
      <p className="text-center">{this.state.d}</p>
      <br/>  <br/>
      
  <p className="text-center">Hover on the image for magnification</p>
  <br/>
  </MDBContainer>
  
  <MDBRow>
    
  
  <MDBCol md="3" 
        style={{ maxWidth:"",height:"100%",width:"94%",marginLeft:"42px" }}>
      Quantity
  </MDBCol>
  <MDBCol md="1" 
        style={{ maxWidth:"",height:"100%",width:"94%" }}>
      .
  </MDBCol>
      <MDBCol md="5" 
        style={{ maxWidth:"",height:"100%",width:"94%" }}>
  <MDBInputSelect
                 style={{width:"5px",boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)"}}
                  getValue={this.getValue}
                  min={1}
                  max={15}
                />
                
                
                </MDBCol>
              </MDBRow>
                <br/>
  <MDBContainer className="text-center">
  
  <p> <b>Price</b> :KSH {this.state.mvalue}</p>
  <br/>
  </MDBContainer>
  <MDBContainer>
  <MDBRow>
      <MDBCol md="6" >
      <MDBNavLink to={{pathname:"/cart",
          state: { url: this.state.url3,
            H:this.state.H,
            Q:this.m2,
            P:this.state.mvalue
          } }} >
          <MDBBtn color="white" size="sm" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginRight: "27%",}}>
          Add to bag
          </MDBBtn>
        </MDBNavLink>
        </MDBCol>
        <MDBCol md="6" >
      <MDBNavLink to={{pathname:"/forms",
          state: { url: this.state.url3} }} >
          <MDBBtn color="white" size="sm" style={{boxShadow:" 0 2px 0px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)",marginRight: "27%",}}>
          Buy now
          </MDBBtn>
        </MDBNavLink>
        
      </MDBCol>
  </MDBRow>
  </MDBContainer>
  </MDBCol>
  </MDBRow>
  </MDBContainer>
  
      
    );
  }
}
more.propTypes = {
  imageSrc: PropTypes.string,
  largeImageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  overlayOpacity: PropTypes.number,
  overlayBoxOpacity: PropTypes.number,
  cursorStyle: PropTypes.string,
  alwaysInPlace: PropTypes.bool,
  transitionSpeed: PropTypes.number,
  transitionSpeedInPlace: PropTypes.number,
  renderOverlay: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

more.defaultProps = {
  imageSrc: require("../assets/img/2.jpg"),
  largeImageSrc: "",
  imageAlt: "",
  overlayOpacity: 0.5,
  overlayBoxOpacity: 0.8,
  cursorStyle: "crosshair",
  transitionSpeed: 0.4,
  transitionSpeedInPlace: 0.4
};
export default more;

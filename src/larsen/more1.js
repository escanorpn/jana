import React, { Component } from "react";
import { MDBContainer, MDBCardBody, MDBCard,MDBBtn,MDBNavLink,MDBInputSelect } from "mdbreact";
import { List, Typography } from 'antd';
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
    mvalue: this.props.location.state.C,
    list:[
      'Goat meat',
      'Beans.',
      'Milk.',
      'Rice.',
      'Peas.',
    ],
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
      <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} className="text-center">
      <MDBCardBody>

      <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginTop: "2px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} className="text-center">
      <MDBCardBody>
      <img className="img-fluid" style={{maxWidth: "457px",width:"100%",paddingTop: "30px",}} src={this.state.url}  />
      </MDBCardBody>
      </MDBCard>
      
    
  {/* 
          <img src={this.state.url} style={{ maxWidth:"100%",height:"100%",width:"100%" }}/> */}

      <div md="7" style={{paddingTop: "30px",boxShadow:" rgba(236, 234, 234, 0.521569) 0px 0px 10px 0px"}}>
  <MDBContainer style={{boxShadow:" rgba(236, 234, 234, 0.52) 0px 11px 20px 0px",}}>
      <h3 className="text-center">
       {this.state.H}
     
      </h3>
      <br/>
      <p className="text-center">{this.state.d}</p>
      <br/>  <br/>

    <List
      size="small"
      header={<div>Ingredients </div>}
     
      bordered
      dataSource={this.state.list}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  <p> <b>Price</b> :KSH {this.state.mvalue}</p>
  <br/>
  </MDBContainer>
  
  </div>
  </MDBCardBody>
  </MDBCard>
  
      
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

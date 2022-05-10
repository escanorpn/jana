import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { MDBCard, MDBCardBody, MDBNavLink,MDBCol,MDBRow,MDBCardText,MDBBtn,MDBContainer} from "mdbreact";
import { getChildrenToRender } from './utils';
import { enquireScreen } from 'enquire-js';

import {Redirect,Link } from "react-router-dom";
import { Button } from 'antd';

import Masonry from 'react-masonry-component';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});



class Design extends React.PureComponent {
  getDelay = (e, b) => (e % b) * 100 + Math.floor(e / b) * 100 + b * 100;
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      pad:"0px",
      
      
    };
    if(!isMobile){
      this.setState({
        pad:"70px"
      })
    }
  }


  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    if(!isMobile){
      this.setState({
        pad:"70px"
      })
    }
  
 
    return (
      <div {...props} {...dataSource.wrapper}>
     
     <div {...dataSource.page}>
  
     <MDBCard color="white lighten-1" style={{maxWidth:"900px",marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} text="black" className="text-center">
        <MDBCardBody >
<MDBCard color="white lighten-1" style={{maxWidth:"700px",marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",marginBottom:"-73px"}} text="black" className="text-center">

        <MDBCardBody style={{color:"#697b8c"}}>
          <h5 style={{}}>History</h5>
          <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
        

          <Link to="/grid" style={{marginTop:"33px"}}>
          <Button type="primary" style={{marginTop:"33px",backgroundColor:"white", color:"black",}} >
           About us
          </Button>
           
         </Link> 
        </MDBCardBody>
        </MDBCard>

  
        </MDBCardBody>
        </MDBCard>
        
{/*   
  <MDBCard style={{ width:"99%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginBottom:"72px",paddingBottom:"72px",marginTop:"173px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",}} className="text-center">
    <MDBCardBody>
    <h5 style={{}}>Products and services</h5>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Grade 1</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
            
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
                <MDBCardBody style={{color:"#697b8c"}}>
                  <h5 style={{}}>Grade 2</h5>
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Grade 3</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
            
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
                <MDBCardBody style={{color:"#697b8c"}}>
                  <h5 style={{}}>Grade 4</h5>
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  </MDBCard>  */}

  
        </div>
      </div>
    );
  }
}

export default Design;

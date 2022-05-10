import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import Banner3 from './Home3/Banner3';
import Footer2 from './Home3/Footer2';

import {Banner30DataSource_b, Footer20DataSource,} from './Home3/data.source';

import { MDBCard, MDBCardBody, MDBContainer,MDBCol,MDBRow,MDBCardText,} from "mdbreact";
import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
 

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    
      if(viewerIsOpen){
        // alert(viewerIsOpen);
        setCurrentImage(0);
        setViewerIsOpen(false);
      }
  };
  const al = () => {
    
   alert("foo");
};
  return (
   
    <div  style={{paddingTop:"28px"}}>
        
<Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource_b}
        isMobile={isMobile}
      />
<div className= 'home-page-wrapper content8-wrapper'>
  <div className='home-page content8'>
  <MDBCard style={{ width:"95%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginBottom:"72px",paddingBottom:"72px",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} className="text-center">
    <MDBCardBody>
    <h4>Rquirements</h4>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Grade 1</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
            
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
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
  </MDBCard>

  
  <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"72px"}} text="black" className="text-center">
    <MDBCardBody style={{color:"#697b8c"}}>
          <h5 style={{}}><u>Behaviour Policy </u></h5>
          <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit nulla, lacinia nec varius id, tempor sed dolor. Sed eget tincidunt lacus, eu tempus nibh. Praesent lacinia ex a magna varius porta. Morbi ultrices posuere varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec eget justo semper magna venenatis sagittis sed sed lorem. Praesent lobortis nisi ac justo facilisis condimentum. Praesent felis dui, auctor sit amet lectus vitae, tincidunt auctor mi.</p>
        
        </MDBCardBody>
        </MDBCard>
  </div>
</div>

    </div>
  );
}
// render(<App />, document.getElementById("app"));

export default  App;
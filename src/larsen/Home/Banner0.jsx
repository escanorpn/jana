import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './utils';
import Texty from 'rc-texty';
import { MDBCard, MDBCardBody, MDBMask,MDBCol,MDBRow,MDBCarousel,MDBContainer,MDBCarouselInner,MDBCarouselItem,MDBView,MDBCarouselCaption,MDBListGroupItem,MDBListGroup} from "mdbreact";
import Content3 from './Content3';
import {Content30DataSource,} from './data.source';
import {Redirect,Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import  fabrication from "../img/1.jpg";
import  c1 from "../img/companies/c1.jpg";
import  c2 from "../img/companies/c2.png";
import  c3 from "../img/companies/c3.png";
import  c4 from "../img/companies/c4.jpg";
import  a1 from "../img/a/a1.jpg";
import  a2 from "../img/a/a2.jpg";
import  a3 from "../img/a/a3.jpg";
import  a4 from "../img/a/a4.png";
import  a5 from "../img/a/a5.jpg";
import  a6 from "../img/a/a6.jpg";
import  a7 from "../img/a/a7.jpg";
import  cc1 from "../img/a/c1a.jpg";

import  p1 from "../img/p/p1.jpg";
import  p2 from "../img/p/p2.jpg";
import  p3 from "../img/p/p3.png";
import  p4 from "../img/p/p4.png";

import  im1 from "../img/im1.jpg";

import TextArea from "antd/lib/input/TextArea";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../s.css";



import Footer0 from './Footer0';
import './static/style';

import {Footer00DataSource,} from './data.source';
import {Form, Input,Radio} from 'antd';
import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
const axios = require('axios');
const ori="vertical";
let smobi;
if(isMobile){
   smobi={
    padding:"0px"
  }
}
let rbg;
rbg={height:"100vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+fabrication+")"}

let rbg1;
rbg1={height:"100vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a2+")"}

let rbg2;
rbg2={height:"100vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a6+")"}
if(isMobile){
  rbg={height:"90vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+fabrication+")"}
  
  rbg1={height:"90vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a2+")"}
  
  rbg2={height:"90vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a6+")"}
}


let r1bg2;
r1bg2={height:"40vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a6+")"}
if(isMobile){

  r1bg2={height:"40vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+a6+")"}
}
const mButton = {
  display: "block",
  margin: "12px auto 0",
  background:" rgb(3, 67, 101)",
  background: "linear-gradient(315deg, #09141d 0%, #223343 74%)",
  // background: "-moz-linear-gradient(357deg, rgb(0 0 0) 0%, rgb(64 118 117) 94%)",
  // background:"linear-gradient(357deg, rgb(0 0 0) 0%, rgb(64 118 117) 94%)",
  // background: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
  boxShadow: "rgba(38, 3, 3, 0.36) 1px 5px 5px",
  border: "none",
  transition:" background .45s @ease-out",
  width: "132px",
  lineHeight: "42px",
  height: "42px",
  borderRadius: "42px",


};
const responsive1 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class Banner1 extends React.PureComponent {
  state = {
    st: "",
    mc:"white",
   
  }
  async onSubmit(e){
    e.preventDefault() 
    let res = await this.uploadFile(this.state.file);
    console.log(res.data);
    console.log(res.data.url);
    this.props.form.setFieldsValue({
      ['urli']: res.data.url,
  });
  if(this.state.imr & !res.data.error & res.data.error!=undefined || !this.state.imr){
    console.log("error"+res.data.error);
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        fieldsValue
      };
      console.log('Received values of form: ', values);
      axios({
        method: 'post',
        // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
        url: 'http://lmgexhibitions.kilaqitu.com/php/lmg/api.php?apicall=quote',
        data: values,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then((response) => {
      // console.log("response "+JSON.stringify(response));
      if(response.data.error){
        console.log("error "+response.data.message);
        this.setState({
          dbMessage: response.data.message
       });
        }else{
          if(response.data.fw){
            this.setState({
              ds: "none", 
              ds1: "block"
           });

          }
          console.log("msg "+response.data.message);
          this.setState({
            dbMessage: response.data.message
         });
        // var result=response.data.message;
        // JSON.stringify(result)
        // console.log("success "+JSON.stringify(result));
        }

    })
    .catch(function (response) {
        //handle error
        console.log("error"+response)
    });
    });
  }
}
  render() {
    const { ...currentProps } = this.props;
    const { dataSource } = currentProps;
    delete currentProps.dataSource;
    const { getFieldDecorator,} = this.props.form;
    // delete currentProps.isMobile;
    if(currentProps.isMobile){
   
this.setState({
  mc:"black",

})
    }
    return (
      <div {...currentProps} {...dataSource.wrapper} style={{height:this.state.st}}>
 

      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
      style={{height: "100",width: "100%",size: "cover",backgroundPosition: "center center"}}
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView >
          <div style={rbg}></div>
          {/* <MDBMask overlay="black-light" /> */}
          <MDBMask overlay="black-strong" />
          </MDBView>
          
          <MDBCarouselCaption>
        
          <h5 style={{textShadow:"0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",color: "white",fontSize: "50px",lineHeight: "80px",textIndent: "2px",fontWeight: "600",marginTop:"-20%"}}>Jana Engineering & General Services </h5>

          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
          <div style={rbg1}></div>
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
           
          <h5 style={{textShadow:"0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",color: "white",fontSize: "48px",lineHeight: "80px",textIndent: "2px",fontWeight: "600",marginTop:"-20%"}}>Jana Engineering & General Services </h5>
             
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <div style={rbg2}></div>
          <MDBMask overlay="black-strong" />
          {/* <MDBMask overlay="black-slight" /> */}
          </MDBView>
          <MDBCarouselCaption>
           
          <h5 style={{textShadow:"0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",color: "white",fontSize: "49px",lineHeight: "80px",textIndent: "2px",fontWeight: "600",marginTop:"-20%"}}>Jana Engineering & General Services </h5>
           
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

<MDBCard style={{ width:"100%",maxWidth: "",marginRight: "auto",marginLeft: "auto",marginBottom:"172px",paddingBottom:"72px", backgroundColor:"#e4e5e6",
}} className="text-center">
    <MDBCardBody style={smobi}>

    

{/* 
  <MDBCard color="white lighten-1" style={{maxWidth:"900px",marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)"}} text="black" className="text-center">
    <MDBCardBody >
    <MDBCard color="white lighten-1" style={{maxWidth:"700px",marginLeft:"auto",marginRight:"auto", marginBottom:"-73px"}} text="black" className="text-center">
      <MDBCardBody style={{color:"#697b8c"}}>
        <h5 style={{}}>Overview of the company</h5>
        <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >

Jana Engineering and general services company was started in 1994 and has been operational since then providing air conditioning and refrigeration services to both industrial and commercial businesses.

Our team of engineers and technicians are well equipped and trained to do design, fabrication, installation and maintenance. We offer training to employees continuously to keep abreast with the latest technology in refrigeration, ventilation and air conditioning. </p>
      
        <Link to="/about" style={{marginTop:"33px"}}>
        <Button style={mButton} type="primary" htmlType="submit"> 
         About us
        </Button>
          
        </Link> 
      </MDBCardBody>
    </MDBCard>
  </MDBCardBody>
</MDBCard> */}



<MDBCard style={{ width:"100%",marginRight: "auto",marginLeft: "auto",paddingBottom:"72px",marginTop:"23px",background:" linear-gradient(238deg, white 9%, white 69%, #e2e3e3  1%) center center / cover fixed" }} className="text-center">
    <MDBCardBody  style={{background: "linear-gradient(124deg, white 9%, white 65%, #09141d17 1%) center center / cover fixed"}} >
      <br/>
    <h4 style={{}}>Products and services</h4>
      <MDBContainer>
        <MDBRow>
          
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={a7}  />
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Installations</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >We offer a wide array of services when it comes to the installations of machines including airconditioners. From complex systems to simple machinery we ensure all isntallations are carried out with dexterity</p>
            
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={a1}  />
                <MDBCardBody style={{color:"#697b8c"}}>
                  <h5 style={{}}>Maintainance</h5>
                  {/* <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Mechanical systems are often subjected to wear and tear over time and as such require regular maintainance. We offer various services including repairs and replacements of defective machines. Contact us for more. </p> */}

                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >At JEGS we provide maintenance for most air conditioning and ventilation products like air conditioners (all types), AHUs, cold rooms, duct systems, chillers, motors, etc. we also offer consultation services on how to best use this machines which help our clients reduce their maintenance costs and effectively use their machines. </p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={a6}  />
                <MDBCardBody style={{color:"#697b8c"}}>
                  <h5 style={{}}>Design</h5>
                  {/* <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >We offer custom design solutions partaining to metal fabrication and structural development. From temporary stalls to custom made cold-rooms. reach out to us and we will help make your vision come to fruition.</p> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >At JEGs we understand that design is all about efficiency at minimum cost. We boast of having a dedicated RnD team that help us in designing a variety of products. We offer simple yet effective designs on ventilation systems, cold rooms, cold stores, walking freezers, workshop layouts, prefabricated houses and structures, AHUs, structural plans, etc.</p>
                
                </MDBCardBody>
                
            </MDBCard>
          </MDBCol>
                 
         
          
        </MDBRow>

      </MDBContainer>

    
    </MDBCardBody>

  </MDBCard> 

    <MDBCard style={{ width:"100%",maxWidth: "1200px",marginBottom:"-102px",marginRight: "auto",marginLeft: "auto",marginTop:"72px", }} className="text-center">
      <MDBCardBody style={smobi}>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            style={{height: "100",width: "100%",size: "cover",backgroundPosition: "center center"}}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView >
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
                <MDBCarouselCaption>
          
                
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
    </MDBCarousel>
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Mechanical Ventilation</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Design, installation and maintainance of ventillation systems</p>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            style={{height: "100",width: "100%",size: "cover",backgroundPosition: "center center"}}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView >
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
                <MDBCarouselCaption>

                
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Residential Office Air Conditioning</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Solutions to cool/heat your office or home space</p>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            style={{height: "100",width: "100%",size: "cover",backgroundPosition: "center center"}}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView >
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                <div style={r1bg2}></div>
                </MDBView>
                <MDBCarouselCaption>

                
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
            <MDBCardBody style={{color:"#697b8c"}}>
              <h5 style={{}}>Cold Storage & Freezer-rooms</h5>
              <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Construction & Servicing of cold storage as per the customer requirements</p>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>

        </MDBRow>
        </MDBContainer>
      </MDBCardBody>
    </MDBCard> 


  </MDBCardBody>
  </MDBCard> 

<MDBCard style={{ width:"100%",maxWidth: "",marginRight: "auto",marginLeft: "auto",paddingBottom:"72px", }} className="text-center">
    <MDBCardBody style={smobi}>
 
<MDBCard style={{ width:"100%",maxWidth: "1200px",paddingBottom:"72px",marginRight: "auto",marginLeft: "auto",marginTop:"-72px", }} className="text-center">
    <MDBCardBody style={smobi}>
 
    <h5 style={{}}>Sample projects</h5>
      <MDBContainer>
        <MDBRow>      
           <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p1}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > Design, fabrication and installation of HVAC at Universal Corporation Limited- installation of air conditioning plant and scheduled maintenance </p>
                
                  <br/>
                  <p style={{}}>2004 to Date</p>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p2}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Improvement of production area and QC air system at Nerix Pharma. </p>
                  
                  <br/>
                  <p style={{}}>2019 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p3}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Design, fabrication, installation and maintenance of HVAC at Norbrook Kenya. </p>
                  <br/>
                  <p style={{}}>2016 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
              
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p4}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > Air conditioning, plant rehabilitation, new installation and maintenance services at Hilton Hotel </p>
                
                  <br/>
                  <p style={{}}>1996 to Date</p>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p5}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Fabrication, installation and maintenance of Air conditioners at Nairobi west Hospital. </p>
                  
                  <br/>
                  <p style={{}}>2019 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p6}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Fabrication, installation and maintenance of Air conditioners at Skylight Chemicals. </p>
                  <br/>
                  <p style={{}}>2019 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>

        </MDBRow>
        
      </MDBContainer>
    </MDBCardBody>
    <Link to="/samples" style={{marginTop:"33px"}}>
        <Button style={mButton} type="primary" htmlType="submit"> 
         More
        </Button>
        </Link>
  </MDBCard> 
  
  
 

<MDBCard style={{ width:"100%",maxWidth: "",marginRight: "auto",marginLeft: "auto",paddingBottom:"72px",marginTop:"73px", }} className="text-center">
    <MDBCardBody  style={smobi}>
    <h5 style={{paddingBottom:"33px"}}>Companies we have worked with</h5>
    
  <Carousel   
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all .5"
  arrows={false}
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","co"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-20-px">
     <div>
            <img className="img-fluid" style={{width:"99%",maxWidth: "87px"}} src={c1}  />
        
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "87px"}} src={c2}  />
           
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "87px"}} src={c3}  />
        
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "87px"}} src={c4}  />
          
            </div>
</Carousel>

      </MDBCardBody>
    </MDBCard>
    
  </MDBCardBody>
  </MDBCard> 
 
{/* 
    <img style={{width:"120px",borderRadius:"50%"}} src="http://lmgexhibitions.kilaqitu.com/img/a.gif" alt="img" />
     */}
    {/* <h5 type="mask-bottom" style={{color:this.state.mc}}>The best at events and exhibitions</h5> */}
    
        <TweenOne
          animation={{
            y: '-=20',
            yoyo: true,
            repeat: -1,
            duration: 1000,
          }}
          className="banner0-icon"
          key="icon"
        >
        </TweenOne>


        <Footer0 style={{ background: "-moz-linear-gradient(315deg, #0cbaba 0%, #380036 74%)",background: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",}}
      
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />
      </div>
    );
  }
}
const Banner = Form.create({ name: 'time_related_controls' })(Banner1);
export default Banner;

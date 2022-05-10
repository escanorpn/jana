import React from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from './Home/utils';
import Texty from 'rc-texty';
import { MDBCard, MDBCardBody, MDBMask,MDBCol,MDBRow,MDBCarousel,MDBContainer,MDBCarouselInner,MDBCarouselItem,MDBView,MDBCarouselCaption} from "mdbreact";



import Footer0 from './Home/Footer0';
import './Home/static/style';

import {Footer00DataSource,} from './Home/data.source';
import {Form, Input,Radio} from 'antd';
import { enquireScreen } from 'enquire-js';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import  g1 from "./img/g/1.jpg";
import  g2 from "./img/g/2.jpg";
import  g3 from "./img/g/3.jpg";
import  g4 from "./img/g/4.jpg";
import  g5 from "./img/g/5.jpg";
import  g6 from "./img/g/6.jpg";
import  g7 from "./img/g/7.jpg";

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
      <div  style={{height:this.state.st}}>
 


<MDBCard style={{ width:"100%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginBottom:"172px",paddingBottom:"72px", backgroundColor:"#09141d"}} className="text-center">
    <MDBCardBody style={smobi}>

  </MDBCardBody>
  </MDBCard> 

<MDBCard style={{ width:"100%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",paddingBottom:"72px", }} className="text-center">
    <MDBCardBody style={smobi}>
 
<MDBCard style={{ width:"100%",maxWidth: "1200px",paddingBottom:"72px",marginRight: "auto",marginLeft: "auto",marginTop:"-72px", }} className="text-center">
    <MDBCardBody style={smobi}>
 
    <h5 style={{}}>Sample projects</h5>
      <MDBContainer>
        <MDBRow>      
           <MDBCol md="3">
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
          <MDBCol md="3">
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
          <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p3}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Design, fabrication, installation and maintenance of HVAC at Norbrook Kenya. </p>
                  <br/>
                  <p style={{}}>2016 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
              
          <MDBCol md="3">
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
          <MDBCol md="3">
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
          <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p6}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Fabrication, installation and maintenance of Air conditioners at Skylight Chemicals. </p>
                  <br/>
                  <p style={{}}>2019 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p7}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > Design, fabrication, installation and maintenance of air conditioning systems at Concepts Africa </p>
                
                  <br/>
                  <p style={{}}>2017 to 2018</p>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p8}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                  {/* <h5 style={{}}>Design</h5> */}
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Installation of Air conditioning system and maintenance plant at Canadian Embassy. </p>
                  
                  <br/>
                  <p style={{}}>2007 to Date</p>
                
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p9}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Design, fabrication, installation and maintenance of HVAC at Lab & allied. </p>
                  <br/>
                  <p style={{}}>1994 to 2018</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p12}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > General air conditioning and ventilation works at Norfolk Hotel 13. Ventilation system for drug manufacturing at a Sphinix pharmaceuticals. </p>
                  <br/>
                  <p style={{}}>2008 to 2015</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p13}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Ventilation system for drug manufacturing at Sphinix pharmaceuticals. </p>
                  <br/>
                  <p style={{}}>2012 to 2015</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p15}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Ventilation works at Ultravetis. </p>
                  <br/>
                  <p style={{}}>2013 to 2014</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p16}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Ventilation system for general offices at BDO. </p>
                  <br/>
                  <p style={{}}>2013 to 2014</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p17}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Dust extraction systems and air-conditioning for new 19 Plant at Cosmos Pharmaceuticals. </p>
                  <br/>
                  <p style={{}}>2012 to 2013</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p19}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Basement garage extraction system Refcon Limited. </p>
                  <br/>
                  <p style={{}}>2012 to 2013</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
            <MDBCol md="3">
            <MDBCard color="white lighten-1" style={{ maxWidth:"700px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            {/* <img className="img-fluid" style={{width:"99%",maxWidth: "587px"}} src={p20}  /> */}
                <MDBCardBody style={{color:"#697b8c"}}>
                 
                  <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Ventilation system for Biodeal laboratories. </p>
                  <br/>
                  <p style={{}}>2008 to 2012</p>
                
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
          
        </MDBRow>
        
      </MDBContainer>
    </MDBCardBody>
  </MDBCard> 
  
  
 

  <MDBCard style={{ width:"100%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",paddingBottom:"72px",marginTop:"73px", }} className="text-center">
    <MDBCardBody  style={smobi}>
    <h5 style={{paddingBottom:"33px"}}>Projects</h5>
    
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
            <img className="img-fluid" style={{width:"99%",maxWidth: "187px"}} src={g1}  />
        
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "187px"}} src={g2}  />
           
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "187px"}} src={g3}  />
        
            </div>
            <div>  
            <img className="img-fluid" style={{width:"99%",maxWidth: "187px"}} src={g4}  />
          
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

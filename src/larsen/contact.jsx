import React from "react";
import  fabrication from "./img/mbg.png";
import {Form, Input,Button} from 'antd';
import TextArea from "antd/lib/input/TextArea";
import PhoneInput from 'react-phone-input-2'

import { MDBCard, MDBCardBody, MDBContainer,MDBCol,MDBRow,MDBIcon} from "mdbreact";
import { enquireScreen } from 'enquire-js';
import Texty from 'rc-texty';

const axios = require('axios');
let isMobile;
let rbg;
rbg={height:"80vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+fabrication+")"}
enquireScreen((b) => {
  isMobile = b;
});
let smobi;
if(isMobile){
   smobi={
    padding:"0px"
  }
}
if(isMobile){
  rbg={height:"100vh",width:"100%",backgroundSize:"cover",backgroundAttachment: "fixed",backgroundPosition: "center",backgroundImage:"url("+fabrication+")"}
}
const ori="vertical";
// const mButton = {
//   display: "block",
//   margin: "72px auto 0",
//   background:" rgb(3, 67, 101)",
//   background: "-moz-linear-gradient(315deg, rgb(63, 13, 18) 0%, rgb(167, 29, 49) 74%)",
//   background: "linear-gradient(315deg, rgb(63, 13, 18) 0%, rgb(167, 29, 49) 74%)",
//   boxShadow: "0px 4px 5px 0px #9da8b6",
//   border: "none",
//   transition:" background .45s @ease-out",
//   width: "132px",
//   lineHeight: "42px",
//   height: "42px",
//   marginTop:"22px",
//   borderRadius: "42px",
// };
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
   onSubmit=(e)=>{
    e.preventDefault() 
  //   let res = await this.uploadFile(this.state.file);
  //   console.log(res.data);
  //   console.log(res.data.url);
  //   this.props.form.setFieldsValue({
  //     ['urli']: res.data.url,
  // });
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
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
        url: 'http://jana.kilaqitu.com/php/api.php?apicall=quote',
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
      <div  style={{backgroundColor:"transparent",backgroundAttachment: "fixed",backgroundSize:"cover",backgroundPosition: "center" ,marginTop:"-2px"}}>
      <div style={rbg}>
 

          <div style={{color:"white",paddingTop:"30vh",marginLeft:"auto",marginRight:"auto",}}>
          <Texty style={{fontSize: "58px",lineHeight: "80px", textIndent: "2px",fontWeight: "600",margin: "26px auto 38px",overflow: "hidden"}} className="text-center"type="mask-bottom">Contact us</Texty>

          </div>
      
    
      </div>

      <MDBCard style={{ width:"100%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",paddingBottom:"7px",marginTop:"-3px",backgroundSize:"cover",background:"linear-gradient(146deg, rgb(9 20 29) 8%, black 1%, black 12%, #09141d 9%, #000000 92%, black 7%, black 98%, rgb(9 20 29) 1%) center center / cover fixed"}} className="text-center">
  <MDBCardBody  style={smobi}>
<MDBCard style={{ width:"100%",maxWidth: "1400px",marginRight: "auto",marginLeft: "auto",marginBottom:"17px",paddingBottom:"37px",marginTop:"3px",backgroundSize:"cover",background:"linear-gradient(147deg, rgba(8, 0, 0, 0.01) 10%, rgb(255, 255, 255) 4%, rgb(255, 255, 255) 97%, rgba(0, 0, 0, 0.06) 4%)",backgroundAttachment: "fixed",backgroundPosition: "center"}} className="text-center">
  <MDBCardBody  style={smobi}>

  <h5 style={{color:"white"}}>Samples</h5>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <MDBIcon icon="mobile-alt" size="2x"  className="indigo-text pr-3"/>
          <MDBCardBody style={{color:"#697b8c"}}>
            <h5 style={{}}>Mobile </h5>
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Tel 1: 0722 713 496 </p> 
           
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Tel 2: 0704 020 830</p> 
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Tel 3: 0712 606 597</p> 
              <br/>
          
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <MDBIcon icon="map-marker-alt" size="2x"  className="indigo-text pr-3"/>
          <MDBCardBody style={{color:"#697b8c"}}>
            <h5 style={{}}>Address </h5>
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > Ruiru 3rd Sunrise Avenue, Integrated trading center </p> 
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} > P.O BOX 57982-00200</p> 
              <br/>
        
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        <MDBCard color="white lighten-1" style={{boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",maxWidth:"800px",marginLeft:"auto",marginRight:"auto",marginTop:"32px"}} text="black" className="text-center">
            <MDBIcon icon="envelope" size="2x"  className="indigo-text pr-3"/>
          <MDBCardBody style={{color:"#697b8c"}}>
            <h5 style={{}}>Email </h5>
            <p style={{whiteSpace:"pre-wrap",marginTop:"22px"}} >Email: jegs.jana@vahoo.com</p> 
              <br/>
        
          
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        
      </MDBRow>
     
    </MDBContainer>
  

<MDBCard color="white lighten-1" style={{marginTop:"82px",maxWidth:"900px",marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",padding:"35px",marginBottom:"22px"}} text="black" className="text-center">
  <MDBCardBody style={smobi}>
  <h5 style={{marginTop:"-43px"}}>Send us an email</h5>

  <MDBCard color="white lighten-1" style={{marginLeft:"auto",marginRight:"auto",boxShadow:"0 32px 32px rgba(34, 94, 222, 0.08)",marginBottom:"-103px"}} text="black" className="text-center">
    <MDBCardBody style={{color:"#697b8c"}} >
     
    <Form layout={ori} onSubmit={this.onSubmit} style={{width:"99%",maxWidth:"500px",marginLeft:"auto",marginRight:"auto"}}>

      <Form.Item label={"Full name "
      }>{
        getFieldDecorator('fname', {
        rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
      })(<Input placeholder='Enter your full name'/>)}
      </Form.Item>

      <Form.Item label={"Phone number "
      }>{
        getFieldDecorator('pn', {
        rules: [{ required: true, message: 'Please input phone number!', whitespace: true }],
      })(<PhoneInput
      country={'ke'}
      // value={this.state.phone}
      />)}
      </Form.Item>

      <Form.Item label="Your E-mail">
      {
        getFieldDecorator('email', {
        rules: [{type: 'email',message: 'The input is not valid E-mail!',},
        {required: true,message: 'Please input your E-mail!',},
      ],})(<Input />)}
     
      </Form.Item> 

      <Form.Item label={"Message "}>{
        getFieldDecorator('ar', {
        rules: [{ required: false, message: 'Enter your message', whitespace: true }],
      })(<TextArea />)}
      </Form.Item>

      <Button style={mButton} type="primary" htmlType="submit"> 
        Send message
      </Button>

    </Form>

   
    </MDBCardBody>
  </MDBCard>

</MDBCardBody>
</MDBCard>

</MDBCardBody>
</MDBCard>
  </MDBCardBody>
</MDBCard> 
  </div>
    );
  }
}
const Banner = Form.create({ name: 'time_related_controls' })(Banner1);
export default Banner;

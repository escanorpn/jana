
        
import React from "react";
import { Form, InputNumber,Input, Button,Icon,Tooltip,Breadcrumb } from 'antd';

import { MDBCard, MDBCardBody, MDBCol, MDBRow,MDBIcon} from "mdbreact";
import { Redirect } from 'react-router';
import {Link } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import im from './img/p.gif' ;
import mb from "./img/mb.png";
import PhoneInput from 'react-phone-input-2'

import Banner3 from './Home3/Banner3';
import Footer2 from './Home3/Footer2';

import {Banner30DataSource_b, Footer20DataSource,} from './Home3/data.source'

import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
 
// const { MonthPicker, RangePicker } = DatePicker;
const axios = require('axios');
const ori="vertical";
const mButton = {
  display: "block",
  margin: "72px auto 0",
  background:" rgb(3, 67, 101)",
  background: "-moz-linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
  background: "linear-gradient(315deg, #3f0d12 0%, #a71d31 74%)",
  boxShadow: "rgba(38, 3, 3, 0.36) 1px 5px 5px",
  border: "none",
  transition:" background .45s @ease-out",
  width: "132px",
  lineHeight: "42px",
  height: "42px",
  borderRadius: "42px",


};
class Shop1 extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      redirect: false,
      dbMessage:"",
      ds:"block",
      ds1:"none"
    };
  
   
    handleSubmit = e => {
      e.preventDefault();
  
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          fieldsValue
        };
        console.log('Received values of form: ', values);

      //   axios({
      //     method: 'post',
      //     // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
      //     url: 'http://lmgexhibitions.kilaqitu.com/php/lmg/api.php?apicall=mail',
      //     data: values,
      //     config: { headers: {'Content-Type': 'multipart/form-data' }}
      // })
      // .then((response) => {

      //   if(response.data.error){
      //     console.log("error "+response.data.message);
      //     this.setState({
      //       dbMessage: response.data.message
      //    });
      //     }else if(response.data.fw){
      //       this.setState({
      //         ds: "none", 
      //         ds1: "block"
      //      });

      //     }else{
      //       this.setState({
      //         dbMessage: response.data.message
      //      });
      //     var result=response.data.message;
      //     JSON.stringify(result)
      //     console.log("success "+JSON.stringify(result));
      //     }

      // })
      // .catch(function (response) {
      //     //handle error
      //     console.log("error"+response)
      // });

      });
    };

  
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
    
render() {
  
  //const { getFieldDecorator } = this.props.form;
  const { getFieldDecorator,} = this.props.form;

  const { redirect  } = this.state;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
 
  if (redirect) {
    return <Redirect to='/geo'/>;
  }
  return (
<div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",paddingTop:"72px",
    backgroundSize: "cover"}}>
<div style={{position:"fixed",top:"0px",left:"0px",height:"100%",width:"100%",background: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"}}>
</div>
    
<MDBCard style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto",display:this.state.ds}}  color="white" text="black" className="text-center">
  <MDBCardBody>
  <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
    <h5  className="text-center">  <img style={{width:"50px",borderRadius:"50%",marginBottom:"-33px",marginTop:"-33px"}} src={im} alt="img" />&nbsp;Contact us &nbsp;</h5>
  </MDBCardBody>
</MDBCard>
<br/>
 
    <MDBRow >
  <MDBCol md="12" className="mb-4">
    <MDBCard color="white" text="black" className="text-center" style={{maxWidth:""}}>
      <MDBCardBody>
{/*         
      <MDBIcon far icon="comment-alt" /><span style={{color:"red"}}>
   {this.state.dbMessage}
  </span> */}
  
        <Form layout={ori} onSubmit={this.handleSubmit} style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto"}}>

          <MDBRow >
<MDBCol md="12">
          <Form.Item label={"Full name "
        }>{getFieldDecorator('fname', {
          rules: [{ required: true, message: 'Please input your full name', whitespace: true }],
        })(<Input />)}
        </Form.Item>

        <Form.Item label={"Phone number "
        }>{getFieldDecorator('pn', {
          rules: [{ required: true, message: 'Please input phone number!', whitespace: true }],
        })(<PhoneInput
          country={'us'}
          value={this.state.phone}
        />)}
        </Form.Item>

     
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
        </Form.Item>


       <Form.Item label={
         "Enter message "}>{getFieldDecorator('msg', {
          rules: [{ required: true, message: 'Enter your message', whitespace: true }],
        })(<TextArea />)}
      </Form.Item>
     
        <Button style={mButton} type="primary" htmlType="submit" style={{background: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)" ,}} className= 'banner3-button'> Send message
        </Button>
    
      
</MDBCol> 

   
      </MDBRow>
    </Form>
    </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBCardBody>
 </MDBCard>

<MDBCard color="white" text="black" className="text-center" style={{display:this.state.ds1}}>
      <MDBCardBody>
      <p>&nbsp; Your feedback is always appreciated we will contact you shortly

</p>

  </MDBCardBody>
</MDBCard>
<br />

</div>
       );
            }}

const grid = Form.create({ name: 'time_related_controls' })(Shop1);
export default grid;
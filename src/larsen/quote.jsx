
        
import React from "react";
import { Form, InputNumber,Input, Button,Icon,DatePicker,Breadcrumb, Radio } from 'antd';

import { MDBCard, MDBCardBody, MDBCol, MDBRow,MDBIcon} from "mdbreact";
import { Redirect } from 'react-router';
import {Link } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";
import im from './img/p.gif' ;
import mb from "./img/mb.png";
import PhoneInput from 'react-phone-input-2'
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
   
  UPLOAD_ENDPOINT = 'http://lmgexhibitions.kilaqitu.com/php/lmg/upload.php';
  
  constructor(props) {
      super(props);
      this.state ={
        file:null,
        fl:"none",
        value: 1,
        imr:false,
        dbMessage:"",
        ds:"block",
        ds1:"none"
      }
      this.onSubmit = this.onSubmit.bind(this)
      this.onChange = this.onChange.bind(this)
      this.uploadFile = this.uploadFile.bind(this)
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
  onChange(e) {
      this.setState({file:e.target.files[0]})
  }
  async uploadFile(file){
      

      const formData = new FormData();
      
      formData.append('avatar',file)
      
      // console.log(formData);
      return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
          headers: {
              'content-type': 'multipart/form-data'
          }
      });
    }
   
   

  
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    onChange1 = e => {
      console.log('radio checked', e.target.value);
      if(e.target.value==2){
        this.setState({
          fl: "block",
          imr:true
        });
      }else{
        this.setState({
          fl: "none",
          imr:false
        });
      }
     
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
<div style={{maxWidth:"",marginLeft:"auto",marginRight:"auto",paddingTop:"72px",background:"url(http://lmgexhibitions.kilaqitu.com/img/mb.png) no-repeat top fixed",
    backgroundSize: "cover"}}>

<MDBCard style={{maxWidth:"800px",marginLeft:"auto",marginRight:"auto",display:this.state.ds}} color="white" text="black" className="text-center">
  <MDBCardBody>
  <MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
    <h5  className="text-center">  &nbsp;Get a quote &nbsp;</h5>
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
  
        <Form layout={ori} onSubmit={this.onSubmit} style={{maxWidth:"500px",marginLeft:"auto",marginRight:"auto"}}>

          <MDBRow >
<MDBCol md="12">

<Form.Item style={{display:"none"}} label={"Name of the exhibition event "
        }>{getFieldDecorator('urli', {
          rules: [{ required: false, message: 'select image', whitespace: true }],
        })(<Input placeholder='name of event'/>)}
        </Form.Item>

<Form.Item label={"Name of the event "
        }>{getFieldDecorator('ename', {
          rules: [{ required: true, message: 'Please input the name of the exhibition event', whitespace: true }],
        })(<Input placeholder='name of event'/>)}
        </Form.Item>

          <Form.Item label={"Location  "
        }>{getFieldDecorator('lc', {
          rules: [{ required: true, message: 'Please input the location of the exhibit', whitespace: true }],
        })(<Input placeholder='state a city'/>)}
        </Form.Item>

        <Form.Item label={"date  "
        }>{getFieldDecorator('dt', {
          rules: [{ required: true, message: 'Please input the location of the exhibit', whitespace: true }],
        })(
          <Input type="date" name="bday"/>)}
        </Form.Item>

       <br /> <br />
        <Form.Item label={"Stand size" 
        }>{getFieldDecorator('ss', {
          rules: [{ type: 'number', required: false, message: 'Enter a valid number', whitespace: true }],
        })(  <InputNumber
         
          formatter={value => `m2 ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\m2\s?|(,*)/g, '')}
          
          onChange={this.mPchange}
          style={{width:"100%"}}        />)}
          </Form.Item>

          <Form.Item label={"Select "
        }>{getFieldDecorator('s', {
          rules: [{ required: true,  message: 'Select one option',}],
        })(<Radio.Group onChange={this.onChange1} >
           <Radio value={1} style={{marginLeft:'-52px'}}>I need stand design<br/> construction & assembly</Radio><br/><br/>
            <Radio value={2}>I have stand design and only need <br/>construction & assembly</Radio>
        </Radio.Group>)}
        </Form.Item>

        <input style={{display:this.state.fl}}  type="file" onChange={ this.onChange } />

        <Form.Item label={"Full name "
        }>{getFieldDecorator('fname', {
          rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
        })(<Input placeholder='Enter your full name'/>)}
        </Form.Item>

        <Form.Item label={"Phone number "
        }>{getFieldDecorator('pn', {
          rules: [{ required: true, message: 'Please input phone number!', whitespace: true }],
        })(<PhoneInput
          country={'us'}
          // value={this.state.phone}
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
<br /> <br />

      </Form.Item> <Form.Item label={
         "Additional requirements "}>{getFieldDecorator('ar', {
          rules: [{ required: false, message: 'Enter your message', whitespace: true }],
        })(<TextArea />)}
      </Form.Item>
     
        <Button style={mButton} type="primary" htmlType="submit"> Send message
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

<br />
<MDBCard color="white" text="black" className="text-center" style={{display:this.state.ds1}}>
      <MDBCardBody>
      <p>&nbsp;Thank you, We will get back to you with a sample quote for your project
</p>

  </MDBCardBody>
</MDBCard>
</div>
       );
            }}

const grid = Form.create({ name: 'time_related_controls' })(Shop1);
export default grid;
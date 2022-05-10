
        
import React from "react";
import { Form, Input, Button,Breadcrumb,message} from 'antd';
import { MDBIcon,MDBCard, MDBCardBody, MDBCol, MDBRow} from "mdbreact";
import { Redirect } from 'react-router';
import ReactMapGL,{Marker,NavigationControl} from 'react-map-gl';
import {Link } from "react-router-dom";


// const { MonthPicker, RangePicker } = DatePicker;
const axios = require('axios');


class Geo1 extends React.Component {
    state = {
      url:"http://localhost/nw/kq/api1.php?apicall=",
      // url:"http://192.168.43.87/nw/kq/api.php?apicall=",
      confirmDirty: false,
      autoCompleteResult: [],
      redirect: false,
      mDisplay:"none",
      required:true,
      mrp:"none",
      lat:0,
      long:0,
      lButton:" Obtain location",
      mrp1:"block",
       geo_options : {
        enableHighAccuracy: true, 
        maximumAge        : 0, 
        timeout           : 10000
      },
      viewport: {
        width: 400,
        height: 400,
        latitude: 1.255833599,
        longitude: 36.8566272,
        zoom: 8
      },
      userLocation:{}
    };
  componentDidMount(){
    if (typeof window.orientation !== 'undefined') { 
      message.config({
        top: 100,
        duration: 5,
        maxCount: 3,
      });
      message.success("Go oust side for high acuracy")
      this.setState({
        mrp:"block",
        mrp1:"none"
      })

     }else{
      message.config({
        top: 100,
        duration: 5,
        maxCount: 3,
      });
       message.error("Use a mobile device for high acuracy")
       this.setState({
         mrp:"none",
         mrp1:"block"
       })
     }
  }
   db=(name)=>{

    axios({
      method: 'post',
    
      url: this.state.url+'geo',
      data: "lat="+this.state.lat+"&long="+this.state.long+"&name="+name,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then((response) => {

    if(response.data.error){
      console.log("error "+response.data.message);
      }else {

        this.setState({
          redirect: true
       });
      
      console.log("success "+response.data.message);
      }

  })
  .catch(function (response) {
      //handle error
      console.log("error"+response)
  });
   }
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }
        const values = {
          fieldsValue
        };
     this.db(fieldsValue.fname);
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
   
      setUserLocation = () => {

        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
             };
            let newViewport = {
                height: 400,
                width: 400,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 17
            }
            
            this.setState({
                viewport: newViewport,
                userLocation:setUserLocation,
                mDisplay:"block",
                lButton:"location obtained",
                lat:position.coords.latitude,
                long:position.coords.longitude,
                required:false
            })
            this.props.form.setFieldsValue({
              location: "filled",
          });
        })
    };
    
     getLocation=()=> {
   
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError,this.state.geo_options);
        
      } else { 
       message.error("Geolocation is not supported by this browser.") ;
      }
    }
    
     showPosition=(position)=> {
       this.setUserLocation();
    }
    
     showError=(error)=> {
      message.config({
        top: 100,
        duration: 2.5,
        maxCount: 3,
      });
      switch(error.code) {
        case error.PERMISSION_DENIED:
          message.error( "User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          message.error( "Location information is unavailable.");
          break;
        case error.TIMEOUT:
          message.error( "The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          message.error( "An unknown error occurred.");
          break;
      }


       
    }
render() {
  
  //const { getFieldDecorator } = this.props.form;
  const { getFieldDecorator,  } = this.props.form;

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
    return <Redirect to='/product'/>;
  }
  return (
<div style={{width:"95%",height:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",}}>

<MDBCard color="white lighten-1" style={{height:"100%"}} text="black" className="text-center">
  <MDBCardBody>
      
<MDBCard color="white" text="black" className="text-center" >
      <MDBCardBody>
    <Breadcrumb>
      <Breadcrumb.Item >
      <MDBIcon icon="user-circle" className="cyan-text "/>
        <Link to="/pi" className="text-justify">&nbsp;Profile&nbsp;</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item >
      <MDBIcon icon="warehouse" />
        <Link to="/geo">&nbsp;Shop</Link>
      </Breadcrumb.Item>
  </Breadcrumb>
  </MDBCardBody>
  </MDBCard>
  <br/>
  <div style={{display:this.state.mrp}}>
      <MDBCard><MDBCardBody>
      <i class="fas fa-quote-left " ></i>&nbsp;Here you will register your shop.You can register as many shops as you desire.&nbsp;<i class="fas fa-quote-right"></i>
      </MDBCardBody></MDBCard>
    </div>
<div >
  <MDBCard style={{display:this.state.mDisplay}}>
    <MDBCardBody>

      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken="pk.eyJ1IjoicGVuam8iLCJhIjoiY2sxdTJta3A3MDVnYjNuczJueGpjMmpsdiJ9.h4n8WU8Dy0XC3I9NRF02Bw"
        // mapStyle='mapbox://styles/mapbox/satellite-streets-v9'
        mapStyle="mapbox://styles/mapbox/streets-v11"
        pitch="60"
        // bearing="90"
        width="100%"
        
      >
                {Object.keys(this.state.userLocation).length !== 0 ? (
                   
                <Marker
                    latitude={this.state.userLocation.lat}
                    longitude={this.state.userLocation.long}
                >
                    <div>
                    <MDBIcon icon="map-marker-alt" className="fas fa-map-marker-alt fa-3x red-text pr-3" />
                  
                    </div>
                </Marker>
                ) : ( 
                <div></div>
                )}
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl />
        </div>
    </ReactMapGL>

    </MDBCardBody></MDBCard>
    <br /> 
    <MDBRow >
  
  <MDBCol md="12" className="mb-4">
    <MDBCard color="white" text="black" className="text-center" style={{maxWidth:""}}>
      <MDBCardBody>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

          <MDBRow >
<MDBCol md="5">
  
          <Form.Item label={"Shop name"
        }>{getFieldDecorator('fname', {
          rules: [{ required: true, message: 'Please input the name of your shop', whitespace: true }],
        })(<Input style={{with:"50%"}}/>)}
        </Form.Item>

</MDBCol> 
<MDBCol md="7">   
<Button
                type="primary"
                icon="environment"
                onClick={this.getLocation}
                style={{paddingRigtht:"22px"}}
            >
               {this.state.lButton}
                <br/>
              </Button>
<br/>
        <Form.Item 
        >{getFieldDecorator('location', {
          rules: [{ required:this.state.required, message: 'Click the button to obtain the shop location', whitespace: true }],
        })(<Input style={{display:"none"}}/>)}
        </Form.Item>
<br /> 
</MDBCol>  
      <Form.Item
      style={{marginLeft:"auto",marginRight:"auto"}}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> 
      </MDBRow>
    </Form>
    </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    <div style={{display:this.state.mrp1}}>
      <MDBCard><MDBCardBody>
      <i class="fas fa-quote-left " ></i>&nbsp;You need to use a mobile device to obtain an accurate location of the store.&nbsp;<i class="fas fa-quote-right"></i>
      </MDBCardBody></MDBCard>
    </div>
  </MDBCardBody>
 </MDBCard>

<br />
</div>
       );
            }}

const Geo = Form.create({ name: 'time_related_controls' })(Geo1);
export default Geo;